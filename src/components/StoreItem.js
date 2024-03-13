import React, {useContext} from 'react';
import {Button, Card, CardFooter, CardText} from "react-bootstrap";
import {formatCurrency} from "../currenccy/formatCurrency";
import {CartContext} from "../context/CartContext";

const StoreItem = ({item, cartItems, addToCart}) => {

    const {removeFromCart, decreaseQuantity, increaseQuantity} = useContext(CartContext)

    const {id, name, price, imgUrl} = item

    const cartItem = cartItems.find(cartItem => cartItem.id === id)  ///????????????????

    const quantity = cartItem ? cartItem.quantity : 0

    return (

        <Card className='h-100 d-flex justify-content-between p-4 mt-auto'
              style={{width: "85%", height: '70%', fontSize: "30px"}}
        >

            {imgUrl && (
                <Card.Img
                    variant="top"
                    src={imgUrl}
                    style={{objectFit: "contain"}}
                    height='80%'
                    width='70%'
                />
            )}


            <Card.Body className="d-flex-column
                                  justify-content-center
                                  aling-items-between">
                <Card.Title
                    className="d-flex
                    align-items-strech"

                >

               <span className="font-monospace"
               >

                   {name}

               </span>

                    <span className='ms-auto text-muted'>

                        {formatCurrency(price)}

                    </span>


                </Card.Title>

            </Card.Body>


            <footer className='d-flex justify-content-center mb-5'>

                {quantity === 0 ? (

                    <Button
                        variant="outline-danger"
                        size="lg"
                        className='w-100'
                        onClick={() => addToCart(item)}
                    >
                        Add
                    </Button>
                ) : (

                    <div className='d-flex aling-items-center' style={{gap: '.5rem'}}>

                        <div className="d-flex aling-items-center justify-content-center" style={{gap: '.5rem'}}>
                            <Button

                                onClick={() => decreaseQuantity(item)}
                                variant="outline-danger"
                                size="sm"

                            >-</Button>
                        </div>

                        <span className="fs-6">{quantity} in cart </span>

                        <div className='d-flex align-items-center'>

                            <Button

                                onClick={() => increaseQuantity(item)}
                                variant="outline-danger"
                                size="sm"

                            >+</Button>

                        </div>

                        <Button size="sm"

                                variant='danger'
                                onClick={() => removeFromCart(item)}

                        >Remove</Button>

                    </div>


                )
                }
            </footer>


        </Card>

    );
}

export default StoreItem;