import { File, FilePlus, Folder, FolderPlus, Search } from "lucide-react";
import Image from "next/image";
import { getIconForFile } from "vscode-icons-js";
import { TFolder,TFile } from "./types";
import SidebarFile from "./file";
import SidebarFolder from "./folder";
const data:(TFile|TFolder)[]=[
    {
        id:"index.tsx",
        name:"index.tsx",
        type:"file",

    },
    {
        id:"components",
        name:"components",
        type:"folder",
        children:[
            {
                id:"navbar.tsx",
                name:"navbar.tsx",
                type:"file",
            },
            {
                id:"ui",
                name:"ui",
                type:"folder",
                children:[]
            }
        ]
    }
]
export default function Sidebar(){
    return (
        <div className="h-full flex w-56 flex-col item-start p-2">
           <div className="flex w-full items-center justify-between h-8 m-1">
              <div className="text-muted-foreground">EXPLORER</div>
              <div className="flex space-x-1">
                <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded">
                    <FilePlus className="w-4 h-4"/>
                </div>
                <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded">
                    <FolderPlus className="w-4 h-4"/>
                </div>
                <div className="h-6 w-6 text-muted-foreground ml-0.5 flex items-center justify-center translate-x-1 transition-colors bg-transparent hover:bg-muted-foreground/25 cursor-pointer rounded">
                    <Search className="w-4 h-4" />
                </div>
              </div>
           </div>
           <div className="w-full mt-2">
              {
                data.map((child)=> child.type==="file"? <SidebarFile key={child.id} data={child }/>
                :<SidebarFolder key={child.id} data={child}/>
                )
              }
           </div>
        </div>
    )
}