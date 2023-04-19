import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex items-center h-[100vh] justify-center flex-col">
      <h1>Welcome</h1>
      <Link href="/about" className="text-blue-800">
        Go to about page
      </Link>
    </main>
  );
}
