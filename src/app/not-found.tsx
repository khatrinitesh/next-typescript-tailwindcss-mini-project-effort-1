"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const NotFound:React.FC = () => {

    const router = useRouter();

    const goBack = () => {
        router.push("/");
    }
  return (
    <div>
      <h3>404 page not found</h3>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default NotFound
