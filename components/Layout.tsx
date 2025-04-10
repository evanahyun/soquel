import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="border-b border-gray-200 p-4 flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">Soquel</Link>
        </div>
        <div className="flex gap-4 text-sm text-gray-600">
          <Link href="/explore">Explore</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/pro">Pro</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>
      <main className="px-4">{children}</main>
    </div>
  );
}