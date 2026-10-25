import RouteGuard from "@/components/RouteGuard";

import TopNav from "@/components/Navigation/TopNav"

import BottomNav from "@/components/Navigation/BottomNav"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard mode="protected">
     <div>
      <TopNav />
<<<<<<< HEAD
        <div className="pt-20 pb-25">
       {children}
       </div>
=======
       {children}
>>>>>>> d34d41aef3345a30b1738e179604cf272aaf1104
      <BottomNav />
     </div>
      
    </RouteGuard>
  );
}