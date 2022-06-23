const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

// connect to the mongo atlas db
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// use routes for goals
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/patients", require("./routes/patientRoutes"));
app.use("/api/status", require("./routes/statusRoutes"))

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
