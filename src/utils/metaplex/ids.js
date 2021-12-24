import { PublicKey } from '@solana/web3.js';

export const STORE_OWNER_ADDRESS = process.env
  .REACT_APP_STORE_OWNER_ADDRESS_ADDRESS
  ? new PublicKey(`${process.env.REACT_APP_STORE_OWNER_ADDRESS_ADDRESS}`) // DEFAULT STORE FRONT OWNER FOR METAPLEX
  : undefined;
console.debug(`Store owner address: ${STORE_OWNER_ADDRESS?.toBase58()}`);

export const AR_SOL_HOLDER_ID = new PublicKey(
  'HvwC9QSAzvGXhhVrgPmauVwFWcYZhne3hVot9EbHuFTm',
);

export const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new PublicKey(
  'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL',
);
export const BPF_UPGRADE_LOADER_ID = new PublicKey(
  'BPFLoaderUpgradeab1e11111111111111111111111',
);

export const METADATA_PROGRAM_ID = new PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
  // 'GCUQ7oWCzgtRKnHnuJGxpr5XVeEkxYUXwTKYcqGtxLv4',
);

export const MEMO_ID = new PublicKey(
  'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
);

export const VAULT_ID = new PublicKey(
  'vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn',
  // '41cCnZ1Z1upJdtsS1tzFGR34cPFgJLzvJFmgYKpCqkz7',
);

export const ENABLE_FEES_INPUT = false;

// legacy pools are used to show users contributions in those pools to allow for withdrawals of funds
export const PROGRAM_IDS = [
  {
    name: 'mainnet-beta',
  },
  {
    name: 'testnet',
  },

  {
    name: 'devnet',
  },
  {
    name: 'localnet',
  },
];

export const programIds = () => ({
  associatedToken: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  bpf_upgrade_loader: BPF_UPGRADE_LOADER_ID,
  metadata: METADATA_PROGRAM_ID,
  memo: MEMO_ID,
  vault: VAULT_ID,
});
