'use client';

import { useWallet } from '../hooks/use-wallet';

export default function WalletConnect() {
  const { address, connectWallet, disconnectWallet } = useWallet();

  if (address) {
    return (
      <button
        onClick={disconnectWallet}
        className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors"
      >
        Disconnect {address.slice(0, 6)}...{address.slice(-4)}
      </button>
    );
  }

  return (
    <button
      onClick={connectWallet}
      className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md hover:bg-zinc-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
    >
      Connect Wallet
    </button>
  );
}
