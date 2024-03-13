import React, {useContext} from 'react';
import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {CartContext} from "../context/CartContext";
const Store = ({searchText}) => {

    const {cartItems, setCartItems} = useContext(CartContext)

    const filteredItems = storeItems.filter(item => {
        return item.name.toLowerCase().includes(searchText.toLowerCase())
    })

    // add items in cart

    const addToCart = (item) => {

        // check if we have item in cart=> add 1

        const  existingItem = cartItems.find(cartItem => cartItem.id===item.id)

        if (existingItem) {
            const updatedCartItems = cartItems.map(cartItem =>
                cartItem.id===item.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
            )

            setCartItems(updatedCartItems)
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}])             // check if item is not in the cart=> change to 1
        }

    }
    return (
        <>
            <h1 style={{color:"darkred"}}>Welcome to Toy Universe</h1>

            <Row>

                {filteredItems.map(item => (

                    <Col key={item.id} className="p-4" >

                        <StoreItem
                           item={item}
                           cartItems={cartItems}
                           addToCart={addToCart}

                        />

                    </Col>

                ))}

            </Row>


        </>
    );
};

export default Store;