import { ChevronLeft, Clock, Pencil } from "lucide-react";
import { Button } from "../ui/button";
import logo from "../../assests/logo.svg"
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
export default function Navbar() {
    return (
        <div className="h-14 px-2 w-full flex items-center justify-between border-b border-border">
            <div className="flex items-center space-x-4">
                <button className="ring-offset-2 ring-offset-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none rounded-sm">
                    <Image src={logo} alt="logo" width={36} height={36} />
                </button>
                <div className="flex items-center font-medium text-sm">
                    My React Project
                    <div className="h-7 w-7 ml-1 flex items-center justify-center transition-color bg-transparent hover:bg-muted-foreground/25 rounded">
                        <Pencil className="w-4 h-4" />
                    </div>
                </div>
            </div>
            <UserButton/>
        </div>
    )
}