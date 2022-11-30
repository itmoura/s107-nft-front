import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="fixed top-0 left-0 flex h-[73px] w-screen items-center justify-between border-b border-secondary bg-background px-4">
      <div className="mx-auto flex w-11/12 items-center">
        <Link href="/" className="text-xl font-bold text-white">
          OmNa<span className="text-primary">NFT</span>
        </Link>

        <ul className="mx-auto text-white">
          <li
            className={`navbar-link ${
              router.pathname === "/dashboard" ? " text-primary" : "text-white"
            }`}
            onClick={() => router.push("/dashboard")}
          >
            Coleções
          </li>
          <li
            className={`navbar-link ${
              router.pathname === "/my-nfts" ? " text-primary" : "text-white"
            }`}
            onClick={() => router.push("/my-nfts")}
          >
            Minhas NFTs
          </li>
        </ul>

        <div className="flex items-center">
          <div className="navbar-link">Login</div>
          <div className="navbar-link">Cadastrar</div>
        </div>
      </div>
    </nav>
  );
};
