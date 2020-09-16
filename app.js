require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/cook-now", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

hbs.registerHelper("ifUndefined", (value, options) => {
  if (arguments.length < 2)
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  if (typeof value !== undefined) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});

// default value for title local
app.locals.title = "Flavor-it";

// Enable authentication using session + passport
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 24 * 60 * 60 * 60 },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);


app.use(flash());
require("./passport")(app);

// passport configuration

const User = require('./models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(dbUser => {
      done(null, dbUser);
    })
    .catch(error => {
      done(error);
    })
});

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
      .then(found => {
        if (found === null) {
          done(null, false, { message: 'Wrong Credentials' })
        } else if (!bcrypt.compareSync(password, found.password)) {
          done(null, false, { message: 'Wrong Credentials' })
        } else {
          done(null, found);
        }
      })
      .catch(error => {
        done(error, false);
      })
  })
)

// passport configuration


passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(dbUser => {
      done(null, dbUser);
    })
    .catch(error => {
      done(error);
    })
});

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username })
      .then(found => {
        if (found === null) {
          done(null, false, { message: 'Wrong Credentials' })
        } else if (!bcrypt.compareSync(password, found.password)) {
          done(null, false, { message: 'Wrong Credentials' })
        } else {
          done(null, found);
        }
      })
      .catch(error => {
        done(error, false);
      })
  })
)

const GithubStrategy = require('passport-github').Strategy;

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // find a user with profile.id as githubId or create one
      console.log(profile);
      User.findOne({ githubId: profile.id })
        .then(found => {
          if (found !== null) {
            // user already exists
            done(null, found);
          } else {
            // no user with that github id
            return User.create({ githubId: profile.id, name: profile._json.login, avatar: profile._json.avatar_url }).then(dbUser => {
              done(null, dbUser);
            })
          }
        })
        .catch(error => {
          done(error);
        })
    }
  )
)

app.use(passport.initialize());
app.use(passport.session());

// end of passport configuration


//session end

const index = require("./routes/index");
app.use("/", index);

const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);

const recipes = require("./routes/recipe");
app.use("/", recipes);

const ingredients = require("./routes/ingredient");
app.use("/", ingredients);

const userProfile = require("./routes/user");
app.use("/", userProfile);

module.exports = app;
