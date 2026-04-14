import mongoose from "mongoose";
import app from "./app.js";

mongoose
  .connect(process.env.MONGODB_URL!)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));
app.listen(process.env.PORT, () => {
  console.log(`Server running on Port ${process.env.PORT}`);
});
