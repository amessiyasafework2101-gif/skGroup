
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Wallet,
  X,
} from "lucide-react";

type InvestmentItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  minimum: number;
  duration: number;
  dailyRate: string;
  status: "Available" | "Coming soon";
  icon: string;
  color: string;
  featured?: boolean;
};

const items: InvestmentItem[] = [
  {
    id: "electronics",
    name: "Electronics",
    category: "Technology",
    description:
      "An illustrative investment opportunity connected to electronics commerce.",
    minimum: 100,
    duration: 30,
    dailyRate: "Variable",
    status: "Available",
    icon: "⚡",
    color: "from-orange-100 to-amber-50",
    featured: true,
  },
  {
    id: "smart-devices",
    name: "Smart Devices",
    category: "Technology",
    description:
      "Explore a sample opportunity associated with smart-device sales.",
    minimum: 250,
    duration: 45,
    dailyRate: "Variable",
    status: "Available",
    icon: "📱",
    color: "from-red-100 to-orange-50",
  },
  {
    id: "fashion",
    name: "Fashion Collection",
    category: "Retail",
    description:
      "An example opportunity related to fashion and retail operations.",
    minimum: 50,
    duration: 15,
    dailyRate: "Variable",
    status: "Available",
    icon: "👕",
    color: "from-purple-100 to-pink-50",
  },
  {
    id: "home-goods",
    name: "Home Essentials",
    category: "Retail",
    description:
      "A sample product-based opportunity for household goods.",
    minimum: 150,
    duration: 60,
    dailyRate: "Variable",
    status: "Available",
    icon: "🏠",
    color: "from-blue-100 to-cyan-50",
  },
  {
    id: "green-energy",
    name: "Green Energy",
    category: "Energy",
    description:
      "A sample listing for an energy-related business opportunity.",
    minimum: 500,
    duration: 90,
    dailyRate: "Variable",
    status: "Coming soon",
    icon: "🌱",
    color: "from-green-100 to-emerald-50",
  },
  {
    id: "business-growth",
    name: "Business Growth",
    category: "Business",
    description:
      "An illustrative listing for a business growth opportunity.",
    minimum: 1000,
    duration: 120,
    dailyRate: "Variable",
    status: "Coming soon",
    icon: "📈",
    color: "from-amber-100 to-yellow-50",
  },
];

const categories = [
  "All",
  "Technology",
  "Retail",
  "Energy",
  "Business",
];

const money = (amount: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);

