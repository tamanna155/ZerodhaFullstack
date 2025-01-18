import React from 'react';

function CreateTicket() {
    return (
        <div className='container mb-5'>
            <div className='row p-5 ml-5 mb-5'>
                <h4 style={{fontWeight:"350"}}>To create a ticket, select a relevant topic</h4>
                <div className='col-4 mt-5'>
                    <h4 style={{fontWeight:"350"}} className='mb-4'>Account Opening</h4>
                    <ul style={{listStyle:"none", lineHeight:"2rem"}} className='text-muted'>
                        <a href='#' style={{textDecoration:"none"}}><li>Getting started</li></a>
                        <a href='#' style={{textDecoration:"none"}}><li>Online</li></a>
                        <a href='#' style={{textDecoration:"none"}}><li>Offline</li></a>
                        <a href='#' style={{textDecoration:"none"}}><li>Charges</li></a>
                        <a href='#' style={{textDecoration:"none"}}><li>Company, Partnership and HUF</li></a>
                        <a href='#' style={{textDecoration:"none"}}><li>Non Resident Indian (NRI)</li></a>
                    </ul>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontWeight:"350"}} className='mb-4'>Your Zerodha Account</h4>
                        <ul style={{listStyle:"none", lineHeight:"2rem"}} className='text-muted'>
                            <a href='#' style={{textDecoration:"none"}}><li>Login credentials</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Your Profile</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Account modification and segment addition</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>CMR & DP ID</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Nomination</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Transfer and conversion of shares</li></a>
                        </ul>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontWeight:"350"}} className='mb-4'>Trading and Markets</h4>
                        <ul style={{listStyle:"none", lineHeight:"2rem"}} className='text-muted'>
                            <a href='#' style={{textDecoration:"none"}}><li>Trading FAQs</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Kite</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Margins</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Product and order types</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Corporate actions</li></a>
                            <a href='#' style={{textDecoration:"none"}}><li>Kite features</li></a>
                        </ul>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontWeight:"350"}} className='mb-4'>Funds</h4>
                            <ul style={{listStyle:"none", lineHeight:"2rem"}} className='text-muted'>
                                <a href='#' style={{textDecoration:"none"}}><li>Fund withdrawal</li></a>
                                <a href='#' style={{textDecoration:"none"}}><li>Adding funds</li></a>
                                <a href='#' style={{textDecoration:"none"}}><li>Adding bank accounts</li></a>
                                <a href='#' style={{textDecoration:"none"}}><li>eMandates</li></a>
                            </ul>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontWeight:"350"}} className='mb-4'>Console</h4>
                                <ul style={{listStyle:"none", lineHeight:"2rem"}} className='text-muted'>
                                    <a href='#' style={{textDecoration:"none"}}><li>IPO</li></a>
                                    <a href='#' style={{textDecoration:"none"}}><li>Portfolio</li></a>
                                    <a href='#' style={{textDecoration:"none"}}><li>Funds statement</li></a>
                                    <a href='#' style={{textDecoration:"none"}}><li>Profile</li></a>
                                    <a href='#' style={{textDecoration:"none"}}><li>Reports</li></a>
                                    <a href='#' style={{textDecoration:"none"}}><li>Referral program</li></a>
                                </ul>
                </div>
                <div className='col-4 mt-5'>
                    <h4 style={{fontWeight:"350"}} className='mb-4'>Coin</h4>
                                    <ul style={{listStyle:"none", lineHeight:"2rem"}} className='text-muted'>
                                        <a href='#' style={{textDecoration:"none"}}><li>Understanding mutual funds and Coin</li></a>
                                        <a href='#' style={{textDecoration:"none"}}><li>Coin app</li></a>
                                        <a href='#' style={{textDecoration:"none"}}><li>Coin web</li></a>
                                        <a href='#' style={{textDecoration:"none"}}><li>Transactions and reports</li></a>
                                        <a href='#' style={{textDecoration:"none"}}><li>National Pension Scheme (NPS)</li></a>
                                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;