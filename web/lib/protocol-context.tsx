'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface ProtocolData {
  lockedAmount: number;
  streakDays: number;
  currentTemptation: any;
  ownedBadges: number[];
  leaderboard: any[];
}

interface ProtocolContextType {
  data: ProtocolData;
  loading: boolean;
  error: string | null;
  refreshData: () => Promise<void>;
  setData: (data: Partial<ProtocolData>) => void;
  clearError: () => void;
}

const defaultData: ProtocolData = {
  lockedAmount: 0,
  streakDays: 0,
  currentTemptation: null,
  ownedBadges: [],
  leaderboard: []
};

const ProtocolContext = createContext<ProtocolContextType | undefined>(undefined);

export function ProtocolProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<ProtocolData>(defaultData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setData = useCallback((newData: Partial<ProtocolData>) => {
    setDataState(prev => ({ ...prev, ...newData }));
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const refreshData = useCallback(async () => {
    // This will be implemented by pages
    setLoading(true);
    setError(null);
    try {
      // Placeholder - actual implementation in pages
      await Promise.resolve();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to refresh data');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ProtocolContext.Provider value={{
      data,
      loading,
      error,
      refreshData,
      setData,
      clearError
    }}>
      {children}
    </ProtocolContext.Provider>
  );
}

export function useProtocol() {
  const context = useContext(ProtocolContext);
  if (context === undefined) {
    throw new Error('useProtocol must be used within a ProtocolProvider');
  }
  return context;
}
