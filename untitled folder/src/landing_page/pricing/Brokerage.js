import React from 'react';

function Brokerage() {
    return (
        <div className='container mb-5'>
            <div className='row mb-5'>
                <div className='col-7 mb-5'>
                    <h4 className='p-4' style={{fontWeight:"300"}}><a href='#' style={{textDecoration:"none"}} className='p-5'>Brokerage calculator</a></h4>
                    <ul className='text-muted' style={{fontSize:"0.8rem"}}>
                        <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower)</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className='col-5'>
                <h4 className='p-4' style={{fontWeight:"300"}}><a href='#' style={{textDecoration:"none"}} className='p-5'>List of charges</a></h4>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;