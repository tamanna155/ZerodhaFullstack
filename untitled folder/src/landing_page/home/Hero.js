import React from 'react';

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='heroImage' className='mb-5 mx-auto'></img>
                <h1 className='mt-5' style={{fontSize:"2.75rem", fontWeight:"400"}}>Invest in everything</h1>
                <p style={{fontSize:"1.25rem"}}>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button style={{width:"13%", margin:"0px auto"}} className='p-2 btn btn-primary mt-5 fs-5 mb-5'>Signup Now</button>
            </div>
        </div>

    );
}

export default Hero;