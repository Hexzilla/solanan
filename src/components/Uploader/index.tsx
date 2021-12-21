import { Upload, Image } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Dragger } = Upload;

const getBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

export const ImageUploader = (props: any) => {
  const [file, setFile] = useState(null)
  const [uri, setUri] = useState<string>('')
  
  const onChange = async (info: any) => {
    setFile(info.file.originFileObj)

    const base64 = await getBase64(info.file.originFileObj)
    setUri(base64)
  }

  const onDrop = (e: any) => {
    console.log('Dropped files', e.dataTransfer.files);
  }

  return (
    <Dragger 
      name={props.name}
      accept= ".jpeg,.jpg,.png,.gif"
      multiple={false}
      showUploadList={false}
      onChange={onChange}
      onDrop={onDrop}
    >
      { file && <Image width={200} src={uri} preview={false} alt="..." /> }
      { !file && 
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
      }
      <p className="ant-upload-text">Upload Preview</p>
      <p className="ant-upload-hint">
        Supported file formats: .jpeg, .png and .gif
        <br/>
        Max file size is 10 MB.
      </p>
    </Dragger>
  )
}
