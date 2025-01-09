'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React, { PropsWithChildren } from 'react';

import ApiErrorManager from './ApiErrorManager';
import useCreateQueryClient from './useCreateQueryClient';

export default function QueryClientProviders({ children }: PropsWithChildren) {
  const client = useCreateQueryClient();

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <ApiErrorManager />
        {children}
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
