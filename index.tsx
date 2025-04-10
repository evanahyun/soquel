import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const suggestions = [
  "Book me a flight to LA",
  "Order groceries from Whole Foods",
  "Summarize this article",
  "Plan a 3-day trip to Tokyo",
];

export default function Home() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const runTask = async (prompt: string) => {
    setLoading(true);
    setLogs(["Soquel is thinking..."]);
    setResult(null);
    setInput(prompt);

    await new Promise((r) => setTimeout(r, 1200));
    setLogs(["Soquel is thinking...", "Processing complete ✅"]);
    setResult(`Here’s what I found for: "${prompt}"`);
    setLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-semibold text-center mb-6">What would you like Soquel to do?</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 mb-8">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => runTask(s)}
              className="bg-gray-100 hover:bg-gray-200 text-sm p-3 rounded-xl text-left transition"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Input
            placeholder="Ask Soquel anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow"
          />
          <Button disabled={loading} onClick={() => runTask(input)}>
            {loading ? "Running..." : "Run"}
          </Button>
        </div>

        {logs.length > 0 && (
          <div className="mt-6 space-y-2 text-sm text-gray-700 bg-gray-100 p-4 rounded-xl">
            {logs.map((log, i) => <p key={i}>{log}</p>)}
          </div>
        )}

        {result && (
          <div className="mt-4 text-base font-medium text-black bg-blue-50 p-4 rounded-xl">
            {result}
          </div>
        )}
      </div>
    </Layout>
  );
}