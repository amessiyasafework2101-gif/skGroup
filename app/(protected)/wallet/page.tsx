"use client"
          
import { WalletMinimal  } from "lucide-react"

export default function Wallet() {
  return (
    <div className="flex flex-col w-full h-[100vh] gap-4 p-4 pt-20"> 
      <h1 className="text-2xl font-bold">Wallet</h1>


      <div className="flex rounded-2xl bg">
        <div className="">
          <p>Available Balance</p>
          <h1>100.00 ETB</h1>
          <button className="btn btn-primary">Withdraw</button>
        </div>
        <input type="color"/>

      <WalletMinimal />
        
      </div>


    </div>
  )
}
