require("dotenv").config();
const express = require('express');
const connectDB = require("./db/database");
const app = express();
const PORT = process.env.PORT || 3000;
const panchayatData = require("./routes/panchayatRoutes")
const cors = require("cors")
app.use(cors())
app.use(express.json());
app.use("/seeds",panchayatData)
app.listen(PORT, async() => {
await connectDB()
  console.log(`Server running at http://localhost:${PORT}`);
});