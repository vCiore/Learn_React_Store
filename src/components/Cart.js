import React, {useContext} from 'react';
import {CartContext} from "../context/CartContext";
import {Offcanvas, Stack} from "react-bootstrap";
import CartItems from "./CartItems";
import storeItems from "../data/items.json"
import {formatCurrency} from "../currenccy/formatCurrency";

const Cart = ({isCartOpen, closeCart}) => {

    const {cartItems} = useContext(CartContext)

    return (
        <Offcanvas show={isCartOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{fontWeight: "bolder", fontFamily: "fantasy", fontSize: "25px"}}>

                    {cartItems.length === 0 ? <span> Your cart is empty.</span> :

                        <span>{cartItems.reduce((total, cartItem) =>
                            total + cartItem.quantity, 0)} items in your cart< /span>}

                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>                                   {/*items list in cart*/}

                <Stack gap={3}>

                    {cartItems.map(item => (
                        <CartItems
                            key={item.id}
                            {...item}

                        />

                    ))}

                    {/*total*/}

                    <div
                        style={{fontFamily: 'fantasy', fontWeight: "bolder", fontSize: "20px"}}
                        className="d-flex justify-content-end"
                    >
                        Total:{'  '}

                        {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = storeItems.find(item => item.id === cartItem.id)
                            return total + (item.price || 0) * cartItem.quantity
                        }, 0))}

                    </div>

                </Stack>

            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default Cart;