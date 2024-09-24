import { File, FilePlus, Folder, FolderPlus, Search } from "lucide-react";

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
              <div className="w-full flex items-center h-6 transition-colors hover:bg-muted-foreground cursor-pointer">
                <File className="w-4 h-4 mr-2"/>
                index.html
              </div>
              <div className="w-full flex items-center h-6 transition-colors hover:bg-muted-foreground cursor-pointer">
                <Folder className="w-4 h-4 mr-2"/>
                styles 
              </div>
           </div>
        </div>
    )
}