export default function InvestmentsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [selected, setSelected] = useState<InvestmentItem | null>(null);
  const [amount, setAmount] = useState("100");
  const [notice, setNotice] = useState("");

  const filteredItems = useMemo(() => {
    const result = items.filter((item) => {
      const matchesCategory =
        category === "All" || item.category === category;

      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (sort === "minimum-low") {
      result.sort((a, b) => a.minimum - b.minimum);
    } else if (sort === "minimum-high") {
      result.sort((a, b) => b.minimum - a.minimum);
    } else if (sort === "duration") {
      result.sort((a, b) => a.duration - b.duration);
    }

    return result;
  }, [search, category, sort]);

  function openInvestment(item: InvestmentItem) {
    setNotice("");
    setAmount(String(item.minimum));
    setSelected(item);
  }

  function continueInvestment() {
    if (!selected) return;

    const value = Number(amount);

    if (!Number.isFinite(value) || value < selected.minimum) {
      setNotice(
        `The minimum amount for this listing is ${money(selected.minimum)}.`,
      );
      return;
    }

    // UI demonstration only. Do not deduct funds or create investments here.
    setNotice(
      "Review only: connect this action to your authenticated server endpoint before accepting real investments.",
    );
  }

  return (
    <main className="min-h-screen min-w-0 bg-base-200 text-base-content pt-18">
      {/* Header */}
      <header className="border-b border-base-300 bg-base-100">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-bold sm:text-2xl">
              Investments
            </h1>
            <p className="mt-1 text-xs text-base-content/60 sm:text-sm">
              Explore available opportunities
            </p>
          </div>

        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#EA002C] via-[#EF3828] to-[#F47725] p-5 text-white shadow-lg sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-12 -top-16 -z-10 size-60 rounded-full border-[32px] border-white/10 sm:size-72" />
          <div className="pointer-events-none absolute -bottom-20 right-1/3 -z-10 size-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium">
                <Sparkles size={14} />
                Investment marketplace
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
                Find your next opportunity.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
                Explore listings, compare terms, and review the details before
                deciding whether an opportunity is right for you.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn border-0 bg-white text-[#EA002C] hover:bg-white/90"
                >
                  Explore listings <ArrowRight size={18} />
                </a>
                <Link
                  href="/my-investments"
                  className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  My investments
                </Link>
              </div>
            </div>

            <div className="hidden size-36 items-center justify-center rounded-full border border-white/20 bg-white/10 md:flex lg:size-44">
              <div className="flex size-24 items-center justify-center rounded-full bg-white/15 lg:size-32">
                <ArrowUpRight size={64} strokeWidth={1.4} />
              </div>
            </div>
          </div>
        </section>

        {/* Account summary */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <SummaryCard
            title="Available balance"
            value="$2,634.50"
            detail="Illustrative wallet balance"
            icon={<Wallet size={22} />}
          />
          <SummaryCard
            title="Active investments"
            value="8"
            detail="Example account data"
            icon={<CheckCircle2 size={22} />}
          />
          <SummaryCard
            title="Total invested"
            value="$2,450.00"
            detail="Illustrative total"
            icon={<ArrowUpRight size={22} />}
          />
        </section>

        {/* Marketplace */}
        <section id="marketplace" className="scroll-mt-24 space-y-5">
          <div>
            <h2 className="text-xl font-bold sm:text-2xl">
              Explore opportunities
            </h2>
            <p className="mt-1 text-sm text-base-content/60">
              Browse the sample listings below.
            </p>
          </div>

          {/* Search and filters */}
          <div className="flex min-w-0 flex-col gap-3 lg:flex-row">
            <label className="input input-bordered flex min-w-0 flex-1 items-center gap-2 bg-base-100">
              <Search size={19} className="shrink-0 text-base-content/50" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search opportunities..."
                className="min-w-0 flex-1"
              />
            </label>

            <label className="flex items-center gap-2">
              <SlidersHorizontal
                size={17}
                className="shrink-0 text-base-content/60"
              />
              <span className="sr-only">Sort listings</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="select select-bordered w-full bg-base-100 sm:w-52"
              >
                <option value="featured">Featured first</option>
                <option value="minimum-low">Minimum: low to high</option>
                <option value="minimum-high">Minimum: high to low</option>
                <option value="duration">Shortest duration</option>
              </select>
            </label>
          </div>

          {/* Category tabs */}
          <div className="flex max-w-full gap-2 overflow-x-auto pb-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`btn btn-sm shrink-0 rounded-full ${
                  category === item
                    ? "border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white"
                    : "btn-outline border-base-300 bg-base-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <p className="text-sm text-base-content/60">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "listing" : "listings"} found
          </p>

          {/* Investment cards */}
          {filteredItems.length > 0 ? (
            <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="card min-w-0 overflow-hidden border border-base-300 bg-base-100 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${item.color}`}
                  >
                    <span className="text-6xl" aria-hidden="true">
                      {item.icon}
                    </span>

                    {item.featured && (
                      <span className="absolute left-4 top-4 badge border-0 bg-white text-[#EA002C]">
                        <Sparkles size={12} />
                        Featured
                      </span>
                    )}

                    <span
                      className={`absolute right-4 top-4 badge ${
                        item.status === "Available"
                          ? "badge-success"
                          : "badge-ghost"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="card-body min-w-0 gap-4 p-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#EA002C]">
                        {item.category}
                      </p>
                      <h3 className="mt-2 break-words text-lg font-bold">
                        {item.name}
                      </h3>
                      <p className="mt-2 min-h-12 text-sm leading-6 text-base-content/60">
                        {item.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 rounded-2xl bg-base-200 p-4">
                      <div className="min-w-0">
                        <p className="text-xs text-base-content/60">
                          Minimum
                        </p>
                        <p className="mt-1 break-words font-bold">
                          {money(item.minimum)}
                        </p>
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs text-base-content/60">
                          Term
                        </p>
                        <p className="mt-1 font-bold">
                          {item.duration} days
                        </p>
                      </div>

                      <div className="col-span-2 border-t border-base-300 pt-3">
                        <p className="text-xs text-base-content/60">
                          Return information
                        </p>
                        <p className="mt-1 text-sm font-semibold">
                          {item.dailyRate}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => openInvestment(item)}
                      disabled={item.status !== "Available"}
                      className="btn w-full border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white hover:opacity-90 disabled:bg-base-300"
                    >
                      {item.status === "Available"
                        ? "View opportunity"
                        : "Coming soon"}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-base-300 bg-base-100 px-5 py-14 text-center">
              <Search
                size={32}
                className="mx-auto text-base-content/40"
              />
              <h3 className="mt-4 font-bold">No listings found</h3>
              <p className="mt-2 text-sm text-base-content/60">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="btn btn-ghost mt-3 text-[#EA002C]"
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        {/* Trust note */}
        <section className="flex items-start gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 sm:p-5">
          <ShieldCheck
            size={22}
            className="mt-0.5 shrink-0 text-[#EA002C]"
          />
          <div>
            <h3 className="font-semibold">Review before investing</h3>
            <p className="mt-1 text-sm leading-6 text-base-content/60">
              Understand the underlying business, fees, risks, withdrawal
              restrictions, and whether returns are variable or guaranteed
              before committing funds. All listings and account figures on
              this demo page are illustrative.
            </p>
          </div>
        </section>

        <footer className="pb-3 text-center text-xs text-base-content/50">
          SK Groups © 2026 
        </footer>
      </div>

      {/* Investment review modal */}
      {selected && (
        <div
          className="modal modal-open"
          role="dialog"
          aria-modal="true"
          aria-labelledby="investment-modal-title"
        >
          <div className="modal-box w-11/12 max-w-lg">
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${selected.color} text-2xl`}
                >
                  {selected.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    id="investment-modal-title"
                    className="break-words text-lg font-bold"
                  >
                    {selected.name}
                  </h3>
                  <p className="text-sm text-base-content/60">
                    {selected.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelected(null)}
                className="btn btn-ghost btn-circle btn-sm shrink-0"
                aria-label="Close dialog"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mt-5 rounded-xl bg-base-200 p-4">
              <p className="text-sm text-base-content/60">
                Minimum investment
              </p>
              <p className="mt-1 text-2xl font-bold">
                {money(selected.minimum)}
              </p>
              <p className="mt-3 text-sm text-base-content/60">
                Illustrative term: {selected.duration} days. Actual returns
                depend on the verified opportunity terms and risks.
              </p>
            </div>

            <label className="form-control mt-5">
              <span className="label-text mb-2 font-medium">
                Investment amount (USD)
              </span>
              <input
                type="number"
                min={selected.minimum}
                step="0.01"
                value={amount}
                onChange={(event) => {
                  setAmount(event.target.value);
                  setNotice("");
                }}
                className="input input-bordered w-full"
              />
            </label>

            <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-base-content/60">
              <ShieldCheck size={17} className="mt-0.5 shrink-0" />
              <p>
                This demo does not reserve funds, create an investment, or
                promise returns. Review the actual terms before proceeding.
              </p>
            </div>

            {notice && (
              <div role="status" className="alert mt-4 text-sm">
                {notice}
              </div>
            )}

            <div className="modal-action flex flex-col-reverse gap-2 sm:flex-row">
              <button
                onClick={() => setSelected(null)}
                className="btn btn-ghost w-full sm:w-auto"
              >
                Cancel
              </button>
              <button
                onClick={continueInvestment}
                className="btn w-full border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white hover:opacity-90 sm:w-auto"
              >
                Review amount <ArrowRight size={17} />
              </button>
            </div>
          </div>

          <button
            className="modal-backdrop"
            aria-label="Close dialog"
            onClick={() => setSelected(null)}
          />
        </div>
      )}
    </main>
  );
}

function SummaryCard({
  title,
  value,
  detail,
  icon,
}: {
  title: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="card min-w-0 border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-sm text-base-content/60">{title}</p>
            <p className="mt-2 break-words text-2xl font-bold">{value}</p>
            <p className="mt-2 text-xs text-base-content/60">{detail}</p>
          </div>
          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#EA002C]">
            {icon}
          </div>
        </div>
      </div>
    </article>
  );
}
