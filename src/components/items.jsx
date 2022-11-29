import "./items.scss";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";

// Card component props expected: title, price, prodDescrip, (imgURL, key)

export default function Items(props, { handleATC }) {
  return (
    <motion.div
      className='centerWrap'
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: -1 }}
      whileInView={{ opacity: 1 }}
      key={props.key}
    >
      <Card className='card' key={props.key}>
        <Card.Img id='cardImg' variant='top' src='https://picsum.photos/500/500' />
        <Card.Body id='cardBody'>
          <Card.Title>
            {props.title}
            <Card.Text className='text-muted'>${props.price}</Card.Text>
          </Card.Title>

          <Card.Text>{props.prodDescrip}</Card.Text>
        </Card.Body>
        <motion.div initial={{ scale: 1 }} whileTap={{ scale: 1.1 }}>
          <Button onClick={() => props.handleATC(props.iOb)}>Add To Cart</Button>
        </motion.div>
      </Card>
    </motion.div>
  );
}
