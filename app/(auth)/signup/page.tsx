
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  LoaderCircle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { auth } from "@/lib/firebase";
import { saveUserToFirestore } from "@/lib/saveUser";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      await updateProfile(credential.user, {
        displayName: name.trim(),
      });

      await saveUserToFirestore(credential.user);

      let verificationSent = true;

      try {
        await sendEmailVerification(credential.user);
      } catch {
        verificationSent = false;
      }

      setMessage(
        verificationSent
          ? "Account created! Check your email to verify your account."
          : "Account created, but we couldn't send the verification email. You can request it later."
      );

      setTimeout(() => router.push("/login"), 3000);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleRegister() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const result =await signInWithPopup(auth, new GoogleAuthProvider());
      await saveUserToFirestore(result.user);
      router.push("/dashboard");
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-base-300/60">
        <div className="card-body p-6 sm:p-9">
          <div className="flex justify-center mb-5">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2">
              <Sparkles size={18} />
              <span className="font-semibold text-sm">Get started</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Create your account
            </h1>
            <p className="text-base-content/60 mt-2">
              Join us and start your journey today.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-outline w-full gap-3"
            onClick={handleGoogleRegister}
            disabled={loading}
          >
            {loading ? (
              <LoaderCircle size={19} className="animate-spin" />
            ) : (
              <GoogleIcon />
            )}
            Continue with Google
          </button>

          <div className="divider text-xs text-base-content/50">
            OR SIGN UP WITH EMAIL
          </div>

          <form onSubmit={handleRegister} className="space-y-3">
            <fieldset className="fieldset">
              <label htmlFor="name" className="fieldset-label font-medium">
                Full name
              </label>
              <label className="input input-bordered flex items-center gap-3 w-full">
                <UserRound size={18} className="text-base-content/50 shrink-0" />
                <input
                  id="name"
                  type="text"
                  className="grow"
                  placeholder="Your name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <label htmlFor="email" className="fieldset-label font-medium">
                Email address
              </label>
              <label className="input input-bordered flex items-center gap-3 w-full">
                <Mail size={18} className="text-base-content/50 shrink-0" />
                <input
                  id="email"
                  type="email"
                  className="grow"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <label htmlFor="password" className="fieldset-label font-medium">
                Password
              </label>
              <label className="input input-bordered flex items-center gap-3 w-full">
                <LockKeyhole
                  size={18}
                  className="text-base-content/50 shrink-0"
                />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="grow min-w-0"
                  placeholder="At least 6 characters"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-base-content/50 hover:text-base-content"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </label>
            </fieldset>

            <fieldset className="fieldset">
              <label
                htmlFor="confirmPassword"
                className="fieldset-label font-medium"
              >
                Confirm password
              </label>
              <label className="input input-bordered flex items-center gap-3 w-full">
                <CheckCircle2
                  size={18}
                  className="text-base-content/50 shrink-0"
                />
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="grow min-w-0"
                  placeholder="Repeat your password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="text-base-content/50 hover:text-base-content"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </label>
            </fieldset>

            {error && (
              <div role="alert" className="alert alert-error text-sm">
                <span>{error}</span>
              </div>
            )}

            {message && (
              <div role="status" className="alert alert-success text-sm">
                <span>{message}</span>
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary w-full mt-3"
              disabled={loading}
            >
              {loading ? (
                <>
                  <LoaderCircle size={19} className="animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Create account <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-base-content/70 mt-5">
            Already have an account?{" "}
            <a
              href="/login"
              className="link link-primary font-semibold no-underline"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className="w-5 h-5">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 37.98 46.98 31.85 46.98 24.55Z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19Z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.9 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"
      />
    </svg>
  );
}

function getErrorMessage(err: unknown): string {
  const code =
    typeof err === "object" && err !== null && "code" in err
      ? String(err.code)
      : "";

  switch (code) {
    case "auth/email-already-in-use":
      return "An account with this email already exists. Please sign in.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Your password is too weak. Choose a stronger password.";
    case "auth/popup-closed-by-user":
      return "Google sign-up was cancelled.";
    case "auth/popup-blocked":
      return "Your browser blocked the Google sign-in popup.";
    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled in Firebase.";
    case "auth/network-request-failed":
      return "Network error. Check your internet connection.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    default:
      return "Could not create your account. Please try again.";
  }
}
