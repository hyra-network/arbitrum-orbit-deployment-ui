import { sepolia } from 'wagmi/chains';

import { ChainId } from '@/types/ChainId';

export function getBlockExplorerUrl(chainId: number) {
  switch (chainId) {
    case sepolia.id:
      return sepolia.blockExplorers.default.url;

    case ChainId.ArbitrumSepolia:
      return 'https://sepolia.arbiscan.io';
    case ChainId.BaseSepolia:
      return 'https://sepolia.basescan.org';

    default:
      throw new Error(`[getBlockExplorerUrl] Unexpected chainId: ${chainId}`);
  }
}
