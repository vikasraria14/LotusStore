const {connection} = require('./connection')
function createNewTableByCategory(table_name,category) {
    const newTableName = table_name;
  
    // create new table query
    const createTableQuery = `CREATE TABLE IF NOT EXISTS ${newTableName} (
      id INT NOT NULL AUTO_INCREMENT,
      item_no INT NOT NULL,
      name VARCHAR(255) NOT NULL,
      cost INT NOT NULL,
      PRIMARY KEY (id),
      FOREIGN KEY (item_no) REFERENCES products(id)
    )`;
  
    connection.query(createTableQuery, (error, results, fields) => {
      if (error) {
        console.log(`Error creating new table: ${error}`);
        return;
      }
  
      console.log(`New table ${newTableName} created successfully.`);
    });

    let insertQuery= ` INSERT INTO ${newTableName} (name, cost, item_no)
    SELECT name, cost, id FROM products WHERE category = '${category}';`

    connection.query(insertQuery, (error, results, fields) => {
      if (error) {
        console.log(`Error inserting into the table: ${error}`);
        return;
      }
  
      console.log(`inserted into ${newTableName}`);
    });
   
  }
//    createNewTableByCategory('Decor','Decor')
  createNewTableByCategory('Boquet','Boquet')
//   createNewTableByCategory('Mug','Mug')
//   createNewTableByCategory('LaptopSkin','LaptopSkin')
//   createNewTableByCategory('Shirt','Shirt')
//   createNewTableByCategory('Painting','Painting')