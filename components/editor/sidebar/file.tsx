"use client"
import { getIconForFile } from "vscode-icons-js"
import Image from "next/image"
import { TFile } from "./types"
export default function SidebarFile({data}:{data:TFile}){
    return (
        <div className="w-full flex items-center h-6 transition-colors hover:bg-muted-foreground cursor-pointer">
                
            <Image src={`/icons/${getIconForFile(data.name)}`} alt="File Icon" width={16} height={16} className="mr-2"/>
                  
            {data.name}
            </div>
    )
}