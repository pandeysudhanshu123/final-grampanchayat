import { useEffect, useState } from "react";
import { getPanchayat } from "../apis/api";

export default function Gallery() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPanchayat().then(setData).catch(console.error);
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.gallery.map((img, i) => (
          <img key={i} src={img} alt="gallery" className="rounded-lg shadow" />
        ))}
      </div>
    </div>
  );
}
