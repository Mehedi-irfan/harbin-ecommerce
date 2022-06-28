import React from 'react'

function Head() {
    return (
        <>
            <section className="head">
                <div className="container d-flex">
                    <div className="left row">
                        <i className="fa fa-phone"></i>
                        <label htmlFor="">+880 1892054369</label>
                        <i className="fa fa-envelope"></i>
                        <label htmlFor="">example@email.com</label>
                    </div>
                    <div className="right row RText">
                        <label htmlFor="">Theme FAQ's'</label>
                        <label htmlFor="">Need Helps</label>
                        <span>💷</span>
                        <label htmlFor="">EN</label>
                        <span>💷</span>
                        <label htmlFor="">USD</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head