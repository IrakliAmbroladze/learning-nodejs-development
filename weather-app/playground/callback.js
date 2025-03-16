var getUser = (id, callback) => {
  var user = {
    id: id,
    name: "Irakli",
  };
  callback(user);
};

getUser(31, (userObject) => {
  console.log(userObject);
});
