// const db = require("../dbConfig/init");

// class Auth {
//   constructor(data) {
//     this.user_id = data.user_id;
//     this.username = data.username;
//     this.email = data.email;
//     this.password = data.password;
//   }

// //return user by email
// static findUserByEmail(email) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let userData = await db.query(
//         `SELECT * FROM users WHERE users.email = $1;`,
//         [email]
//       );
//       let user = new User(userData.rows[0]);
//       resolve(user);
//     } catch (err) {
//       reject(`User not found, error: ${err}`);
//     }
//   });
//  }

//  static comparePassword({email, password}) {
//      console.log(email, password)
//     return new Promise(async (resolve, reject) => {
//       try {
//         let passwordData = await db.query(
//           `SELECT password FROM users WHERE email = $1;`,
//           [email]
//         );
//         if (password === passwordData.rows[0]["password"]) {
//         console.log("Login successful!")
//         resolve({key: "value"});
//         } else {
//             throw "invalid login credentials";
//         // console.log("Login failed")
//          };

//       } catch (err) {
//         reject(`User not found, error: ${err}`);
//       }
//     });
//    }
// }

// module.exports = Auth;
