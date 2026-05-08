"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollTop({childern}){
    const pathname=usePathname();
    useEffect(()=>{
        window.scrollTo(0,0)
    },pathname)
    return childern
}