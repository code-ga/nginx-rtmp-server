import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post("/auth", (req:express.Request, res:express.Response) => {
  console.log(req.body);
  /* This server is only available to nginx */
  const streamkey = req.body.key;

  /* You can make a database of users instead :) */
  if (streamkey === "supersecret") {
    res.status(200).send();
    return;
  }

  /* Reject the stream */
  res.status(403).send();
});

app.listen(8000, function () {
  console.log("Listening on port 8000!");
});
