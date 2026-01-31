'use client';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  message?: string;
}

export function LoadingSpinner({ size = 'md', message }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-zinc-300 dark:border-zinc-700 border-t-blue-600`}
        role="status"
        aria-label="Loading"
      />
      {message && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{message}</p>
      )}
    </div>
  );
}

interface LoadingCardProps {
  title?: string;
  message?: string;
}

export function LoadingCard({ title, message = 'Loading...' }: LoadingCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800">
      {title && (
        <h3 className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="flex items-center justify-center py-8">
        <LoadingSpinner message={message} />
      </div>
    </div>
  );
}

interface SkeletonCardProps {
  lines?: number;
}

export function SkeletonCard({ lines = 3 }: SkeletonCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 animate-pulse">
      <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-1/3 mb-6"></div>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-full mb-3"
          style={{ width: `${100 - i * 20}%` }}
        ></div>
      ))}
    </div>
  );
}
