// init-mongo.js
db.createUser({
    user: "myuser",
    pwd: "mypassword",
    roles: [
      {
        role: "readWrite",
        db: "mydatabase"
      }
    ]
  });
  