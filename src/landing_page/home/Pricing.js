import React from 'react';

function Pricing() {
    return (
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-5 p-5'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p style={{fontWeight:"300", lineHeight:"1.85rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration:"none"}}>See pricing</a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col-6 border mt-5 p-5'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 border mt-5 p-5'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;