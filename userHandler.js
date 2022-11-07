const { query } = require("./database");
const database = require("./database");

const getUsers = (req, res) => {
  database

    .query("select * from users")

    .then(([users]) => {
      res.status(200).json(users);
    })

    .catch((err) => {
      console.error(err);

      res.status(500).send("Error retrieving data from database");
    });
};

const getUsersById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query(`select * from users where id = ${id}`)
    .then(([user]) => {
      if (user[0] !== null) {
        res.json(user);
      } else {
        res.status(404).send("Not found");
      }
    })
    .catch((err) => {
      console.error(err);

      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUsers,
  getUsersById,
};
