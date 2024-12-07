import React from "react";
import Sidebar from "@/components/sidebar";
import MobileNavigation from "@/components/MobileNavigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
};
export default Layout;
