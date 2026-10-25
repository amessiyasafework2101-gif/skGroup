import Link from "next/link";
<<<<<<< HEAD
import { User, BriefcaseBusiness } from "lucide-react"

export default function BottomNav() {
  return (
    <div>
      <div className="dock dock-md">
        <button className="">
          <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><polyline points="1 11 12 2 23 11" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2"></polyline><path d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></path><line x1="12" y1="22" x2="12" y2="18" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></line></g></svg>
          
        </button>
        
        <button className="dock-active">
          <BriefcaseBusiness />
        </button>
        
        <button className="">
          <User />
        </button>
      </div>
    </div>
=======


export default function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <Link href="/dashboard">
        <span>⌂</span>
        <span>Home</span>
      </Link>

      <Link href="/messages">
        <span>✉</span>
        <span>Messages</span>
      </Link>

      <Link href="/userProfile">
        <span>♙</span>
        <span>Profile</span>
      </Link>
    </nav>
>>>>>>> d34d41aef3345a30b1738e179604cf272aaf1104
  );
}
