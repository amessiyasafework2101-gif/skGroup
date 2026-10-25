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
        <div className="pt-20 pb-25">
       {children}
       </div>
      <BottomNav />
     </div>
      
    </RouteGuard>
  );
}