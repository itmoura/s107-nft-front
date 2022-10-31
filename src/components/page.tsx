import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

interface PageProps {
  children: ReactNode;
  homepage?: boolean;
}

export const Page = ({ children, homepage = false }: PageProps) => {
  return (
    <>
      <Navbar />
      {!homepage && <Sidebar />}
      <div
        className={`fixed top-[73px] overflow-auto ${
          !homepage && "left-60"
        } h-screen w-screen bg-background`}
      >
        {children}
      </div>
    </>
  );
};
