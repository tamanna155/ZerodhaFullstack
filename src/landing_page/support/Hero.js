import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' style={{color:"white", backgroundColor:"#387ed1"}}>
            <div className='p-3' id='supportWrapper'>
                <h4 className='mt-5'>Support Potal</h4>
                <a href='#' style={{color:"white"}} className='img mt-5'>Track tickets</a>
            </div>

            <div className='row p-3 ml-5' style={{marginLeft:"2.8rem"}}>
                <div className='col-6 p-5 ml-5'>
                    <h2 className='fs-3'>Search for an answer or browse help topics to create a ticket</h2><br></br>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' style={{width:"100%", padding:"20px 30px", borderRadius:"5px", border:"none"}}/>
                    <br></br><br></br>
                    <a href='#' style={{color:"white", marginRight:"25px"}}> Track account opening </a>
                    <a href='#' style={{color:"white", marginRight:"25px"}}> Track segment activation </a>
                    <a href='#' style={{ color:"white", marginRight:"25px"}}> Intraday margins </a><br></br><br></br>
                    <a href='#' style={{ color:"white", marginRight:"25px"}}> Kite user manual </a>
                </div>
                <div className='col-6 p-5'>
                    <h2 className='fs-4 mb-3'>Featured</h2>
                    1. <a href='#' style={{color:"white"}}> Surveillance measure on scrips - August 2024 </a><br></br><br></br>
                    2. <a href='#' style={{color:"white"}}> Latest Intraday leverages and Square-off timings </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;