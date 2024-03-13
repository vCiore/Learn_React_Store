import React, {useContext, useState} from 'react';
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Blog from "../pages/Blog";
import {FaShoppingCart} from "react-icons/fa";
import {CartContext} from "../context/CartContext";
import Cart from "./Cart";

const Header = () => {

    const [searchText, setSearchText] = useState('')


    const {cartItems, setCartItems} = useContext(CartContext)

    const [isCartOpen,setIsCartOpen] = useState(false)

    const handleCartToggle =() => {

        setIsCartOpen(!isCartOpen)

    }

    const closeCart = () => {

        setIsCartOpen(false)
    }

    const handelSearch= (event) =>{

        setSearchText(event.target.value)
    }


    return (

        <>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">

                    <img
                        src='/images/logo2.png'
                        alt='Logo'
                        height={100}
                        width={100}
                    />
                    <span
                        style={{fontFamily: "cursive", fontWeight: "bolder", fontSize: "larger" }}

                    >Toy Universe</span>

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">


                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/blog" as={NavLink}>Blog</Nav.Link>
                        <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>

                    </Nav>

                    <Form

                        inline="true"
                        className="d-flex justify-content-center"



                    >

                                <Form.Control

                                    type="text"
                                    placeholder="Search..."
                                    className="me-4 shadow-none" //input line around///
                                    onChange={handelSearch}
                                />


                    <Button

                        variant='success'
                        onClick={handleCartToggle}
                    >

                        { cartItems.length === 0 ? <FaShoppingCart

                            className='ml-3'
                            size={30}

                        /> : <div>

                            <FaShoppingCart className='ml-3'
                                             size={30}/>
                            <span
                                style={{color: 'black', fontWeight: 'bolder',
                                        fontSize: '15px', padding: "2px",
                                        background: "white", borderRadius: "20px",}}
                            >
                                {cartItems.reduce((total, cartItem) =>
                                    total + cartItem.quantity, 0)}

                            </span>

                            </div>
                        }


                    </Button>


                    </Form>




                </Navbar.Collapse>

                <Cart
                    isCartOpen={isCartOpen}
                    closeCart={closeCart}
                />


            </Container>
        </Navbar>


    <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/store" element={<Store  searchText={searchText}/>}/>
    </Routes>

    </>

    );
};

export default Header;