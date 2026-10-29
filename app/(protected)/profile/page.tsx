"use client"


import { CircleUser, ChevronRight } from "lucide-react"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export default function Profile() {

  const handleLogout = async() => {
    try{
      await signOut(auth)
    }catch(error){
      console.error("Logout failed:",error)
    }
  }


  return (
    <div className="flex flex-col w-full pt-16 bg-base-200 h-[100vh] gap-2">
      <div className="flex flex-row gap-4 items-center w-full px-4 py-3 mb-3">
        <div><img className="size-15 rounded-full" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRo5RsazUIy3LPn-DG57NPTKgVyRcUqqJODFRmkEdbg&s=10"}/></div>
        <div>
          <h1 className="text-2xl font-bold">Jone Doe</h1>
          <p className="text-base-400/70">jonedoe@gmail.com</p>
        </div>
        
      </div>


      <div className="flex w-full px-4">
        <div className="flex flex-col w-full rounded-2xl p-2 bg-base-100 shadow-md">
          <div className="flex items-center gap-2 w-full border-b-1 border-gray-400/60 py-2">
            <CircleUser />
            <p className="w-full">Withdrawal</p>
            <ChevronRight />
          </div>

          <div className="flex items-center gap-2 w-full border-b-1 border-gray-400/60 py-2">
            <CircleUser />
            <p className="w-full">Withdrawal</p>
            <ChevronRight />
          </div>

          <div className="flex items-center gap-2 w-full py-2">
            <CircleUser />
            <p className="w-full">Withdrawal</p>
            <ChevronRight />
          </div>

        </div>
      </div>

      
      <div className="flex w-full px-4">
        <button className="btn btn-outline btn-primary w-full mt-4 rounded-lg">Logout</button>
      </div>

      <footer className="pb-3 text-center text-xs text-base-content/50">
          SK Groups © 2026 
      </footer>

    </div>
  )
}
