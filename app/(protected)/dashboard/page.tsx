// export const instant = false

// export default function DashboardPage() {
//   return (
//     <div className="flex flex-col items-center pt-20">
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">

//         <div className="card w-full bg-base-100 shadow-sm shadow-base-300">
//           <div className="card-body">
//             <span className="badge badge-xs badge-warning">Most Popular</span>
//             <div className="flex justify-between">
//               <h2 className="text-3xl font-bold">Premium</h2>
//               <span className="text-xl">$29/mo</span>
//             </div>
//             <ul className="mt-6 flex flex-col gap-2 text-xs">
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>High-resolution image generation</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>Customizable style templates</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>Batch processing capabilities</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>AI-driven image enhancements</span>
//               </li>
//               <li className="opacity-50">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span className="line-through">Seamless cloud integration</span>
//               </li>
//               <li className="opacity-50">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span className="line-through">Real-time collaboration tools</span>
//               </li>
//             </ul>
//             <div className="mt-6">
//               <button className="btn btn-primary btn-block">Subscribe</button>
//             </div>
//           </div>
//         </div>

//         <div className="card w-full bg-base-100 shadow-sm shadow-base-300">
//           <div className="card-body">
//             <span className="badge badge-xs badge-warning">Most Popular</span>
//             <div className="flex justify-between">
//               <h2 className="text-3xl font-bold">Premium</h2>
//               <span className="text-xl">$29/mo</span>
//             </div>
//             <ul className="mt-6 flex flex-col gap-2 text-xs">
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>High-resolution image generation</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>Customizable style templates</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>Batch processing capabilities</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>AI-driven image enhancements</span>
//               </li>
//               <li className="opacity-50">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span className="line-through">Seamless cloud integration</span>
//               </li>
//               <li className="opacity-50">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span className="line-through">Real-time collaboration tools</span>
//               </li>
//             </ul>
//             <div className="mt-6">
//               <button className="btn btn-primary btn-block">Subscribe</button>
//             </div>
//           </div>
//         </div>

//         <div className="card w-full bg-base-100 shadow-sm shadow-base-300">
//           <div className="card-body">
//             <span className="badge badge-xs badge-warning">Most Popular</span>
//             <div className="flex justify-between">
//               <h2 className="text-3xl font-bold">Premium</h2>
//               <span className="text-xl">$29/mo</span>
//             </div>
//             <ul className="mt-6 flex flex-col gap-2 text-xs">
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>High-resolution image generation</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>Customizable style templates</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>Batch processing capabilities</span>
//               </li>
//               <li>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span>AI-driven image enhancements</span>
//               </li>
//               <li className="opacity-50">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span className="line-through">Seamless cloud integration</span>
//               </li>
//               <li className="opacity-50">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
//                 <span className="line-through">Real-time collaboration tools</span>
//               </li>
//             </ul>
//             <div className="mt-6">
//               <button className="btn btn-primary btn-block">Subscribe</button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client"


import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Gift,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Plus,
  Settings,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const stats = [
  {
    title: "Total Invested",
    value: "$2,450.00",
    change: "Across 8 investments",
    icon: Package,
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Total Earnings",
    value: "$184.50",
    change: "Lifetime earnings",
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Today's Profit",
    value: "$12.50",
    change: "Example daily earnings",
    icon: CircleDollarSign,
    color: "bg-red-50 text-red-600",
  },
];

const investments = [
  {
    name: "Premium Electronics",
    category: "Electronics",
    invested: "$500.00",
    progress: 72,
    status: "Active",
    color: "bg-orange-100 text-orange-600",
    symbol: "PE",
  },
  {
    name: "Smart Devices",
    category: "Technology",
    invested: "$350.00",
    progress: 45,
    status: "Active",
    color: "bg-red-100 text-red-600",
    symbol: "SD",
  },
  {
    name: "Fashion Collection",
    category: "Fashion",
    invested: "$200.00",
    progress: 28,
    status: "Active",
    color: "bg-purple-100 text-purple-600",
    symbol: "FC",
  },
];

const transactions = [
  {
    title: "Daily earnings",
    date: "Today, 8:00 AM",
    amount: "+$12.50",
    type: "income",
  },
  {
    title: "Investment purchase",
    date: "Yesterday, 2:30 PM",
    amount: "-$100.00",
    type: "expense",
  },
  {
    title: "Referral reward",
    date: "Oct 27, 2026",
    amount: "+$5.00",
    type: "income",
  },
];

