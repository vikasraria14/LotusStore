import { useState, useEffect } from "react";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

function ImageFromBuffer({ buffer }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const blob = new Blob([buffer], { type: 'image/jpg' });
    const url = URL.createObjectURL(blob);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [buffer]);
  console.log("Image Url", imageUrl.blob)
  return <img src={imageUrl} alt="Buffer Image" />;
}

const ProductCard = ({ product, handleAddToCart }) => {
 
  //let image= `../../assets/images/${product.category.toLowerCase()+'s'}/${(product.name[0]).toLowerCase()+product.name[product.name.length-1]}.jpg`
  let image= `../../assets/images/shirts/s4.jpg`
  console.log(image)
  return (
    <Card className="card" variant="outlined" key={product._id}>
      <CardMedia className="cardImage" component="img" image={require('../../assets/images/'+product.category.toLowerCase()+'s/'+(product.name[0]).toLowerCase()+product.name[product.name.length-1]+'.jpg')} />
      {/* <BlobToImage blob={product.image} /> */}
      {/* <ImageFromBuffer buffer={product.image}/> */}
      {/* <img src={require('../../assets/images/'+product.category.toLowerCase()+'s/'+(product.name[0]).toLowerCase()+product.name[product.name.length-1]+'.jpg')} /> */}
      <CardContent>
        <Typography gutterBottom variant="h6">
          {product.name}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          color="text.primary"
        >
          ${product.cost}
        </Typography>
      </CardContent>
      <CardContent>
        <Rating
          name="half-rating-read"
          defaultValue={product.rating}
          precision={0.5}
          readOnly
        />
      </CardContent>
      <CardActions>
        <Button
          className="card-button"
          fullWidth
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
