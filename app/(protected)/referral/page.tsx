
"use client";


import { useState } from "react";
import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Copy,
  Gift,
  Link2,
  Share2,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

const referralCode = "PROFIT-ABC123";
const referralLink = `https://profithub.example/register?ref=${referralCode}`;

const stats = [
  {
    label: "Total referrals",
    value: "24",
    description: "People who joined",
    icon: Users,
    iconClass: "bg-orange-50 text-orange-600",
  },
  {
    label: "Successful referrals",
    value: "12",
    description: "Met reward requirements",
    icon: Check,
    iconClass: "bg-green-50 text-green-600",
  },
  {
    label: "Pending rewards",
    value: "$15.00",
    description: "Awaiting verification",
    icon: Gift,
    iconClass: "bg-amber-50 text-amber-600",
  },
];

const friends = [
  {
    name: "Abebe K.",
    email: "ab***@example.com",
    date: "Oct 28, 2026",
    status: "Reward paid",
    reward: "$5.00",
    initials: "AK",
    color: "bg-orange-100 text-orange-700",
  },
  {
    name: "Mimi T.",
    email: "mi***@example.com",
    date: "Oct 25, 2026",
    status: "Pending",
    reward: "$5.00",
    initials: "MT",
    color: "bg-pink-100 text-pink-700",
  },
  {
    name: "Dawit B.",
    email: "da***@example.com",
    date: "Oct 21, 2026",
    status: "Reward paid",
    reward: "$5.00",
    initials: "DB",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Sara M.",
    email: "sa***@example.com",
    date: "Oct 18, 2026",
    status: "Registered",
    reward: "—",
    initials: "SM",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function ReferralsPage() {
  const [copied, setCopied] = useState(false);

  async function copyReferralLink() {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy your referral link:", referralLink);
    }
  }

  async function shareReferralLink() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Join ProfitHub",
          text: "Join me on ProfitHub using my referral link.",
          url: referralLink,
        });
      } catch {
        // Sharing was cancelled or is unavailable.
      }
    } else {
      await copyReferralLink();
    }
  }

  return (
    <main className="min-h-screen min-w-0 bg-base-200 pt-18">
      {/* Header */}
      <header className="border-b border-base-300 bg-base-100">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          
          <div className="min-w-0 flex-1">
            <h1 className="truncate text-xl font-bold sm:text-2xl">
              Referral Program
            </h1>
            <p className="mt-1 text-xs text-base-content/60 sm:text-sm">
              Invite friends and earn eligible rewards
            </p>
          </div>

          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA002C] to-[#F47725] text-white">
            <Gift size={21} />
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#EA002C] via-[#EF3828] to-[#F47725] p-5 text-white shadow-lg sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 -z-10 size-56 rounded-full border-[30px] border-white/10 sm:size-72" />
          <div className="pointer-events-none absolute -bottom-20 right-1/3 -z-10 size-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium">
                <Sparkles size={14} />
                Invite. Connect. Earn.
              </span>

              <h2 className="mt-5 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Great things are better when shared.
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-6 text-white/85 sm:text-base">
                Invite your friends to ProfitHub. When they complete the
                eligible requirements, you may receive rewards according to
                the referral program terms.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={shareReferralLink}
                  className="btn border-0 bg-white text-[#EA002C] hover:bg-white/90"
                >
                  <Share2 size={18} />
                  Invite friends
                </button>

                <a
                  href="#my-referrals"
                  className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20"
                >
                  View referrals
                  <ChevronRight size={17} />
                </a>
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
                key={stat.label}
                className="card min-w-0 border border-base-300 bg-base-100 shadow-sm"
              >
                <div className="card-body p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-sm text-base-content/60">
                        {stat.label}
                      </p>
                      <h3 className="mt-2 break-words text-3xl font-bold">
                        {stat.value}
                      </h3>
                      <p className="mt-2 text-xs text-base-content/60">
                        {stat.description}
                      </p>
                    </div>

                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl ${stat.iconClass}`}
                    >
                      <Icon size={23} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Referral link */}
        <section className="card min-w-0 border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body min-w-0 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#EA002C]">
                <Link2 size={22} />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-bold">Your referral link</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Share this link with your friends.
                </p>
              </div>
            </div>

            <div className="mt-5 flex min-w-0 flex-col gap-3 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-center rounded-xl border border-base-300 bg-base-200 px-3 py-3">
                <span className="min-w-0 flex-1 break-all text-sm">
                  {referralLink}
                </span>
                <button
                  onClick={copyReferralLink}
                  aria-label="Copy referral link"
                  className="btn btn-ghost btn-square btn-sm ml-2 shrink-0"
                >
                  {copied ? (
                    <Check size={18} className="text-green-600" />
                  ) : (
                    <Copy size={18} />
                  )}
                </button>
              </div>

              <button
                onClick={copyReferralLink}
                className="btn border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white hover:opacity-90"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-base-content/60">Your referral code:</span>
              <code className="rounded-lg bg-base-200 px-3 py-1.5 font-bold text-[#EA002C]">
                {referralCode}
              </code>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body p-5 sm:p-7">
            <h2 className="text-xl font-bold">How it works</h2>
            <p className="text-sm text-base-content/60">
              Three simple steps to participate.
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Share your link",
                  description:
                    "Send your unique referral link to friends and family.",
                  icon: Share2,
                },
                {
                  number: "02",
                  title: "Your friend joins",
                  description:
                    "Your friend registers and completes the required verification.",
                  icon: Users,
                },
                {
                  number: "03",
                  title: "Receive eligible rewards",
                  description:
                    "Rewards are credited after all program conditions are met.",
                  icon: Wallet,
                },
              ].map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="rounded-2xl border border-base-300 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#EA002C]">
                        STEP {step.number}
                      </span>
                      <Icon size={22} className="text-[#F47725]" />
                    </div>

                    <h3 className="mt-4 font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-base-content/60">
                      {step.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Referral list */}
        <section
          id="my-referrals"
          className="card min-w-0 border border-base-300 bg-base-100 shadow-sm"
        >
          <div className="card-body min-w-0 p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl font-bold">My referrals</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  See the status of people you invited.
                </p>
              </div>

              <span className="badge badge-lg">{friends.length} examples</span>
            </div>

            {/* Desktop table */}
            <div className="mt-4 hidden overflow-x-auto md:block">
              <table className="table">
                <thead>
                  <tr>
                    <th>Friend</th>
                    <th>Date joined</th>
                    <th>Status</th>
                    <th>Reward</th>
                  </tr>
                </thead>
                <tbody>
                  {friends.map((friend) => (
                    <tr key={friend.email}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${friend.color}`}
                          >
                            {friend.initials}
                          </div>
                          <div>
                            <p className="font-semibold">{friend.name}</p>
                            <p className="text-xs text-base-content/60">
                              {friend.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap">{friend.date}</td>
                      <td>
                        <span
                          className={`badge ${
                            friend.status === "Reward paid"
                              ? "badge-success"
                              : friend.status === "Pending"
                                ? "badge-warning"
                                : "badge-ghost"
                          }`}
                        >
                          {friend.status}
                        </span>
                      </td>
                      <td className="font-semibold">{friend.reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="mt-4 space-y-3 md:hidden">
              {friends.map((friend) => (
                <article
                  key={friend.email}
                  className="flex min-w-0 items-center gap-3 rounded-xl border border-base-300 p-3"
                >
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${friend.color}`}
                  >
                    {friend.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {friend.name}
                    </p>
                    <p className="truncate text-xs text-base-content/60">
                      {friend.email}
                    </p>
                    <p className="mt-1 text-xs text-base-content/60">
                      {friend.date}
                    </p>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-sm font-bold">{friend.reward}</p>
                    <span
                      className={`badge badge-sm mt-1 ${
                        friend.status === "Reward paid"
                          ? "badge-success"
                          : friend.status === "Pending"
                            ? "badge-warning"
                            : "badge-ghost"
                      }`}
                    >
                      {friend.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-base-content/50">
              Example data only. Actual referrals and rewards must be loaded
              from your authenticated backend.
            </p>
          </div>
        </section>

        {/* Program terms */}
        <section className="rounded-2xl border border-orange-200 bg-orange-50 p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <Gift size={20} className="mt-0.5 shrink-0 text-orange-700" />
            <div>
              <h3 className="font-semibold text-orange-950">
                Referral reward information
              </h3>
              <p className="mt-1 text-sm leading-6 text-orange-900/80">
                The amounts shown are illustrative. Publish your actual
                eligibility rules, reward limits, and payment conditions.
                Validate referrals on the server and prevent self-referrals
                and duplicate rewards.
              </p>
            </div>
          </div>
        </section>

        <footer className="pb-3 text-center text-xs text-base-content/50">
          SK Groups © 2026 
        </footer>
      </div>
    </main>
  );
}
