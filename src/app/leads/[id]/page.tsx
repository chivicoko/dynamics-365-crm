"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

const SinglePage = () => {
    const router = useRouter();

  return (
    <div>
        <p>Single Lead&apos;s Page</p>
        <button onClick={() => router.back()} className='mt-3 py-1 px-4 rounded-sm text-sm text-white bg-blue-500 md:hover:bg-blue-600'>Back</button>
    </div>
  )
}

export default SinglePage;