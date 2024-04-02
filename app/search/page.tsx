"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Chat component to ensure it's only included on the client side
const DynamicChatComponent = dynamic(() => import('@/components/chat').then(mod => mod.Chat), { ssr: false });


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
   <main className="relative container flex min-h-screen flex-col">
    {/* <div className="flex flex-1 py-4"> */}
      <div className="w-full">
        <DynamicChatComponent/>
      </div>
    {/* </div> */}
   </main>
  );
}
