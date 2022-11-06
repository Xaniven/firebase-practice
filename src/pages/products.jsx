import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Items from "../components/items";
import "./products.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
import { useState, useEffect } from "react";

export default function Products() {
  const [its, setIts] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  function getItems() {
    const itemRef = collection(db, "Itms");
    getDocs(itemRef)
      .then((response) => {
        const i = response.docs.map((doc) => ({ data: doc.data(), id: doc.id }));
        setIts(i);
      })
      .catch();
  }
  // return each item in collection as individual "Item" components
  // TODO add grid layout
  return (
    <Container fluid>
      <div className='prodWrap'>
        <h1 className='mb-5'> Products:</h1>
        <div className='prodCard'>
          <Row xs={1} sm={2} lg={3}>
            {its.map((Itms) => (
              <Col className='mb-4'>
                <Items
                  title={Itms.data.title}
                  price={Itms.data.price}
                  prodDescrip={Itms.data.prodDescrip}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
}
