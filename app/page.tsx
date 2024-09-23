import Image from "next/image";
import {CodeEditor} from "@/components/editor";
export default function Home() {
  return (
    <div className="flex w-screen flex-col h-screen bg-background">
      <div className="h-12 flex">NAVBAR</div>
      <div className="w-screen flex grow ">
           <CodeEditor/>
      </div>

    </div>
    
  );
}
