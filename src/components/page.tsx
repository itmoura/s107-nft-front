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
        className={`fixed top-[73px] overflow-auto ${!homepage && "left-60"} ${
          !homepage ? "w-[calc(100%-15rem)]" : "w-screen"
        } h-[calc(100%-73px)]  bg-background`}
      >
        {children}
      </div>
    </>
  );
};