const navigation = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Investments", href: "/investments", icon: Package },
  { label: "Earnings", href: "/earnings", icon: TrendingUp },
  { label: "Referrals", href: "/referrals", icon: Users },
  { label: "Wallet", href: "/wallet", icon: Wallet },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content pt-16">
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content min-w-0">
          
          {/* Main content */}
          <main className="mx-auto w-full min-w-0 max-w-[1600px] space-y-6 p-4 sm:p-6 lg:p-8">
            {/* Welcome section */}
            <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="min-w-0">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Hello, welcome back! 👋
                </h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Here is an overview of your account.
                </p>
              </div>

              <Link
                href="/investments"
                className="btn border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white shadow-md hover:opacity-90"
              >
                <Plus size={18} />
                Explore investments
              </Link>
            </section>

            {/* Balance banner */}
            <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#EA002C] via-[#EE3C27] to-[#F47725] p-5 text-white shadow-lg sm:p-8">
              <div className="pointer-events-none absolute -right-12 -top-16 -z-10 size-64 rounded-full border-[35px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-24 right-1/3 -z-10 size-56 rounded-full bg-white/10 blur-3xl" />

              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <div className="flex items-center gap-2 text-sm text-white/85">
                    <Wallet size={18} />
                    Total wallet balance
                  </div>

                  <h2 className="mt-3 break-words text-3xl font-bold tracking-tight sm:text-5xl">
                    $2,634.50
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                    Your available balance and account activity at a glance.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/wallet"
                      className="btn border-0 bg-white text-[#EA002C] hover:bg-white/90"
                    >
                      <Plus size={18} />
                      Add funds
                    </Link>

                    <Link
                      href="/wallet/withdraw"
                      className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
                    >
                      <ArrowUpRight size={18} />
                      Withdraw
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:min-w-64">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs text-white/75">Invested</p>
                    <p className="mt-2 break-words text-lg font-bold sm:text-xl">
                      $2,450
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs text-white/75">Earnings</p>
                    <p className="mt-2 break-words text-lg font-bold sm:text-xl">
                      $184.50
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Statistics */}
            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <article
                    key={stat.title}
                    className="card min-w-0 border border-base-300 bg-base-100 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="card-body p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-sm text-base-content/60">
                            {stat.title}
                          </p>
                          <h3 className="mt-2 break-words text-2xl font-bold">
                            {stat.value}
                          </h3>
                          <p className="mt-2 text-xs text-base-content/60">
                            {stat.change}
                          </p>
                        </div>

                        <div
                          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${stat.color}`}
                        >
                          <Icon size={23} />
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            {/* Investments */}
            <section className="card min-w-0 border border-base-300 bg-base-100 shadow-sm">
              <div className="card-body min-w-0 p-4 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold sm:text-xl">
                      My investments
                    </h2>
                    <p className="mt-1 text-xs text-base-content/60 sm:text-sm">
                      A snapshot of your active investments
                    </p>
                  </div>

                  <Link
                    href="/investments"
                    className="btn btn-ghost btn-sm shrink-0 text-[#EA002C]"
                  >
                    View all <ChevronRight size={16} />
                  </Link>
                </div>

                <div className="mt-2 space-y-4">
                  {investments.map((investment) => (
                    <article
                      key={investment.name}
                      className="flex min-w-0 items-center gap-3 rounded-2xl border border-base-300 p-3 sm:gap-4 sm:p-4"
                    >
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl text-xs font-bold sm:size-12 ${investment.color}`}
                      >
                        {investment.symbol}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="break-words text-sm font-semibold sm:text-base">
                            {investment.name}
                          </h3>
                          <span className="badge badge-success badge-sm">
                            {investment.status}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-base-content/60">
                          {investment.category}
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                          <progress
                            className="progress progress-primary h-2 min-w-0 flex-1"
                            value={investment.progress}
                            max={100}
                          />
                          <span className="shrink-0 text-xs text-base-content/60">
                            {investment.progress}%
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-sm font-bold sm:text-base">
                          {investment.invested}
                        </p>
                        <p className="mt-1 text-xs text-base-content/60">
                          Invested
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            {/* Transactions and referrals */}
            <section className="grid min-w-0 grid-cols-1 gap-6 xl:grid-cols-[1.5fr_1fr]">
              <div className="card min-w-0 border border-base-300 bg-base-100 shadow-sm">
                <div className="card-body min-w-0 p-4 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-bold">Recent activity</h2>
                    <Link
                      href="/transactions"
                      className="text-sm font-medium text-[#EA002C] hover:underline"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="mt-2 divide-y divide-base-300">
                    {transactions.map((transaction, index) => (
                      <div
                        key={`${transaction.title}-${index}`}
                        className="flex min-w-0 items-center gap-3 py-4"
                      >
                        <div
                          className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                            transaction.type === "income"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {transaction.type === "income" ? (
                            <ArrowDownLeft size={19} />
                          ) : (
                            <ArrowUpRight size={19} />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="break-words text-sm font-semibold">
                            {transaction.title}
                          </p>
                          <p className="mt-1 text-xs text-base-content/60">
                            {transaction.date}
                          </p>
                        </div>

                        <p
                          className={`shrink-0 text-sm font-bold ${
                            transaction.type === "income"
                              ? "text-green-600"
                              : "text-base-content"
                          }`}
                        >
                          {transaction.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card min-w-0 overflow-hidden bg-base-100 shadow-sm">
                <div className="card-body relative p-5 sm:p-6">
                  <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-orange-100 blur-2xl" />

                  <div className="relative">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA002C] to-[#F47725] text-white">
                      <Gift size={24} />
                    </div>

                    <h2 className="mt-4 text-xl font-bold">
                      Invite friends
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-base-content/60">
                      Invite friends to join ProfitHub and earn rewards when
                      they meet the referral program requirements.
                    </p>

                    <div className="mt-5 flex items-center justify-between rounded-xl bg-base-200 p-4">
                      <div>
                        <p className="text-xs text-base-content/60">
                          Successful referrals
                        </p>
                        <p className="mt-1 text-2xl font-bold">12</p>
                      </div>
                      <Users className="text-[#EA002C]" size={27} />
                    </div>

                    <Link
                      href="/referral"
                      className="btn mt-5 w-full border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white hover:opacity-90"
                    >
                      Invite friends <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <footer className="pb-2 pt-2 text-center text-xs text-base-content/50">
              SK Groups © 2026 · User dashboard data
            </footer>
          </main>
        </div>

        
      </div>
    </div>
  );
}
