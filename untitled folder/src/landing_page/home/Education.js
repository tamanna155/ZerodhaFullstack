import React from 'react';

function Education() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 text-center'>
                    <img src='media/images/indexEducation.svg' style={{width:"70%", height:"20rem"}}></img>
                </div>
                <div className='col-6 p-5'>
                    <h3>Free and open market education</h3>
                    <p style={{fontWeight:"400", lineHeight:"1.85rem"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#' style={{textDecoration:"none"}}>Varsity</a>
                    <p style={{fontWeight:"400", lineHeight:"1.85rem"}} className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#' style={{textDecoration:"none"}}>TradingQ&A</a>
                </div>
            </div>
        </div>
    );
}

export default Education;