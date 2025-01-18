import React from 'react';

function Universe() {
    return (
        <div className='container mb-5'>
            <div className='row text-center mb-5'>
                <h5 style={{fontWeight:"400"}} className='mt-5 mb-5'>Want to know more about our technology stack? Check out the <a href='#' style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</h5>
                <h2 className='mb-4 mt-5' style={{fontWeight:"500"}}>The Zerodha Universe</h2>
                <p className='mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mb-5 mt-2'>
                    <img src='media/images/smallcaseLogo.png' style={{width:"45%", height:"60%"}} className='img'></img>
                    <p style={{fontSize:"0.9rem"}} className='text-muted text-center'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-2'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"50%", height:"45%"}} className='img'></img>
                    <p style={{fontSize:"0.75rem"}} className='text-muted text-center'>Asset Managament</p>
                </div>
                <div className='col-4 p-3 mt-2'>
                    <img src='media/images/streakLogo.png' style={{width:"45%", height:"45%"}} className='img'></img>
                    <p style={{fontSize:"0.75rem"}} className='text-muted text-center'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-2'>
                    <img src='media/images/tijori.svg' style={{width:"50%", height:"60%"}} className='img'></img>
                    <p style={{fontSize:"0.75rem"}} className='text-muted text-center'>Fundamental research platform</p>
                </div>
                <div className='col-4 p-3 mt-2'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"50%", height:"60%"}} className='img'></img>
                    <p style={{fontSize:"0.75rem"}} className='text-muted text-center'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-2'>
                    <img src='media/images/dittoLogo.png' style={{width:"45%", height:"55%"}} className='img'></img>
                    <p style={{fontSize:"0.75rem"}} className='text-muted text-center'>Insurance</p>
                </div>
            </div>

            <div className='row'>
                <button style={{width:"13%", margin:"0px auto"}} className='p-2 btn btn-primary mt-4 fs-5 mb-5'>Signup Now</button>
            </div>
        </div>
    );
}

export default Universe;