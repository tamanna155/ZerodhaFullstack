import React from 'react';

function Hero() {
    return (
        <div className='container text-center mt-5'>
            <div className='row mt-5'>
                <h1 className='mt-5' style={{fontWeight:"500"}}>Pricing</h1>
                <h5 className='mb-5 mt-2' style={{fontWeight:"400"}}>Free equity investments and flat ₹20 intraday and F&O trades</h5>
            </div>
            <div className='row border-bottom mt-5'></div>
            <div className='row border-bottom'>
                <div className='col-4 mb-5 mt-3'>
                    <img src='media/images/pricingEquity.svg' style={{width:"60%", marginLeft:"30%",height:"50%"}} className='mt-5'></img>
                    <h3 className='text-center mb-4' style={{marginLeft:"4.5rem"}}>Free equity delivery</h3>
                    <p className='text-center text-muted' style={{lineHeight:"1.8rem", marginLeft:"4rem"}}>All equity delivery investments (NSE, BSE),<br></br>are absolutely free — ₹ 0 brokerage.</p>
                    <br></br><br></br><br></br><br></br>
                </div>
                <div className='col-4 mt-3 mb-5'>
                    <img src='media/images/otherTrades.svg' style={{width:"60%",height:"50%"}} className='mt-5'></img>
                    <h3 className='text-center mb-4'>Intraday and F&O trades</h3>
                    <p className='text-center text-muted' style={{lineHeight:"1.8rem"}}>Flat ₹ 20 or 0.03% (whichever is lower)<br></br>per executed order on intraday trades<br></br>across equity, currency, and commodity<br></br>trades. Flat ₹20 on all option trades.</p>
                    <br></br><br></br><br></br><br></br>
                </div>
                <div className='col-4 mt-3 mb-5'>
                    <img src='media/images/pricingEquity.svg' style={{width:"60%", marginRight:"30%",height:"50%"}} className='mt-5'></img>
                    <h3 className='text-center mb-4' style={{marginRight:"8rem"}}>Free direct MF</h3>
                    <p className='text-center tetx-muted' style={{lineHeight:"1.8rem", marginRight:"8rem"}}>All direct mutual fund investments are<br></br>absolutely free — ₹ 0 commissions & DP charges.</p>
                    <br></br><br></br><br></br><br></br>
                </div>
            </div>
        </div>
    );
}

export default Hero;