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
          <Link href="/dashboard"> 
            <House />
          </Link>
        </button>
        
        <button className={`${pageName=="/investments"?"dock-active":""}`}>
          <Link href="/investments"> 
            <CircleDollarSign />
          </Link>
        </button>

        <button className={`${pageName=="/referral"?"dock-active":""}`}>
          <Link href="/referral"> 
            <Users />
          </Link>
        </button>

        <button className={`${pageName=="/wallet"?"dock-active":""}`}>
          <Link href="/wallet"> 
            <BriefcaseBusiness />
          </Link>
        </button>
        
        <button className={`${pageName=="/profile"?"dock-active":""}`}>
          <Link href="/profile"> 
           <User />
          </Link>
        </button>
      </div>
    </div>
  );
}
