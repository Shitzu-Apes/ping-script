import { configDotenv } from 'dotenv';
import { Contract, keyStores, connect } from 'near-api-js';
import { KeyPairEd25519 } from 'near-api-js/lib/utils';

import type { PoolContract } from './types';

configDotenv();

const accountId = process.env.ACCOUNT_ID as string;

const keyStore = new keyStores.InMemoryKeyStore();
keyStore.setKey('mainnet', accountId, new KeyPairEd25519(process.env.PRIVATE_KEY as string));

const config = {
  keyStore,
  networkId: process.env.NETWORK_ID!,
  nodeUrl: process.env.RPC_URL!
};

async function main() {
  const near = await connect(config);

  const account = await near.account(accountId);
  const contract = new Contract(account, process.env.POOL_ID!, {
    changeMethods: ['ping'],
    viewMethods: [],
    useLocalViewExecution: false
  }) as PoolContract;

  await contract.ping({ args: {} });
}
main();
