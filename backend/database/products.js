const {connection} =require('./connection')
const createProductTable = () => {
  
 
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      cost INT NOT NULL,
      rating INT NOT NULL,
      image VARCHAR(255) 
    )
  `;

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Products Table created successfully!');
    
  });
};

// example usage



const mysql = require('mysql2');

const insertProduct = (productData) => {
  

  const sql = `
    INSERT INTO products (name, category, cost, rating, image)
    VALUES (?, ?, ?, ?, ?)
  `;

  const values = [
    productData.name,
    productData.category,
    productData.cost,
    productData.rating,
    productData.image,
  ];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting product:', err);
      return;
    }
    console.log(`Product ${productData.name} inserted successfully!`);
   
  });
};

// example usage
const productData = {
  name: 'UNIFACTOR Mens Running Shoes',
  category: 'Fashion',
  cost: 50,
  rating: 5,
  image: 'https://crio-directus-assets.s3.ap-south-1.amazonaws.com/42d4d057-8704-4174-8d74-e5e9052677c6.png',
};
createProductTable()
//insertProduct(productData);

const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM products WHERE id = ?';
    connection.query(sql, [productId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const getAllProducts = () => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM products`;
    connection.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const getProductsByCategory=(category)=>{
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM products where category = ?`;
    connection.query(sql,category, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}


function updateProductCostById(id, newCost) {
  // Create the SQL query string
  const sql = `UPDATE products SET cost = ${newCost} WHERE id = ${id}`;

  // Execute the query
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;

    console.log(`Updated cost for product with ID ${id}`);
  });
}

function updateCategoryTable(table_name,name, newCost) {
  // Create the SQL query string
  const sql = `UPDATE ${table_name} SET cost = ${newCost} WHERE name = '${name}'`;

  // Execute the query
  connection.query(sql, (error, results, fields) => {
    if (error) throw error;

    console.log(`Updated cost for ${table_name} with ID ${name}`);
  });
}

//updateProductCostById(2,5000)

module.exports={insertProduct,createProductTable, getAllProducts, getProductById, getProductsByCategory,updateProductCostById,updateCategoryTable}