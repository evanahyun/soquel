import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Pro() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Go Pro</h2>
        <p className="text-gray-600 mb-6">Unlock access to Soquel's full power — real task execution with Cua.</p>
        <p className="text-2xl font-semibold mb-6">$9/month</p>
        <Button>Subscribe with Stripe</Button>
      </div>
    </Layout>
  );
}
