const sequelize = require("./config/connection");
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
var bodyParser = require("body-parser");
const path = require("path");
const allRoutes = require("./controllers/index");

const app = express();
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;

// // initialize handlebars as our view engine through express middleware
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "my secret",
  cookie: {
    maxAge: 18000000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(allRoutes);
sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`app running at http://localhost:${PORT}`)
  );
});
