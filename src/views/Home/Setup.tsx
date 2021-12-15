import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const SetupView = () => {

  return (
    <>
      <WalletMultiButton />
      <WalletDisconnectButton />
    </>
  )
}