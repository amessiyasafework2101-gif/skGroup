import Link from "next/link";


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
  );
}
