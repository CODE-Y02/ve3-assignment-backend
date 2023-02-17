const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());

app.use(express.json());

const adminRouter = require("./routes/adminRoutes.js");
const userRouter = require("./routes/userRoutes.js");

app.use("/admin", adminRouter);

app.use("/", userRouter);

app.use((req, res) => {
  res.status(404).end();
});

const startApp = async () => {
  try {
    const db = await mongoose.connect(
      `${process.env.MongoURI}?retryWrites=true&w=majority`
    );

    app.listen(process.env.serverPort || 3000, () => {
      console.log("app running @ PORT ", process.env.serverPort || 3000);
    });

    // console.log(db);
  } catch (error) {
    console.log(error);
  }
};

startApp();
