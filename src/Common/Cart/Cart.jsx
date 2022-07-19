import React from 'react';
import './Style.css'

function Cart({ productItem, addToCart, decreseQty }) {
    const totalPrice = productItem.reduce((item, price) => price + item.qty * item.price, 0)

    return (
        <>
            <section className="cart-items">
                <div className="container d-flex">
                    <div className="cart-details">
                        {
                            productItem.length === 0 && <h1 className='no-items product'>No Items In the Cart</h1>
                        }
                        {
                            productItem?.map((item) => {
                                const productQty = item?.price * item?.qty
                                return (
                                    <div className="cart-list product d-flex">
                                        <div className="img">
                                            <img src={item?.cover} alt="" />
                                        </div>
                                        <div className="cart-details">
                                            <h3>{item.name}</h3>
                                            <h4>{item.price}.00 * {item.qty}
                                                <span>${productQty}.00</span>
                                            </h4>
                                        </div>
                                        <div className="cart-items-function">
                                            <div className="removeCart">
                                                <button className="removeCart">
                                                    <i className="fa -solid fa-xmark"></i>
                                                </button>
                                            </div>


                                            <div className="cartControl d-flex">
                                                <button className="inCart" onClick={() => addToCart(item)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                                <button className="desCart" onClick={() => decreseQty(item)}>
                                                    <i className="fa fa-minus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-price"></div>
                                    </div>

                                )

                            })

                        }
                    </div>
                    <div className="cart-total product">
                        <h2>Cart Summary</h2>
                        <div className="d-flex">
                            <h4>Total Price :  </h4>
                            <h3>${totalPrice}.00</h3>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cart