import { useEffect, useState } from "react";
import { getPanchayat } from "../apis/api";

export default function Members() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPanchayat().then(setData).catch(console.error);
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Panchayat Members</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border text-left">Name</th>
            <th className="p-2 border text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {data.members.map((m) => (
            <tr key={m._id}>
              <td className="p-2 border">{m.name}</td>
              <td className="p-2 border">{m.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
