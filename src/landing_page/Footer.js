import React from 'react';
import '../footer.css';
function Footer() {
    return (
        <div className='container-fulid mt-5' style={{ backgroundColor: "#fbfbfb" }}>
            <div className='row pt-5 ps-5'>
                <div className='col-3'>
                    <img className='pb-2' style={{ width: "50%" }} src='media/images/logo.svg' alt='logo' />
                    <p className='mb-0'>© 2010 - 2024, Zerodha Broking Ltd.</p>
                    <p>All rights reserved.</p>
                    <div className='row'>
                        <div className='col-1'><i class="fa-brands fa-instagram"></i></div>
                        <div className='col-1'><i class="fa-brands fa-square-facebook"></i></div>
                        <div className='col-1'><i class="fa-brands fa-x-twitter"></i></div>
                        <div className='col-1'><i class="fa-brands fa-linkedin-in"></i></div>
                    </div>
                    <hr />
                    <div className='row mt-0'>
                        <div className='col-1 link'><i class="fa-brands fa-youtube"></i></div>
                        <div className='col-1'><i class="fa-brands fa-whatsapp"></i></div>
                        <div className='col-1'><i class="fa-brands fa-telegram"></i></div>
                    </div>
                </div>
                <div className='col-3'>
                    <h3>Company</h3>
                    <a className='link' href='' >About</a><br></br>
                    <a href='' className='link'>Products</a><br></br>
                    <a href='' className='link'>Pricing</a><br></br>
                    <a href='' className='link'>Referral programme</a><br></br>
                    <a href='' className='link'>Careers</a><br></br>
                    <a href='' className='link'>Zerodha.tech</a><br></br>
                    <a href='' className='link'>Press & media</a><br></br>
                    <a href='' className='link'>Zerodha Cares (CSR)</a>
                </div>
                <div className='col-3'>
                    <h3>Support</h3>
                    <a className='link' href='' >Contact us</a><br></br>
                    <a href='' className='link'>Support portal</a><br></br>
                    <a href='' className='link'>Z-Connect blog</a><br></br>
                    <a href='' className='link'>List of charges</a><br></br>
                    <a href='' className='link'>Downloads & resources</a><br></br>
                    <a href='' className='link'>Videos</a><br></br>
                    <a href='' className='link'>Market overview</a><br></br>
                    <a href='' className='link'>How to file a complaint?</a><br></br>
                    <a href='' className='link'>Status of your complaints</a>
                </div>
                <div className='col-3'>
                    <h3>Account</h3>
                    <a className='link' href='' >Open an account</a><br></br>
                    <a href='' className='link'>Fund transfer</a><br></br>
                </div>
            </div>
            <div className='row p-5 details'>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through
                    Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX:
                    46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
                    Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints
                    pertaining to securities broking please write to <a href='' className='f-link'>complaints@zerodha.com</a>, for DP related to <a href='' className='f-link'>dp@zerodha.com.</a>Please ensure
                    you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>
                <p>
                    Procedure to file a complaint on <a href='' className='f-link'>SEBI SCORES</a> : Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name,
                    PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                </p>
                <p>
                    <a href='' className='f-link'>Smart Online Dispute Resolution</a> | <a href='' className='f-link'>Grievances Redressal Mechanism</a>
                </p>
                <p>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>
                <p>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system
                    w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive
                    OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the
                    consolidated account statement issued by NSDL/CDSL every month.
                </p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive
                    information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest
                    of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered
                    intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another
                    intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the
                    Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment.
                    In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have
                    not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering
                    such services, please <a href='' className='f-link'>create a ticket here</a>.
                </p>
                <div className='text-center'>
                    <a href='' className='link-1'>NSE</a>
                    <a href='' className='link-1'>BSE </a>
                    <a href='' className='link-1'>MCX Terms & conditions </a>
                    <a href='' className='link-1'>Policies & procedures </a>
                    <a href='' className='link-1'>Privacy policy </a>
                    <a href='' className='link-1'> Disclosure </a>
                    <a href='' className='link-1'>For investor's attention </a>
                    <a href='' className='link-1'> Investor charter</a>

                </div>
            </div>
        </div>
    )
}

export default Footer;