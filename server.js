import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();
import app from "./app.js";

connectDB()

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
