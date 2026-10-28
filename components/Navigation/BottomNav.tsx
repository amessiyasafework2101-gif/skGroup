"use client"

import Link from "next/link";
import { User, Users, BriefcaseBusiness, House, CircleDollarSign } from "lucide-react"
import {usePathname} from "next/navigation"

export default function BottomNav() {

  const pageName = usePathname()

  return (
    <div>
      <div className="dock dock-sm bg-blue-300/0 backdrop-blur-sm">
        <button className={`${pageName=="/dashboard"?"dock-active":""}`}>
          <a href="/dashboard"> 
            <House />
          </a>
        </button>
        
        <button className={`${pageName=="/invest"?"dock-active":""}`}>
          <a href="/invest"> 
            <CircleDollarSign />
          </a>
        </button>

        <button className={`${pageName=="/referral"?"dock-active":""}`}>
          <a href="/referral"> 
            <Users />
          </a>
        </button>

        <button className={`${pageName=="/wallet"?"dock-active":""}`}>
          <a href="/wallet"> 
            <BriefcaseBusiness />
          </a>
        </button>
        
        <button className={`${pageName=="/profile"?"dock-active":""}`}>
          <a href="/profile"> 
           <User />
          </a>
        </button>
      </div>
    </div>
  );
}
