"use client"
          
import { WalletMinimal  } from "lucide-react"

export default function Wallet() {
  return (
    <div className="flex flex-col w-full h-[100vh] gap-4 p-4 pt-20"> 
      <h1 className="text-2xl font-bold">Wallet</h1>


      <div className="flex rounded-2xl bg-gradient-to-r from-[#EA002C] to-[#F47725] p-4 text-base-200">
        <div className="w-full">
          <p>Available Balance</p>
          <h1 className="text-3xl pb-3 font-bold">100.00 ETB</h1>
          <button className="btn btn-primary btn-lg rounded-2xl border-2 border-[#F47725]">Withdraw</button>
        </div>

        <div className="flex flex-col gap-5 px-4">
          <WalletMinimal size="60" className="text-base-100"/>
        </div>
        
      </div>


      {/* "Table" */}

      <div className="flex w-full">
        <div className="flex flex-col w-full">
          <div className="flex w-full p-4 gap-2">
            <button className="btn btn-primary flex-1">Deposites</button>
            <button className="btn flex-1">Withdrawals</button>
          </div>

          <div>
            <div className="flex w-full px-4">
              <div className="list w-full rounded-2xl p-2 bg-base-100 shadow-md">
                
                <div className="list-row flex items-center gap-2 w-full py-2">
                  <WalletMinimal size="40" className="text-[#F47725] p-2 bg-[#F47725]/20 rounded-full"/>
                  <p className="flex-1">Withdrawal</p>
                  <p className="text-green-500 font-bold">+ 100.00 ETB</p>
                </div>

                <div className="list-row flex items-center gap-2 w-full py-2">
                  <WalletMinimal size="40" className="text-[#F47725] p-2 bg-[#F47725]/20 rounded-full"/>
                  <p className="flex-1">Withdrawal</p>
                  <p className="text-green-500 font-bold">+ 100.00 ETB</p>
                </div>

                <div className="list-row flex items-center gap-2 w-full py-2">
                  <WalletMinimal size="40" className="text-[#F47725] p-2 bg-[#F47725]/20 rounded-full"/>
                  <p className="flex-1">Withdrawal</p>
                  <p className="text-green-500 font-bold">+ 100.00 ETB</p>
                </div>

                

              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="pb-3 text-center text-xs text-base-content/50">
        SK Groups © 2026 
      </footer>
    </div>
  )
}
