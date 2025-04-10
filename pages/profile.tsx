import Layout from "@/components/Layout";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function Profile() {
  const [history, setHistory] = useState<{ input: string; response: string }[]>([]);

  useEffect(() => {
    // Simulated chat history (normally you'd fetch this from backend)
    const mock = [
      { input: "Book me a flight to LA", response: "Flight booked!" },
      { input: "Order groceries", response: "Groceries ordered!" },
    ];
    setHistory(mock);
  }, []);

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12 space-y-10">
        {/* User Info Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <div className="bg-gray-100 p-4 rounded-xl space-y-2">
            <p><strong>Name:</strong> Evan Ah-Yun</p>
            <p><strong>Email:</strong> evan@example.com</p>
            <p><strong>Plan:</strong> Pro</p>
          </div>
        </section>

        {/* Dashboard Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Usage Dashboard</h2>
          <p className="text-gray-600 mb-3">Total Chats: {history.length}</p>
          <ul className="space-y-3">
            {history.map((h, i) => (
              <li key={i} className="bg-gray-100 p-4 rounded-xl">
                <p className="text-sm text-gray-500">Prompt: {h.input}</p>
                <p className="mt-1">Response: {h.response}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Settings Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">
            <span>Email Notifications</span>
            <Switch />
          </div>
        </section>
      </div>
    </Layout>
  );
}