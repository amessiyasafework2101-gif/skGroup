import Link from "next/link"



export default function TopNav() {
  return (
    <div className="w-full fixed bg-green-400 top-0 l-0 r-0 ">
      <Link href="/dashboard" className="logo">
        SK Group
      </Link>    
    </div>
  );
}
