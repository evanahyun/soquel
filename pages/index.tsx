import { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<{ input: string; response: string }[]>([]);

    const runTask = async (prompt: string) => {
        setLoading(true);
        setInput(prompt);

        // Simulate agent thinking
        await new Promise((r) => setTimeout(r, 1000));
        const fakeResult = `Here’s what I found for: "${prompt}"`;

        setHistory((prev) => [...prev, { input: prompt, response: fakeResult }]);
        setLoading(false);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your prompt here..."
                className="border p-2 rounded"
            />
            <button
                onClick={() => runTask(input)}
                disabled={loading}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
                {loading ? 'Loading...' : 'Run'}
            </button>
            <div className="mt-8 space-y-4">
                {history.map((h, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-500">You: {h.input}</p>
                        <p className="mt-1">{h.response}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}