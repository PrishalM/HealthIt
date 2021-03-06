const db = require("../dbConfig/init");

class User {
  constructor(data) {
    this.user_id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
  }

  // get all users
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        let userData = await db.query(`SELECT * FROM users;`);
        let users = userData.rows.map((b) => new User(b));
        resolve(users);
      } catch (err) {
        reject(`User not found, error: ${err}`);
      }
    });
  }

  // return user by user id
  static findUserById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        let userData = await db.query(
          `SELECT * FROM users WHERE users.id = $1;`,
          [id]
        );
        let user = new User(userData.rows[0]);
        resolve(user);
      } catch (err) {
        reject(`User not found, error: ${err}`);
      }
    });
  }

  //return user by email
  static findByEmail(email) {
    return new Promise(async (res, rej) => {
      try {
        let result = await db.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        let user = new User(result.rows[0]);
        res(user);
      } catch (err) {
        rej(`Error retrieving user: ${err}`);
      }
    });
  }

  // create new user
  static async create(userData) {
    return new Promise(async (resolve, reject) => {
      try {
        const { username, email, password } = userData;

        let result = await db.query(
          `INSERT INTO users (username, email, password)    
                VALUES($1, $2, $3) RETURNING *;`,
          [username, email, password]
        );

        // let newUser = new User(result.rows[0]);
        // console.log(newUser);
        // resolve(newUser);
        resolve(new User(result.rows[0]));
      } catch (err) {
        reject(`User could not be created, error: ${err}`);
      }
    });
  }
}

module.exports = User;
