import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Items from "../components/items";
import "./products.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
import { useState, useEffect } from "react";

export default function Products() {
  const [cart, setCart] = useState([]);
  // holds array of 'item' from getItems()
  const [its, setIts] = useState([]);
  console.log(its);

  useEffect(() => {
    getItems();
  }, []);
  //sets state of its to array of 'item' from "Itms" firestore collection
  function getItems() {
    const itemRef = collection(db, "Itms");
    getDocs(itemRef)
      .then((response) => {
        const i = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
          key: doc.data().itemKey,
        }));
        setIts(i);
      })
      .catch();
  }

  //handle add to cart
  function handleATC(Itm) {
    setCart([...cart, Itm.title, Itm.price, Itm.id]);
    console.log(cart);
  }
  // return each item in collection as individual "Item" components
  return (
    <Container>
      <div className='prodWrap'>
        <h1 className='mb-5 mt-5'> Products:</h1>
        <div className='prodCard'>
          <Row xs={1} sm={2} lg={3} xl={4}>
            {its.map((Itms) => (
              <Col className='mb-4'>
                <Items
                  iOb={Itms.data}
                  title={Itms.data.title}
                  price={Itms.data.price}
                  prodDescrip={Itms.data.prodDescrip}
                  key={Itms.data.id}
                  handleATC={() => handleATC(Itms.data)}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
}
