
"use client";

import { useRef, useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  UserRound,
  FileText,
  Upload,
  X,
  LockKeyhole,
  ArrowLeft,
  ArrowRight,
  Clock3,
  BadgeCheck,
  Camera,
} from "lucide-react";
import Link from "next/link";

type DocumentType = "National ID" | "Passport" | "Driver's License";

export default function VerificationPage() {
  const [documentType, setDocumentType] =
    useState<DocumentType>("National ID");
  const [fullName, setFullName] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [country, setCountry] = useState("Ethiopia");
  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const frontRef = useRef<HTMLInputElement>(null);
  const backRef = useRef<HTMLInputElement>(null);
  const selfieRef = useRef<HTMLInputElement>(null);

  const chooseFile = (
    file: File | undefined,
    setter: (file: File | null) => void
  ) => {
    setError("");

    if (!file) return;

    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      setError("Please select an image or PDF document.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Each file must be smaller than 10 MB.");
      return;
    }

    setter(file);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !documentNumber.trim()) {
      setError("Please complete your personal and document details.");
      return;
    }

    if (!frontFile || !backFile || !selfieFile) {
      setError("Please upload the front, back, and selfie images.");
      return;
    }

    // UI demo only: no files or personal data are uploaded.
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFullName("");
    setDocumentNumber("");
    setFrontFile(null);
    setBackFile(null);
    setSelfieFile(null);
    setError("");
  };

  const UploadCard = ({
    title,
    description,
    file,
    inputRef,
    onFile,
    icon,
  }: {
    title: string;
    description: string;
    file: File | null;
    inputRef: React.RefObject<HTMLInputElement | null>;
    onFile: (file: File | undefined) => void;
    icon: React.ReactNode;
  }) => (
    <div className="min-w-0 rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="mb-3 flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#EA002C]">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-semibold">{title}</p>
          <p className="mt-1 text-xs leading-5 text-base-content/60">
            {description}
          </p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf,application/pdf"
        className="hidden"
        onChange={(e) => {
          onFile(e.target.files?.[0]);
          e.currentTarget.value = "";
        }}
      />

      {file ? (
        <div className="flex items-center gap-2 rounded-xl bg-success/10 p-3">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
          <span className="min-w-0 flex-1 truncate text-sm">
            {file.name}
          </span>
          <button
            type="button"
            aria-label={`Remove ${title}`}
            className="btn btn-ghost btn-xs btn-circle"
            onClick={() => onFile(undefined)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-base-300 bg-base-200/40 px-3 py-4 text-sm font-medium transition hover:border-[#EA002C] hover:bg-orange-50"
        >
          <Upload className="h-4 w-4" />
          Choose file
        </button>
      )}
    </div>
  );

  const steps = [
    { label: "Account", done: true },
    { label: "Identity", active: true },
    { label: "Review", done: false },
  ];

  if (submitted) {
    return (
      <main className="min-h-screen bg-base-200/50 px-4 py-10 sm:px-6">
        <div className="mx-auto flex min-h-[75vh] max-w-lg items-center">
          <div className="w-full rounded-3xl border border-base-300 bg-base-100 p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50">
              <Clock3 className="h-10 w-10 text-[#EA002C]" />
            </div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#EA002C]">
              Verification
            </p>
            <h1 className="text-3xl font-bold">Ready for review</h1>
            <p className="mx-auto mt-4 max-w-sm leading-7 text-base-content/65">
              Your information has been validated in this UI demo. Connect a
              secure backend to upload your documents and submit a real
              verification request.
            </p>
            <div className="mt-7 rounded-2xl bg-base-200 p-4 text-left">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-[#EA002C]" />
                <div>
                  <p className="font-semibold">Identity verification</p>
                  <p className="text-sm text-base-content/60">
                    Demo status · Not submitted to a server
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={resetForm}
              className="btn mt-7 w-full border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] text-white hover:opacity-90"
            >
              Back to form
            </button>
            <Link
              href="/dashboard"
              className="btn btn-ghost mt-2 w-full"
            >
              Return to dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200/50">
      {/* Header */}
      <header className="border-b border-base-300 bg-base-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#EA002C] to-[#F47725] text-white">
              <span className="text-lg font-black">P</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight">
              Profit<span className="text-[#EA002C]">Hub</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 rounded-full bg-success/10 px-3 py-2 text-xs font-medium text-success sm:text-sm">
            <LockKeyhole className="h-4 w-4" />
            Secure verification
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Intro */}
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EA002C] to-[#F47725] text-white shadow-lg shadow-orange-500/20">
            <ShieldCheck className="h-9 w-9" />
          </div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-[#EA002C]">
            Account security
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Verify your identity
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-base-content/65 sm:text-base">
            Complete identity verification to help protect your account and
            access features that require a verified identity.
          </p>
        </div>

        {/* Progress */}
        <div className="mx-auto mb-8 max-w-3xl rounded-2xl border border-base-300 bg-base-100 px-5 py-5 sm:px-8">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <p className="font-bold">Verification progress</p>
              <p className="mt-1 text-xs text-base-content/60">
                Step 2 of 3 · Identity details
              </p>
            </div>
            <span className="text-sm font-bold text-[#EA002C]">67%</span>
          </div>
          <div className="mb-5 h-2 overflow-hidden rounded-full bg-base-200">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#EA002C] to-[#F47725]" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {steps.map((step) => (
              <div key={step.label} className="flex items-center gap-2">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    step.done || step.active
                      ? "bg-[#EA002C] text-white"
                      : "bg-base-200 text-base-content/50"
                  }`}
                >
                  {step.done ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-bold">
                      {step.label === "Identity" ? "2" : "3"}
                    </span>
                  )}
                </div>
                <span
                  className={`text-xs sm:text-sm ${
                    step.active ? "font-bold" : "text-base-content/60"
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-[1fr_310px]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="min-w-0 rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8"
          >
            <div className="mb-7 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#EA002C]">
                <UserRound className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Personal information</h2>
                <p className="mt-1 text-sm text-base-content/60">
                  Enter your details exactly as shown on your ID.
                </p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-control min-w-0 sm:col-span-2">
                <span className="label-text mb-2 font-semibold">
                  Full legal name
                </span>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className="input input-bordered w-full"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </label>

              <label className="form-control min-w-0">
                <span className="label-text mb-2 font-semibold">
                  Country of issue
                </span>
                <select
                  className="select select-bordered w-full"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                >
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United States">United States</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="form-control min-w-0">
                <span className="label-text mb-2 font-semibold">
                  Document type
                </span>
                <select
                  className="select select-bordered w-full"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value as DocumentType)}
                  required
                >
                  <option>National ID</option>
                  <option>Passport</option>
                  <option>Driver&apos;s License</option>
                </select>
              </label>

              <label className="form-control min-w-0 sm:col-span-2">
                <span className="label-text mb-2 font-semibold">
                  Document number
                </span>
                <input
                  type="text"
                  placeholder="Enter your document number"
                  className="input input-bordered w-full"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  required
                />
                <span className="label-text-alt mt-2 text-base-content/50">
                  Use the number printed on your selected identity document.
                </span>
              </label>
            </div>

            <div className="divider my-8" />

            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#EA002C]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Upload your documents</h2>
                <p className="mt-1 text-sm leading-6 text-base-content/60">
                  Use clear, readable images. Accepted formats: JPG, PNG, or
                  PDF, up to 10 MB per file.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <UploadCard
                title="Front of ID"
                description="Upload the front side of your document."
                file={frontFile}
                inputRef={frontRef}
                onFile={(file) => {
                  if (file) chooseFile(file, setFrontFile);
                  else setFrontFile(null);
                }}
                icon={<FileText className="h-5 w-5" />}
              />
              <UploadCard
                title="Back of ID"
                description="Upload the back side, if your document has one."
                file={backFile}
                inputRef={backRef}
                onFile={(file) => {
                  if (file) chooseFile(file, setBackFile);
                  else setBackFile(null);
                }}
                icon={<FileText className="h-5 w-5" />}
              />
              <div className="sm:col-span-2">
                <UploadCard
                  title="Selfie verification"
                  description="Upload a clear photo of your face. A real verification flow may require a live capture."
                  file={selfieFile}
                  inputRef={selfieRef}
                  onFile={(file) => {
                    if (file) chooseFile(file, setSelfieFile);
                    else setSelfieFile(null);
                  }}
                  icon={<Camera className="h-5 w-5" />}
                />
              </div>
            </div>

            {error && (
              <div role="alert" className="alert alert-error mt-5 text-sm">
                <X className="h-5 w-5 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl bg-base-200/70 p-4">
              <input
                type="checkbox"
                className="checkbox checkbox-sm mt-0.5"
                required
              />
              <span className="text-sm leading-6 text-base-content/70">
                I confirm that the information provided is accurate and that I
                am authorized to submit these documents for verification.
              </span>
            </label>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/dashboard"
                className="btn btn-ghost gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to dashboard
              </Link>

              <button
                type="submit"
                className="btn border-0 bg-gradient-to-r from-[#EA002C] to-[#F47725] px-7 text-white shadow-md shadow-orange-500/20 hover:opacity-90"
              >
                Continue to review
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          {/* Sidebar */}
          <aside className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-3xl bg-gradient-to-br from-[#EA002C] to-[#F47725] p-6 text-white">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Your security matters</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Keep your account details accurate and submit only documents
                that belong to you.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Protected account access",
                  "Identity review workflow",
                  "Secure document handling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-base-300 bg-base-100 p-6">
              <h3 className="font-bold">What happens next?</h3>
              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-base-200">
                    <Upload className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">1. Submit details</p>
                    <p className="mt-1 text-xs leading-5 text-base-content/60">
                      Provide your information and documents.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-base-200">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">2. Identity review</p>
                    <p className="mt-1 text-xs leading-5 text-base-content/60">
                      Your documents can be checked by a verification service
                      or authorized reviewer once integrated.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-base-200">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">3. Get your result</p>
                    <p className="mt-1 text-xs leading-5 text-base-content/60">
                      View your verification status in your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-base-300 bg-base-100 p-4 sm:col-span-2 lg:col-span-1">
              <LockKeyhole className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <p className="text-xs leading-5 text-base-content/60">
                <strong className="text-base-content">Privacy note:</strong>{" "}
                This page is currently a UI demo. It does not upload or securely
                store your identity documents. Connect an authenticated backend
                and protected storage before collecting real documents.
              </p>
            </div>
          </aside>
        </div>

        <footer className="py-8 text-center text-xs text-base-content/45">
          © {new Date().getFullYear()} ProfitHub. Keep your account secure.
        </footer>
      </div>
    </main>
  );
}
