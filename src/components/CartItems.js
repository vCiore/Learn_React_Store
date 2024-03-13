import React, {useContext} from 'react';
import {Button, Stack} from "react-bootstrap";
import storeItems from "../data/items.json";
import {formatCurrency} from "../currenccy/formatCurrency";
import {CartContext} from "../context/CartContext";
import {BsTrash3Fill} from "react-icons/bs";

const CartItems = ({id, quantity}) => {

    const {removeFromCart, decreaseQuantity, increaseQuantity} = useContext(CartContext)

    const item = storeItems.find(item => item.id === id)

    if (item === null) return null


    return (
        <div>
            <Stack direction="horizontal" gap={3}>
                <img

                    src={item.imgUrl}
                    style={{width: "70px", height: "70px", objectFit: "contain"}}
                    alt="item image"

                />
                {/*    name, quantity, price, total*/}

                <div className="me-auto">

                    <div style={{fontWeight: "bold"}}>
                        {item.name}{"  "}
                        {quantity > 1 && (
                            <span
                                className="text-muted"
                                style={{fontSize: ".8rem"}}
                            >
                            x{quantity}
                        </span>
                        )}
                    </div>

                    <div>
                        {formatCurrency(item.price)}
                    </div>

                </div>

                <div>
                    {formatCurrency(item.price * quantity)}
                </div>



            </Stack>

            <div className="d-flex justify-content-between mt-2">
                <div>

                    <Button
                        onClick={() => decreaseQuantity(item)}
                        variant='outline-danger'
                        size="sm"
                    >-</Button>
                    <span>{"  "}{quantity}{"  "}</span>

                    <Button
                        onClick={() => increaseQuantity(item)}
                        variant='outline-danger'
                        size="sm"
                    >+</Button>
                </div>

                <Button
                    variant='outline-secondary'
                    size="sm"
                    onClick={() => removeFromCart(item)}
                >
                    <BsTrash3Fill/>

                </Button>



            </div>

        </div>
    )
        ;
};

export default CartItems;