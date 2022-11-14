import "./items.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

// Card component props expected: title, price, prodDescrip, (imgURL, key)
//TODO add product img to firestore pass down through props & key props
export default function Items(props) {
  return (
    <motion.div
      className='centerWrap'
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: -1 }}
      whileInView={{ opacity: 1 }}
    >
      <Card id='card'>
        <Card.Img id='cardImg' variant='top' src='https://picsum.photos/500/500' />
        <Card.Body id='cardBody'>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className='text-muted'>${props.price}</Card.Text>
          <Card.Text>{props.prodDescrip}</Card.Text>
        </Card.Body>
        <motion.div initial={{ scale: 1 }} whileTap={{ scale: 1.1 }}>
          <Button>Add To Cart</Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}
