import React from 'react';

function Awards() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 ml-5' style={{width:"50%",paddingLeft:"4rem"}}>
                    <img src='media/images/largestBroker.svg' style={{width:"433px", height:"277px"}}></img>
                </div>
                <div className='col-6 mb-4' style={{width:"40%"}}>
                    <h1 style={{fontWeight:"400",fontSize:"2rem",lineHeight:"1.5"}} className='mb-3'>Largest stock broker in India</h1>
                    <p className='mt-2 mb-4' style={{lineHeight:"1.8", fontSize:"1rem"}}>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6' style={{lineHeight:"2rem"}}>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6' style={{lineHeight:"2rem"}}>
                            <ul>
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <a href="#"><img src='media/images/pressLogos.png' style={{width:"100%", height:"12%"}}></img></a>
                </div>                

            </div>
        </div>
    );
}

export default Awards;