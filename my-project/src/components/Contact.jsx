import { useEffect, useState } from "react";
import { getPanchayat } from "../apis/api";

export default function Contact() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPanchayat().then(setData).catch(console.error);
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-2">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p><b>Phone:</b> {data.contact.phone}</p>
      <p><b>Email:</b> {data.contact.email}</p>
      <p><b>Address:</b> {data.contact.address}</p>
      <div className="pt-2 flex gap-4 text-blue-600">
        <a href={data.social.facebook}>Facebook</a>
        <a href={data.social.twitter}>Twitter</a>
        <a href={data.social.youtube}>YouTube</a>
      </div>
    </div>
  );
}
