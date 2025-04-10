import Layout from "@/components/Layout";

export default function Explore() {
  const prompts = [
    "Book me a flight to LA",
    "Order groceries for the week",
    "Research best laptops for college",
  ];

  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Explore Tasks</h2>
        <ul className="space-y-2">
          {prompts.map((p, i) => (
            <li key={i} className="bg-gray-100 p-3 rounded-xl">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}