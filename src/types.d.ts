import type { Contract } from 'near-api-js';

export type ContractChangeCall<T> = (params: {
  args: T;
  gas?: string;
  amount?: string;
}) => Promise<void>;

export interface PoolContract extends Contract {
  ping: ContractChangeCall<object>;
}
