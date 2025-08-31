import React from "react";
import { Link } from "react-router-dom";
export const demoPanchayat = {
  slug: "sehra",
  name: "Gram Panchayat Sehra (Demo)",
  about:
    "Sehra Panchayat is focused on education, sanitation and digital growth for its citizens.",
  gallery: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1523419409543-a7fd8a49f0de",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
  ],
  news: [
    {
      title: "Water Tank Project Approved",
      description: "New tank will provide clean water for 500 families.",
    },
    {
      title: "Medical Camp Scheduled",
      description: "Free health check-up camp will be held next week.",
    },
  ],
  members: [
    { name: "Sita Devi", role: "Sarpanch" },
    { name: "Ramesh Kumar", role: "Up-Sarpanch" },
    { name: "Sunita", role: "Member" },
  ],
  contact: {
    phone: "0172-123456",
    email: "info@sehra.in",
    address: "Village Sehra, Mohali, Punjab",
  },
  social: {
    facebook: "#",
    twitter: "#",
    youtube: "#",
  },
};


const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{demoPanchayat.name}</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/news">News</Link>
        <Link to="/members">Members</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
