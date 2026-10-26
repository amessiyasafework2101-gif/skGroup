"use client"


import Link from "next/link"
import { useThemeStore } from "@/stores/theme-store"
import {Sun, Moon} from "lucide-react"
import { useState } from "react"



export default function TopNav() {


  const theme = useThemeStore((state)=> state.theme)
  const toggleTheme = useThemeStore((state)=> state.toggleTheme)
  const[checked, setChecked]=useState(theme=="light"?true:false)

  return (
    

    <div className="navbar bg-base-100 shadow-sm fixed z-10">
  <div className="navbar-start">
    
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  
  <div className="navbar-end gap-1">
    <Moon size={20}/>
    <input
    onClick={() => {
      toggleTheme()
      setChecked(checked?false:true)
    }}
      type="checkbox"
      checked={checked}
      className="toggle border-indigo-600 bg-indigo-500 checked:border-orange-500 checked:bg-orange-400 checked:text-orange-800"
    />
    <Sun size={20}/>
  </div>
</div>
  );
}
