import React from 'react'

function Cart({ productItem, addToCart }) {
    console.log(productItem);
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
                                    <div className="cart-list product">
                                        <div className="img">
                                            <img src={item?.cover} alt="" />
                                        </div>
                                        <div className="cart-details">
                                            <h3>{item.name}</h3>
                                            <h4>{item.price}.00 * {item.qty}
                                                <span>${productQty}.00</span>
                                            </h4>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart