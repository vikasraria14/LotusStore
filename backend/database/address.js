const {connection}= require('./connection')

const createAddressesTable = () => {
    const sql = `
      CREATE TABLE IF NOT EXISTS addresses (
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        address VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL
      )
    `;
  
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error creating table:', err);
        return;
      }
      console.log('Addresses Table created successfully!');
    });
  };
  createAddressesTable();

  const insertAddress = (address, username) => {
    const sql = 'INSERT INTO addresses (address, username) VALUES (?, ?)';
    const values = [address, username];
    
    return new Promise((resolve, reject) => {
      connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };

  
  const deleteAddressById = (id) => {
    const sql = "DELETE FROM addresses WHERE id = ?";
    return new Promise((resolve, reject) => {
      connection.query(sql, [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.affectedRows);
        }
      });
    });
  };

  const getAddressesByUsername = (username) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM addresses WHERE username = ?";
      connection.query(sql, [username], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  const getAddressesById = (id) => {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM addresses WHERE id = ?";
      connection.query(sql, [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  module.exports={createAddressesTable, deleteAddressById, insertAddress, getAddressesByUsername, getAddressesById}