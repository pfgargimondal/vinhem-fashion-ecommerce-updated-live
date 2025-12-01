import { Link } from "react-router-dom";
import "./Footer.css";
import Loader from "../../Loader/Loader";
import { useEffect, useState } from "react";

export const Footer = ({ shouldHideFullHeaderFooterRoutes }) => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    if (loading) {
      html.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
    }
  }, [loading]);

  return (
    <>
    {loading && <Loader />} 
      { !shouldHideFullHeaderFooterRoutes && (
        <footer>
          <div className="container-fluid pt-5">
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-3 mb-4">
                    <div className="dbewjbruwerwer_inner">
                      <h5>Information</h5>
                      {/* <img src="images/logo.png" className="img-fluid mb-4" alt="" /> */}

                      <ul className="f-link mb-3 ps-0">
                        <li><Link to="/about-us"><i class="bi me-2 bi-caret-right-fill"></i> About Us</Link></li>

                        <li><Link to="/contact-us"><i class="bi me-2 bi-caret-right-fill"></i> Contact Us</Link></li>

                        <li><Link to="/terms-&-condition"><i class="bi me-2 bi-caret-right-fill"></i> Terms & Condition</Link></li>

                        <li><Link to="/blog"><i class="bi me-2 bi-caret-right-fill"></i> Blog</Link></li>
                      </ul>

                      <img src="/images/comodo.png" className="simg img-fluid" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dbewjbruwerwer_inner">
                      <h5>My Account</h5>

                      <ul className="f-link mb-0 ps-0">
                        {/* <li><Link to=""><i class="bi me-2 bi-caret-right-fill"></i> Become a Vendor</Link></li> */}

                        <li><Link to="/login"><i class="bi me-2 bi-caret-right-fill"></i> Sign in</Link></li>

                        <li><Link to="/register"><i class="bi me-2 bi-caret-right-fill"></i> Sign up</Link></li>

                        <li><Link to=""><i class="bi me-2 bi-caret-right-fill"></i> Track Order</Link></li>

                        <li><Link to="/faq"><i class="bi me-2 bi-caret-right-fill"></i> F.A.Q</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dbewjbruwerwer_inner">
                      <h5>Customer Services</h5>

                      <ul className="f-link mb-0 ps-0">
                        <li><Link to="/payment-options"><i class="bi me-2 bi-caret-right-fill"></i> Payment Option</Link></li>

                        <li><Link to=""><i class="bi me-2 bi-caret-right-fill"></i> Testimonial</Link></li>

                        <li><Link to="/career"><i class="bi me-2 bi-caret-right-fill"></i> Career</Link></li>

                        <li><Link to=""><i class="bi me-2 bi-caret-right-fill"></i> Site Map</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-3 mb-4">
                    <div className="dbewjbruwerwer_inner">
                      <h5>Policy</h5>

                      <ul className="f-link mb-0 ps-0">
                        <li><Link to="/privacy-policy"><i class="bi me-2 bi-caret-right-fill"></i> Privacy Policy</Link></li>

                        <li><Link to="/return-policy"><i class="bi me-2 bi-caret-right-fill"></i> Return Policy</Link></li>

                        <li><Link to="/order-policy"><i class="bi me-2 bi-caret-right-fill"></i> Order Policy</Link></li>

                        <li><Link to="/shipping-policy"><i class="bi me-2 bi-caret-right-fill"></i> Shipping Policy</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 mb-4">
                <div className="dbewjbruwerwer_inner">
                  <h5>Follow Us</h5>

                  <ul className="f-fu-link mb-4 ps-0">
                    <li><Link to=""><i class="bi bi-facebook"></i></Link></li>

                    <li><Link to=""><i class="bi bi-instagram"></i></Link></li>

                    <li><Link to=""><i class="bi bi-pinterest"></i></Link></li>

                    <li><Link to=""><i class="bi bi-twitter-x"></i></Link></li>

                    <li><Link to=""><i class="bi bi-youtube"></i></Link></li>
                  </ul>

                  <h5>Fashion Updates</h5>

                  <p>Subscribe to our newsletter</p>

                  <div className="position-relative">
                    <input type="search" className="form-control" placeholder="Email id" />

                    <button className="btn position-absolute btn-main px-3"><i className="bi bi-send"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="idnweihrwerwe text-center py-3">
            <div className="container">
                <p className="jamdlkjwekrer mb-0">Copyright <i class="bi bi-c-circle"></i> 2012-2025, vinhem fashion.com. All rights reserved. Powered By VinHem Technologies</p>
            </div>
          </div>        
        
          <div className="footer-bottom mt-3">
            <div className="container-fluid">
              <ul className="mb-3 d-flex justify-content-center align-items-center ps-0 imprtnt-list">
                <li><i class="bi me-1 bi-truck"></i> <span>Worldwide Shipping</span></li>

                <li>|</li>

                <li><i class="bi me-1 bi-vignette"></i> <span>Customized Tailoring</span></li>

                <li>|</li>

                <li><i class="bi me-1 bi-telephone"></i> <span>+91 8981750096</span></li>

                <li>|</li>

                <li><i class="bi me-1 bi-whatsapp"></i> <span>+91 8981750096</span></li>
              </ul>

              <p className="doejwojrowejower">Secure shopping from India for Sarees, Salwar Kameez, Lehenga Cholis, Mens Wear, Kids Wears, Jewellery & Accessories for delivery in USA,UK and Worldwide.</p>
            </div> 

            <div className="duiwehihiwejiurwer py-3">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <ul className="fb-payment-options sfefaeewrweqqq d-flex justify-content-start align-items-center ps-0 mb-0">
                      <li><p className="asfrweewee mb-0">OUR COURIER PARTNERS :</p></li>

                      <li><img src="/images/fedex.png" className="img-fluid" alt="" /></li>

                      <li><img src="/images/dhl.png" className="img-fluid" alt="" /></li>
                      
                      <li className="me-0"><img src="/images/bd.png" className="img-fluid" alt="" /></li>
                    </ul>
                  </div>

                  <div className="col-lg-7">
                    <ul className="fb-payment-options kajhdijojeijrrr d-flex justify-content-end align-items-center ps-0 mb-0">
                      <li><p className="asfrweewee mb-0">SAFE & SECURE PAYMENTS :</p></li>

                      <li><img src="/images/ico-1.png" className="img-fluid" alt="" /></li>

                      <li><img src="/images/ico-2.png" className="img-fluid" alt="" /></li>

                      <li><img src="/images/amex.png" className="img-fluid" alt="" /></li>

                      <li><img src="/images/images.png" className="img-fluid" alt="" /></li>

                      <li><img src="/images/Diners-Club-In.png" className="img-fluid" alt="" /></li>

                      <li><img src="/images/paytm.png" className="img-fluid" alt="" /></li>

                      <li className="me-0"><img src="/images/amazonpay.png" className="img-fluid" alt="" /></li>                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>       
          </div>    
        </footer>
      ) }
    </>
  )
}