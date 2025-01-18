import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return (
        <div className='container mb-5'>
            <div className='row mb-5'>
                <div className='col-7 text-center mb-5'>
                    <img src={imageURL} style={{width:"32rem"}} className='img' />
                </div>
                <div className='col-4 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo →</a>
                        <a href={learnMore} style={{textDecoration:"none", marginLeft:"90px"}}>Learn more →</a>
                    </div>
                    <div className='mt-2'>
                        <a href={googlePlay}><img src='media/images/googleplay.svg' style={{width:"38%", height:"15%"}} alt='PlayStore' className='img'></img></a>
                        <a href={appStore}><img src='media/images/appstoreBadge.svg' style={{width:"35%", height:"15%", marginLeft:"20px"}} alt='AppStore' className='img'></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;