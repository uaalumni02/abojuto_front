import express from "express";
import path from "path";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();

const port = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + "/views"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/search", (req, res) => {
  return res.render("search");
});

app.get("/search?state=", (req, res) => {
  return res.render("search");
});

app.get("/search?specialty=", (req, res) => {
  return res.render("search");
});
app.get("/search?modality=", (req, res) => {
  return res.render("search");
});
app.get("/search?license=", (req, res) => {
    return res.render("search");
  });

  app.get("/profile/:id", (req, res) => {
    return res.render("profile");
  });

  app.get("/register/:id", (req, res) => {
    return res.render("register");
  });

  app.get("/login", (req, res) => {
    return res.render("login");
  });
  app.get("/schedule/:id", (req, res) => {
    return res.render("schedule");
  });
  
  app.get("/customerAppointments/:id", (req, res) => {
    return res.render("customerAppointments");
  });

app.listen(port, () => console.log("server is running"));
