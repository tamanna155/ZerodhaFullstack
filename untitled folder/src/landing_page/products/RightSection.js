import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more →</a>
                    </div>
                </div>
                <div className='col-7 text-center p-5'>
                    <img src={imageURL} style={{width:"28rem", height:"32rem"}} className='img' />
                </div>
            </div>
        </div>
    );
}

export default RightSection;