var express = require("express");
var router = express.Router();
const { handleError, getProduct } = require("../utils");
var { products } = require("../db");

const {getOrdersByUsername, getAllOrders, updateOrderStatus} = require('../database/orders')
router.get("/", async(req, res) => {
  console.log("Request received for retrieving order list");
  const username= req.query.username
  
  try{
    let docs
    if(username!==undefined)
    {
      
       docs=  await getOrdersByUsername(username)
       
    }
    else
    {
      
      docs=  await getAllOrders()
    }
    
    return res.status(200).json(docs);
  } 
  catch(err)
  {
    return res.status(400).send(err.message)
  }
    
  
});

router.post("/update", async(req, res) => {

  await updateOrderStatus(req.body.id, req.body.order_status, req.body.product_name)
  res.status(200).send({data:"updated"})

})

module.exports = router;
