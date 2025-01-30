import React from 'react';

function OpenAccount() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-4' style={{fontSize:"2.75rem", fontWeight:"400"}}>Open a Zerodha account</h1>
                <p style={{fontSize:"1.25rem", fontWeight:"300"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button style={{width:"13%", margin:"0px auto"}} className='p-2 btn btn-primary mt-3 fs-5 mb-5'>Sign up Now</button>
            </div>
        </div>
    );
}

export default OpenAccount;