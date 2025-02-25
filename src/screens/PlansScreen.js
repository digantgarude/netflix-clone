import React, { useEffect, useState } from 'react'
import './PlansScreen.css'
import db from '../firebase'
import { collection, getDocs, updateDoc } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        let productsRef = collection(db, 'products');
        // .where('active', '==', true)
        getDocs(productsRef)
        .then(querySnapshot => {
            let products = {};
            querySnapshot.docs.forEach(productDoc => {
                products[productDoc.id] = productDoc.data();
            });
            setProducts(products);
        });
    }, []);
    console.log(products);

    const loadCheckOut = async (productId) => {
        console.log(productId);
        let docRef = collection(db, `customers`,user.uid);
        
        updateDoc(docRef, {
            productId: productId
        });
        // docRef = docRef.doc(user.uid);
        
    }

    return (
        <div className="plansScreen">
            {Object.entries(products).map(([productId, productData])=> {
                return <div className="plansScreen_plan" key={productId}>
                    <div className="plansScreen_info">
                        <h5>{productData.name}</h5>
                        <h6>{productData.description}</h6>
                    </div>
                    <button onClick={() => loadCheckOut(productId)}>Subscribe</button>
                </div>
            })}
        </div>
    )
}

export default PlansScreen