const {connection} =require('./connection')
const {locations, carData, serviceData}= require('../utils')
const createUserTable =async () => {
  console.log("Here to create user table")
  const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
 
  name VARCHAR(50),
  username VARCHAR(50) PRIMARY KEY,
  password VARCHAR(255),
  userType VARCHAR(50)
)`;

  // Create the table
   connection.query(createTableQuery, (err) => {
    if (err) {
      console.error("Error creating table:", err);
      return;
    }
    console.log("Table created successfully");
  });
};


//   // Insert data into the table
const insertIntoUser =async (name, username, password, userType)=>{
    const sql = 'INSERT INTO users (name, username, password, userType) VALUES (?, ?, ?, ?)';

    // Execute the SQL query with the values as parameters
    connection.query(sql, [name, username, password, userType], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err.message);
      } else {
        console.log('User inserted successfully');
      }
    });

}


const searchUser = async(username) =>{
    const sql = `SELECT * FROM users WHERE username = ?`;
    let res = await get(sql,username)
    return res
}


let get =(query,username)=>{
    return new Promise((resolve, reject) => {        
          connection.query(query,[username], (err, results) => {     
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        });
      
}




function insertIntoCustomer(name, username, phoneNumber,email) {
  const sql = `
    CREATE TABLE IF NOT EXISTS customers (
      name VARCHAR(255) NOT NULL,
      username VARCHAR(255) PRIMARY KEY,
      phone_number VARCHAR(255) ,
      email VARCHAR(255)
    )
  `;
  
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Customer Table created successfully!');
    
    const insertSql = `
      INSERT INTO customers (name, username, phone_number,email)
      VALUES ('${name}', '${username}', '${phoneNumber}', '${email}')
    `;
    
    connection.query(insertSql, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
      console.log('Data inserted successfully!');
    });
  });
}


function insertIntoEmployee(name, username, phoneNumber,email) {
  const sql = `
    CREATE TABLE IF NOT EXISTS employees (
      name VARCHAR(255) NOT NULL,
      username VARCHAR(255) PRIMARY KEY,
      phone_number VARCHAR(255) ,
      email VARCHAR(255)
    )
  `;
  
  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Employees Table created successfully!');
    
    const insertSql = `
      INSERT INTO employees (name, username, phone_number,email)
      VALUES ('${name}', '${username}', '${phoneNumber}', '${email}')
    `;
    
    connection.query(insertSql, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return;
      }
      console.log('Data inserted successfully!');
    });
  });
}



module.exports ={createUserTable,insertIntoUser, searchUser,insertIntoCustomer, insertIntoEmployee}
