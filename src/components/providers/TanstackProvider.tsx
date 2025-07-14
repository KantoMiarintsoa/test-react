'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

const queryClient=new QueryClient()

function TanstackProvider({children}:{children:React.ReactNode}) {
  return (
    <div>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </div>
  )
}

export default TanstackProvider