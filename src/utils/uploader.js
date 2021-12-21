import Arweave from "arweave";

const initOptions = {
  host: "arweave.net", // Hostname or IP address for a Arweave host
  port: 443, // Port
  protocol: "https", // Network protocol http or https
  timeout: 20000, // Network request timeouts in milliseconds
  logging: false, // Enable network request logging
};

let key = null;
const arweave = Arweave.init(initOptions);

const runUpload = async (data, tags, isUploadByChunk = false) => {
  const tx = await arweave.createTransaction({ data: data }, key);

  Object.entries(tags).forEach(([key, value]) => {
    tx.addTag(key, value);
  })

  console.log("tx", tx)
  await arweave.transactions.sign(tx, key);

  if (isUploadByChunk) {
    const uploader = await arweave.transactions.getUploader(tx);

    while (!uploader.isComplete) {
      await uploader.uploadChunk();
      console.log(
        `${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`
      );
    }
  }

  //   Do we need to post with uploader?
  await arweave.transactions.post(tx);

  return tx;
}

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();  
    reader.onload = () => {
      resolve(reader.result)
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

export default async function uploader(files, metadataContent, mintKey) {
  key = await arweave.wallets.generate();

  const file = files[0]
  let tags = {
    'Content-Type': file.type,
    'mint': mintKey,
  };

  const data = await readFile(file)
  const { id } = await runUpload(data, tags, true)
  const imageUrl = id ? `https://arweave.net/${id}` : undefined
  console.log("imageUrl", imageUrl);

  tags = {
    'Content-Type': 'application/json',
    'mint': mintKey,
  };
  const updatedMetadata = {
    ...metadataContent,
    image: imageUrl,
    properties: {
      ...metadataContent.properties,
      files: [{
        uri: imageUrl,
        type: files[0].type
      }]
    }
  }
  console.log('updatedMetadata:', updatedMetadata)
  const metadataString = JSON.stringify(updatedMetadata);
  const { id: metadataId } = await runUpload(metadataString, tags);
  
  const metadataUrl = id ? `https://arweave.net/${metadataId}` : undefined;
  return { imageUrl, metadataUrl, updatedMetadata }
};
