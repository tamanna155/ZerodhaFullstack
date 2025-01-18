import React from 'react';

function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <h1 className=' mt-5 text-center'>Technology</h1>
                <h4 className='text-center mt-2 fs-4 text-muted'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='text-center mt-3 mb-5'>Check out our <a href='#' style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
            <div className='row mt-5 mb-5 border-bottom'></div>
        </div>
    );
}

export default Hero;