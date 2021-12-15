import { clusterApiUrl, Connection } from '@solana/web3.js';
import React, { useContext, useMemo, useState } from 'react';

export type ENV = 'mainnet-beta' | 'testnet' | 'devnet' | 'localnet';

export const ENDPOINTS = [
  {
    name: 'mainnet-beta' as ENV,
    endpoint: 'https://explorer-api.mainnet-beta.solana.com',
  },
  {
    name: 'testnet' as ENV,
    endpoint: clusterApiUrl('testnet'),
  },
  {
    name: 'devnet' as ENV,
    endpoint: 'https://explorer-api.devnet.solana.com',
  },
  {
    name: 'localnet' as ENV,
    endpoint: 'http://127.0.0.1:8899',
  },
];

const DEFAULT = ENDPOINTS[0].endpoint;

interface ConnectionConfig {
  env: ENV;
  connection: Connection;
  sendConnection: Connection;
  endpoint: string;
  setEndpoint: (value: string) => void;
}

const ConnectionContext = React.createContext<ConnectionConfig>({
  env: ENDPOINTS[0].name,
  connection: new Connection(DEFAULT, 'recent'),
  sendConnection: new Connection(DEFAULT, 'recent'),
  endpoint: DEFAULT,
  setEndpoint: () => {},
});

export function ConnectionProvider({ children = undefined as any }) {
  const [endpoint, setEndpoint] = useState(ENDPOINTS[0].endpoint);

  const connection = useMemo(
    () => new Connection(endpoint, 'recent'),
    [endpoint],
  );
  const sendConnection = useMemo(
    () => new Connection(endpoint, 'recent'),
    [endpoint],
  );

  const env = ENDPOINTS.find(end => end.endpoint === endpoint)?.name || ENDPOINTS[0].name;

  return (
    <ConnectionContext.Provider
      value={{
        env,
        connection,
        sendConnection,
        endpoint,
        setEndpoint,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
}

export function useConnection() {
  return useContext(ConnectionContext).connection as Connection;
}

export function useSendConnection() {
  return useContext(ConnectionContext)?.sendConnection;
}

export function useConnectionConfig() {
  const context = useContext(ConnectionContext);
  return {
    env: context.env,
    endpoint: context.endpoint,
    setEndpoint: context.setEndpoint,
  };
}
