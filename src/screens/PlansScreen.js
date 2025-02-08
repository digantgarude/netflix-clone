import React, { useEffect, useState } from 'react'
import './PlansScreen.css'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const productsRef = collection(db, 'products');
        // .where('active', '==', true)
        getDocs(productsRef)
        .then(querySnapshot => {
            const products = {};
            querySnapshot.docs.forEach(productDoc => {
                products[productDoc.id] = productDoc.data();
            });
            setProducts(products);
        });
    }, []);
    console.log(products);
    return (
        <div className="plansScreen">

        </div>
    )
}

export default PlansScreen