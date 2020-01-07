var user = {
  username: "magicmike21",
  password: "mypassword"
};

var user2 = {
  username: "ingridcita",
  password: "abc123"
};

var user3 = {
  username: "juanito",
  password: "qwerty123"
};

var database = [user, user2, user3];

var news_feed = [
  { username: "Andre", timeline: "I love cooking!" },
  { username: "Gustavo", timeline: "I love sports!" },
  { username: "Jackie", timeline: "I love cars!" }
];

function display_news_feed() {
  for (var i = 0; i < news_feed.length; i++) {
    console.log(news_feed[i].username);
    console.log(news_feed[i].timeline);
  }
}

function enter_username() {
  var user_entered = prompt("Please enter your username");
  return user_entered;
}

function enter_password() {
  var pass_entered = prompt("Please enter your password");
  return pass_entered;
}

function is_user_valid(username, password) {
  var user_found = false;
  for (var i = 0; i < database.length; i++) {
    if (username === database[i].username && password === database[i].password)
      user_found = true;
  }
  return user_found;
}

function sign_in(username, password) {
  if (is_user_valid(username, password)) display_news_feed();
  else alert("Sorry, wrong username and password");
}

var user = enter_username();
var pass = enter_password();
sign_in(user, pass);
