const express = require("express")
const app = express.Router();
const panchayat = require("../models/Panchayat")
// ✅ Seed route (insert demo data)
app.get("", async (req, res) => {
  await panchayat.deleteMany({});
  const demo = new panchayat({
    slug: "sehra",
    name: "Gram Panchayat Sehra (Demo)",
    about: "Sehra Panchayat is focused on education, sanitation and digital growth for its citizens.",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnjFQoAPyG1w_ohLVizVgsMBqAFmg8HMweQ&s",
      "https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=",
      "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_1280.jpg"
    ],
    news: [
      { title: "Water Tank Project Approved", description: "New tank will provide clean water for 500 families." },
      { title: "Medical Camp Scheduled", description: "Free health check-up camp will be held next week." }
    ],
    members: [
      { name: "Sita Devi", role: "Sarpanch" },
      { name: "Ramesh Kumar", role: "Up-Sarpanch" },
      { name: "Sunita", role: "Member" }
    ],
    contact: {
      phone: "0172-123456",
      email: "info@sehra.in",
      address: "Village Sehra, Mohali, Punjab"
    },
    social: {
      facebook: "#",
      twitter: "#",
      youtube: "#"
    }
  });

  await demo.save();
  res.send(demo);
});

// ✅ Get Panchayat Data
app.get("/", async (req, res) => {
  const panchayat = await panchayat.findOne({ slug: "sehra" });
  res.json(panchayat);
});

module.exports= app;
