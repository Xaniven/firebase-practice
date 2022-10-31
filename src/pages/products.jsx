import Items from "../components/items";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/firebase";
import { useState } from "react";
import { useEffect } from "react";

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

  return (
    <>
      {its.map((Itms) => (
        <Items title={Itms.data.title} price={Itms.data.price} />
      ))}
    </>
  );
}
