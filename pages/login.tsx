import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">Login to Soquel</h2>
        <Button variant="outline">Continue with Google</Button>
        <p className="text-sm text-gray-400 mt-4">Powered by Clerk (coming soon)</p>
        <nav className="mt-6">
          <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </Layout>
  );
}
