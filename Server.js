const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./Configs/db")

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json);

// Routes
app.use('/api/admin', require("./Routes/adminRoutes"));
app.use('/api/user', require('./Routes/userRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));