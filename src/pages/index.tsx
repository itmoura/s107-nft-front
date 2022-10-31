import { Page } from "../components/page";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>OmNaNFT - Home</title>
      </Head>
      <Page homepage>
        <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white">OmNaNFT</h1>
          <Link href="/dashboard" passHref legacyBehavior>
            <div className="mt-4 inline-block cursor-pointer rounded-sm bg-secondary p-4 font-semibold text-white transition duration-300 ease-in-out hover:bg-primary">
              <a>Go to Dashboard ➡</a>
            </div>
          </Link>
        </div>
      </Page>
    </>
  );
}
