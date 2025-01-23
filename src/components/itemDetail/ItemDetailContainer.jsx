import React, { useEffect, useState } from 'react';
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(undefined);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, 'products');
    const ref = doc(itemCollection, id);

    // Obtener el producto principal
    getDoc(ref).then((res) => {
      const fetchedProduct = { id: res.id, ...res.data() };
      setProduct(fetchedProduct);

      // Buscar productos de la misma categoría
      const categoryQuery = query(
        itemCollection,
        where('category', '==', fetchedProduct.category), // Usamos la categoría del producto
        where('id', '!=', fetchedProduct.id) // Excluir el producto actual
      );

      getDocs(categoryQuery).then((querySnapshot) => {
        const related = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRelatedProducts(related);
      });
    });
  }, [id]);

  return (
    <div>
      {product !== undefined ? (
        <ItemDetail key={product.id} product={product} relatedProducts={relatedProducts} />
      ) : (
        <h2>Cargando detalles del producto...</h2>
      )}
    </div>
  );
};

export default ItemDetailContainer;
