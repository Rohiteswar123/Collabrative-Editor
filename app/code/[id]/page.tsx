"use client"
import { useClerk } from "@clerk/nextjs";
import dynamic from "next/dynamic";
const CodeEditor=dynamic(()=>import("@/components/editor"),{
  ssr:false
})
const Navbar=dynamic(()=>import("@/components/navbar"),{
  ssr:false
})
export default function Home() {
  const clerk=useClerk()
  console.log(clerk.loaded)
  return (

    <div className="flex w-screen flex-col h-screen bg-background">
      <div className="h-12 flex"><Navbar /></div>
      <div className="w-screen flex grow ">
         {clerk.loaded?<CodeEditor/>: null} 
      </div>

    </div>
    
  );
}
