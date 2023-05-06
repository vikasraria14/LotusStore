const fs = require('fs');
const {connection} = require('./connection')







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

  

  for(let i=1;i<7;i++)
  {
    const imageBuffer = fs.readFileSync(`./images/boquets/b${i}.jpg`);
    const productData = {
        name: 'Boquet'+i,
        category: 'Boquet',
        cost: Math.round(Math.random()*500),
        rating: Math.round(Math.random()*5),
       
      };
      insertProduct(productData)
  }
  for(let i=1;i<7;i++)
  {
    const imageBuffer = fs.readFileSync(`./images/decors/d${i}.jpeg`);
    const productData = {
        name: 'Decor'+i,
        category: 'Decor',
        cost: Math.round(Math.random()*500),
        rating: Math.round(Math.random()*5),
        
      };
      insertProduct(productData)
  }
  for(let i=1;i<7;i++)
  {
    const imageBuffer = fs.readFileSync(`./images/laptopSkins/l${i}.jpg`);
    const productData = {
        name: 'LaptopSkin'+i,
        category: 'LaptopSkin',
        cost: Math.round(Math.random()*500),
        rating: Math.round(Math.random()*5),
       
      };
      insertProduct(productData)
  }
  for(let i=1;i<7;i++)
  {
    const imageBuffer = fs.readFileSync(`./images/mugs/m${i}.jpg`);
    const productData = {
        name: 'Mug'+i,
        category: 'mug',
        cost: Math.round(Math.random()*500),
        rating: Math.round(Math.random()*5),
        
      };
      insertProduct(productData)
  }
  for(let i=1;i<8;i++)
  {
    const imageBuffer = fs.readFileSync(`./images/paintings/p${i}.jpg`);
    const productData = {
        name: 'Painting'+i,
        category: 'Painting',
        cost: Math.round(Math.random()*500),
        rating: Math.round(Math.random()*5),
       
      };
      insertProduct(productData)
  }

  for(let i=1;i<9;i++)
  {
    const imageBuffer = fs.readFileSync(`./images/shirts/s${i}.jpg`);
    const productData = {
        name: 'Shirt'+i,
        category: 'Shirt',
        cost: Math.round(Math.random()*500),
        rating: Math.round(Math.random()*5),
        
      };
      insertProduct(productData)
  }
  