import { useEffect, useState } from "react";
import { getPanchayat } from "../apis/api";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPanchayat().then(setData).catch(console.error);
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-12">
      {/* Section 1: Panchayat Name */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-2">
          {data.name}
        </h1>
      </div>

      {/* Section 2: About */}
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-green-800 mb-3">
          About Panchayat
        </h2>
        <p className="text-gray-700 leading-relaxed">{data.about}</p>
      </div>

      {/* Section 3: Photo Gallery */}
      <div>
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.gallery.slice(0, 3).map((img, i) => (
            <img
              key={i}
              src={img}
              alt="gallery"
              className="rounded-lg shadow hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Section 4: News & Updates */}
      <div>
        <h2 className="text-2xl font-semibold text-green-800 mb-4">
          Latest News & Updates
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {data.news.slice(0, 2).map((n) => (
            <div
              key={n._id}
              className="border rounded-lg p-5 shadow-sm bg-gray-50 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {n.title}
              </h3>
              <p className="text-gray-600 text-sm">{n.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
