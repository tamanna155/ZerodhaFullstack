import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center'>People</h1>
            </div>

            <div className='row p-5' style={{lineHeight:"1.8rem", fontSize:"1em"}}>
                <div className='col-6 p-5'>
                    <div className='text-center'>
                        <img src='media/images/Founder.jpeg' style={{width:"50%", height:"50%",borderRadius:"50%"}}></img>
                        <h5 className='mt-3'>Tamanna Tripathy</h5>
                        <p>Developer</p>
                    </div>
                </div>
                <div className='col-6 p-5 text-muted'>
                    <p>It is bootstrapped and founded to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>She is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Swimming is her zen.</p>
                    <p>Connect on <a href='#' style={{textDecoration:"none"}}>HomePage</a> / <a href='#' style={{textDecoration:"none"}}>TradingQnA</a></p>

                </div>
            </div>
        </div>
    );
}

export default Team;