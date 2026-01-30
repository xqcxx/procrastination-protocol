import { STACKS_TESTNET, STACKS_MAINNET } from '@stacks/network';

export const network = process.env.NEXT_PUBLIC_STACKS_NETWORK === 'mainnet'
  ? STACKS_MAINNET
  : STACKS_TESTNET;

export const explorerUrl = (txId: string) =>
  `https://explorer.hiro.so/txid/${txId}?chain=${process.env.NEXT_PUBLIC_STACKS_NETWORK || 'testnet'}`;

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '';
