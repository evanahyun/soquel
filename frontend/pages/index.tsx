import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submitTask = async () => {
    if (!input) return;
    setLoading(true);
    setLogs([]);
    setResult(null);

    const res = await fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setLogs(data.logs);
    setResult(data.result);
    setLoading(false);
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen p-10 bg-white text-black">
      <h1 className="text-4xl font-bold mb-6">Soquel</h1>

      <div className="w-full max-w-xl flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-lg"
          placeholder="What would you like Soquel to do?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={submitTask}
          className="bg-black text-white px-4 py-2 rounded-lg text-lg"
          disabled={loading}
        >
          {loading ? 'Running...' : 'Run'}
        </button>
      </div>

      {logs.length > 0 && (
        <div className="mt-8 w-full max-w-xl bg-gray-100 rounded-lg p-4">
          <p className="font-semibold mb-2">Logs:</p>
          <pre className="text-sm whitespace-pre-wrap">{logs.join('\n')}</pre>
        </div>
      )}

      {result && (
        <div className="mt-4 w-full max-w-xl bg-blue-100 rounded-lg p-4">
          <p className="font-semibold mb-2">Result:</p>
          <p>{result}</p>
        </div>
      )}
    </main>
  );
}