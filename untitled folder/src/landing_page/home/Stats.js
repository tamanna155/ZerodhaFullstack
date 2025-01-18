import React from 'react';

function Stats() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <div className='col-5 p-5'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h5 style={{fontWeight:"500"}}>Customer-first always</h5>
                    <p style={{fontWeight:"300", lineHeight:"1.85rem"}} className='mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

                    <h5 style={{fontWeight:"500"}} className='mt-2'>No spam or gimmicks</h5>
                    <p style={{fontWeight:"300", lineHeight:"1.85rem"}} className='mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h5 style={{fontWeight:"500"}} className='mt-2'>The Zerodha universe</h5>
                    <p style={{fontWeight:"300", lineHeight:"1.85rem"}} className='mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h5 style={{fontWeight:"500"}} className='mt-2'>Do better with money</h5>
                    <p style={{fontWeight:"300", lineHeight:"1.85rem"}} className='mb-4'>With initiatives like <a href='#' style={{textDecoration:"none"}}>Nudge</a> and <a href='#' style={{textDecoration:"none"}}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7'>
                    <div className='text-center mt-5'>
                        <img src='media/images/ecosystem.png' style={{width:"23rem",height:"25rem", marginTop:"7rem"}}></img>
                    </div>
                    <div className='text-center'>
                        <a href='#' style={{textDecoration:"none", marginRight:"100px"}}>Explore our products</a>
                        <a href='#' style={{textDecoration:"none"}}>Try Kite demo</a>
                    </div>
                </div>                

            </div>
        </div>
    );
}

export default Stats;