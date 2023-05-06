const {connection} =require('./connection')

const createCartTable = () => {
  

  const sql = `
    CREATE TABLE IF NOT EXISTS cart (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL,
      product_id INT(11) NOT NULL,
      quantity INT(11) NOT NULL,
      FOREIGN KEY (product_id) REFERENCES products(id)
    )
  `;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Cart Table created successfully!');
    
  });
};

createCartTable()

const addToCart = (username,productId, quantity) => {
 
  const sql = `
    INSERT INTO cart (username, product_id, quantity) VALUES (?, ?, ?)
  `;

  connection.query(sql, [username, productId, quantity], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully!');

  });
};
const getCartByUsername = async (username) => {
    const sql = `
      SELECT c.id, c.username, p.id as product_id, p.name AS product_name, p.cost AS price,p.category, c.quantity, p.image
      FROM cart c
      INNER JOIN products p ON c.product_id = p.id
      WHERE c.username = ?
    `;
  
    try {
      const result = await get(sql, username);
      console.log('Data fetched successfully!');
      return result;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  };
  
  const get = (query, username) => {
    return new Promise((resolve, reject) => {
      connection.query(query, [username], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };
  

  const getAllCartData = async () => {
    const sql = `
      SELECT c.id, c.username, p.name AS product_name, p.cost AS price,c.category, c.quantity, p.image
      FROM cart c
      INNER JOIN products p ON c.product_id = p.id
    `;
  
    try {
      const result = await get1(sql);
      console.log('Data fetched successfully!');
      return result;
    } catch (err) {
      console.error('Error fetching data:', err);
      throw err;
    }
  };
  
  const get1 = (query, params = []) => {
    return new Promise((resolve, reject) => {
      connection.query(query, params, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  const deleteCartItem = (id) => {
    const sql = `DELETE FROM cart WHERE id = ?`;
  
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error deleting cart item:', err);
        return;
      }
      console.log(`Cart item with ID ${id} deleted successfully!`);
      
    });
  };


  const updateCartProductQuantity = (id, quantity) => {
    
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE cart SET quantity = ? WHERE id = ?';
      connection.query(sql, [quantity, id], (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
  
  const deleteCartByUser = (username) => {
    const sql = 'DELETE FROM cart WHERE username = ?';
  
    return new Promise((resolve, reject) => {
      connection.query(sql, [username], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
module.exports={addToCart, getCartByUsername, getAllCartData, deleteCartItem, updateCartProductQuantity, deleteCartByUser}
