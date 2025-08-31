import { useEffect, useState } from "react";
import { getPanchayat } from "../apis/api";

export default function News() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPanchayat().then(setData).catch(console.error);
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Latest News & Updates</h2>
      <div className="space-y-4">
        {data.news.map((n) => (
          <div key={n._id} className="border rounded-lg p-4 shadow-sm">
            <h3 className="font-semibold">{n.title}</h3>
            <p className="text-gray-600 text-sm">{n.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
