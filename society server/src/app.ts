import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send({
    data: "Society Server",
  });
});

app.listen(app.get("port"), () => {
  console.log(`Server running at port ${app.get("port")}`);
});
