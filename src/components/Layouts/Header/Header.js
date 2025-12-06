  // eslint-disable-next-line
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { SwiperSlide } from 'swiper/react';
import { useAuth } from "../../../context/AuthContext";
import { DropdownLoggedIn } from "../../Elements/Dropdown/DropdownLoggedIn";
import http from "../../../http";
import Logo from "../../../assets/images/logo.png";
import "./Css/Header.css";
import "./Css/HeaderResponsive.css";
import 'swiper/css';
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/WishlistContext";
import { useCurrency } from "../../../context/CurrencyContext";

export const Header = ({ shouldHideHeader, shouldHideFullHeaderFooterRoutes, shouldHideHeaderCategoryRoutes }) => {
  const [resMenu, setResMenu] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [searchCurrency, setSearchCurrency] = useState("");
    // eslint-disable-next-line
  const [searchBarToggle, setSearchBarToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { selectedCurrency, setSelectedCurrency } = useCurrency();
  const pathName = useLocation().pathname;
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const searchRefRes = useRef(null);
  const [resCtgyDrpdwn, setResCtgyDrpdwn] = useState(false);


  useEffect(() => {
    const body = document.querySelector("body");

    body.addEventListener("click", () => setUserDropdown(false));

    return () => {
      body.removeEventListener("click", () => setUserDropdown(false));
    }
  }, []);


  /*search*/

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = searchRef.current?.value?.trim();

    searchValue && navigate(`/all-products?search=${encodeURIComponent(searchValue)}`);
    
    searchRef.current.value = "";
  }

  /*res search*/

  const handleResSearch = (e) => {
    e.preventDefault();
    const searchValue = searchRefRes.current?.value?.trim();

    searchValue && navigate(`/all-products?search=${encodeURIComponent(searchValue)}`);
    
    searchRefRes.current.value = "";
  }

  useEffect(() => {
    const body = document.querySelector("html");

    if (resMenu) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }
  }, [resMenu]);

  useEffect(() => {
    setResMenu(false);
  }, [pathName]);

  const { user } = useAuth();

  const [mainCategory, SetmainCategory] = useState([]);
  const [currency, Setcurrency] = useState([]);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);


  useEffect(() => {
      const fetchMainCategory = async () => {
          try {
              const getresponse = await http.get("/product-category");
              const allresponse = getresponse.data;
              SetmainCategory(allresponse.data); 
          } catch (error) {
              console.error("Error fetching main category:", error);
          }
      };

      fetchMainCategory();
  }, []);

  useEffect(() => {
    const fetchCurrency = async () => {
        try {
          
            const getresponse = await http.get("/get-currency-content");
            const allresponse = getresponse.data;
            Setcurrency(allresponse.data || []);

            // 👇 Step 1: Try to get previously saved currency
            const savedCurrency = localStorage.getItem("selectedCurrency");

            if (savedCurrency) {
              // Parse and set saved currency
              setSelectedCurrency(JSON.parse(savedCurrency));
            } else {
              // 👇 Step 2: Fallback to default choice = 1
              const defaultCurrency = allresponse.data?.find(c => c.choice === 1);
              if (defaultCurrency) {
                setSelectedCurrency(defaultCurrency);
                // Also save it in localStorage
                localStorage.setItem("selectedCurrency", JSON.stringify(defaultCurrency));
              }
            }
        } catch (error) {
            console.error("Error fetching currency:", error);
        }
    };
    fetchCurrency();
  }, [setSelectedCurrency]);

  const filteredCurrency = currency.filter((cur) => {
    if (!searchCurrency.trim()) return true; // show all by default

    return (
      cur.currency_type.toLowerCase().includes(searchCurrency.toLowerCase()) ||
      cur.currency_code.toLowerCase().includes(searchCurrency.toLowerCase())
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setUserDropdown(false);
  }, [pathName]);



  return (
    <>
      { !shouldHideFullHeaderFooterRoutes && (
        <header>
          <div className="advertisement-slider position-relative" style={{background: "url('/images/csadad.jpg') no-repeat", backgroundPosition: "top", backgroundSize: "cover"}}>
          <div className="marquee-container">
            <div className="marquee-track marquee-left">
              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>

              <div className="scroll-card">
                <p className="mb-0"><a href="/">SUMMER SALE: UP TO 70% OFF SELECTED ITEMS</a></p>
              </div>
            </div>
          </div>
          </div>

          <div className={`header-sticky-wrapper ${isSticky ? "is-fixed-top" : ""} ${shouldHideHeader ? "d-none" : ""}`}>
            <div className="doiemwokjrmwewer w-100">
              { !shouldHideHeader && (
              <div className="header-top py-2">
                <div className="container-fluid">
                  <div className="gvredeewerrr row align-items-center justify-content-between">
                    <div className="col-lg-4">
                      <div className="soifjoejopeor d-flex align-items-center">
                        <div className="doeiwhrkwdeor">
                          <i className="fa-solid fa-bars d-none" id="res-toggle-btn" onClick={() => setResMenu(!resMenu)}></i>

                          <Link to="/" className="duiewhewijrrqq"><img src={Logo} className="img-fluid" alt="" /></Link>

                          <div className="custom-currency-dropdown wlojdfiwejrower d-none position-relative">
                            <button
                                className="currency-toggle-btn d-flex align-items-center"
                                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                              >
                                <span className="me-2">
                                  <img
                                    src={selectedCurrency?.flag_icon || "https://flagcdn.com/24x18/in.png"}
                                    alt={selectedCurrency?.currency_code || "INR"}
                                    width="24"
                                    height="18"
                                  />
                                </span>

                                <span>{selectedCurrency?.currency_code || "INR"}</span>

                                <i
                                  className={`fa-solid ms-2 ${
                                    showCurrencyDropdown ? "fa-chevron-up" : "fa-chevron-down"
                                  }`}
                                ></i>
                              </button>

                            {showCurrencyDropdown && (
                              <div className="osjoidhwjiwer dwelorjwemr-res position-absolute bg-white shadow rounded-3 mt-2 p-2">
                                <div className="dmndfkswndfiofrsmk position-relative">
                                  <input type="text" placeholder="Search for a region" value={searchCurrency}
                                    onChange={(e) => setSearchCurrency(e.target.value)} className="form-control py-1" />
                                  <i
                                    className={`bi position-absolute ${searchCurrency.length > 0 ? "bi-x" : "bi-search"}`}
                                    style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                                    onClick={() => {
                                      if (searchCurrency.length > 0) {
                                        setSearchCurrency("");   // Clear search when clicking cross
                                      }
                                    }}
                                  ></i>
                                </div>

                                <ul className="currency-menu mb-0 px-0">
                                  {filteredCurrency.map((cur) => (
                                    <li
                                      key={cur.id}
                                      className="currency-item d-flex align-items-center p-2"
                                      onClick={() => {
                                        setSelectedCurrency(cur);
                                        localStorage.setItem("selectedCurrency", JSON.stringify(cur));
                                        setShowCurrencyDropdown(false);
                                      }}
                                    >
                                      <span className="me-2">
                                        <img
                                          src={cur.flag_icon}
                                          alt={cur.currency_code}
                                          width="24"
                                          height="18"
                                        />
                                      </span>
                                      <span>
                                        {cur.currency_type} ({cur.currency_code})
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="qweqweqewqw">
                          {/* <Form.Select
                            className="me-2"
                            aria-label="Select currency"
                            value={selectedCurrency?.id || currency.find(c => c.choice === 1)?.id || ""}
                            onChange={(e) => {
                              const selectedObj = currency.find(c => c.id === parseInt(e.target.value));
                              setSelectedCurrency(selectedObj);
                            }}
                          >
                            {currency.map((allCurrency) => (
                              <option
                                key={allCurrency.id}
                                value={allCurrency.id}
                                selected={allCurrency.choice === 1}
                              >
                                {allCurrency.currency_type} ({allCurrency.currency_code})
                              </option>
                            ))}
                          </Form.Select> */}

                          <div className="custom-currency-dropdown sfwedweweeqweqwe position-relative">
                            <button
                                className="currency-toggle-btn d-flex align-items-center"
                                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                              >
                                <span className="me-2">
                                  <img
                                    src={selectedCurrency?.flag_icon || "https://flagcdn.com/24x18/in.png"}
                                    alt={selectedCurrency?.currency_code || "INR"}
                                    width="24"
                                    height="18"
                                  />
                                </span>

                                <span>{selectedCurrency?.currency_code || "INR"}</span>

                                <i
                                  className={`fa-solid ms-2 ${
                                    showCurrencyDropdown ? "fa-chevron-up" : "fa-chevron-down"
                                  }`}
                                ></i>
                              </button>

                            {showCurrencyDropdown && (
                              <div className="osjoidhwjiwer position-absolute bg-white shadow rounded-3 mt-2 p-2">
                                <div className="dmndfkswndfiofrsmk position-relative">
                                  <input type="text" placeholder="Search for a region" value={searchCurrency}
                                    onChange={(e) => setSearchCurrency(e.target.value)} className="form-control py-1" />
                                  <i
                                    className={`bi position-absolute ${searchCurrency.length > 0 ? "bi-x" : "bi-search"}`}
                                    style={{ right: "10px", top: "50%", transform: "translateY(-50%)", cursor: "pointer" }}
                                    onClick={() => {
                                      if (searchCurrency.length > 0) {
                                        setSearchCurrency("");   // Clear search when clicking cross
                                      }
                                    }}
                                  ></i>
                                </div>

                                <ul className="currency-menu mb-0 px-0">
                                  {filteredCurrency.map((cur) => (
                                    <li
                                      key={cur.id}
                                      className="currency-item d-flex align-items-center p-2"
                                      onClick={() => {
                                        setSelectedCurrency(cur);
                                        localStorage.setItem("selectedCurrency", JSON.stringify(cur));
                                        setShowCurrencyDropdown(false);
                                      }}
                                    >
                                      <span className="me-2">
                                        <img
                                          src={cur.flag_icon}
                                          alt={cur.currency_code}
                                          width="24"
                                          height="18"
                                        />
                                      </span>
                                      <span>
                                        {cur.currency_type} ({cur.currency_code})
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="doiwehrwehirnwerwer aosndkjnjhasekwewt row align-items-center">
                        <form onSubmit={handleSearch}>
                          <div className={`search-field ${searchBarToggle ? "" : "search-field-hide"} position-relative`}>
                            <input ref={searchRef} type="text" className="form-control rounded-pill ps-3" placeholder="Search for Pre-stitched saree" />

                            <i className="bi position-absolute bi-search" onClick={(e) => handleSearch(e)}></i>
                          </div>
                        </form>              
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="doewhruiwerwer_right sfeadeeerrrrr">
                        <Link to="/"><img src={Logo} className="img-fluid d-none" alt="" /></Link>

                        <ul className="mb-0 ps-0 d-flex justify-content-between align-items-center">
                          <li><Link to={`/contact-us`}><i class="bi bi-headset"></i> Help</Link></li>

                          <li className="infrm-menu-divider">|</li>
                          {/* {user ? (
                            <> */}
                             <li><Link to={`/wishlist`}><i class="bi bi-heart"></i> &nbsp;Wishlist <span>{wishlistCount}</span></Link></li>
                              <li className="infrm-menu-divider">|</li>
                              <li><Link to={`/cart`}><i class="bi bi-handbag"></i> Cart <span>{cartCount}</span></Link></li>
                            {/* </>
                          ):(
                            <>
                              <Link to={`/login`}><li><i class="bi bi-heart"></i> &nbsp;Wishlist <span>0</span></li></Link>
                              <li className="infrm-menu-divider">|</li>
                              <Link to={`/login`}><li><i class="bi bi-handbag"></i> Bag <span>0</span></li></Link>
                            </>
                          )} */}

                          <li className="infrm-menu-divider">|</li>

                            <li className="position-relative">
                            {user ? (
                              <>
                                <div className="gbdfgtrfyhrytgrr d-flex align-items-center" onClick={(e) => {e.stopPropagation(); setUserDropdown(!userDropdown)}}>
                                  <i className="bi bi-person"></i>
                                  
                                  <div className="mjeimojwjikrrr">{user.name}</div>

                                  <i class={`fa-solid sdfrrweewr_icon ${userDropdown ? "fa-caret-up" : "fa-caret-down"}`}></i>
                                </div>

                                {userDropdown && <DropdownLoggedIn />}
                              </>
                            ) : (
                              <Link to="/register">
                                <i className="bi bi-person"></i> Account
                              </Link>
                            )}
                          </li>     
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="doiwejirhwer">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <form className="dwejoijrwer d-none" onSubmit={handleResSearch}>
                          <div className="search-field position-relative">
                            <input ref={searchRefRes} type="text" className="form-control rounded-pill ps-3" placeholder="Search for Pre-stitched saree" />

                            <i className="bi position-absolute bi-search"></i>
                          </div>
                        </form>
                      </div>

                      <div className="col-4">
                        <div className="dowejojiweujrwer">
                          <div className="dwejiruhwejrwer">
                            <div className="doewhruiwerwer_right dfggweftewewrerr d-none">
                              <ul className="mb-0 ps-0 d-flex align-items-center">
                                <li><Link className="d-flex align-items-center" to={`/contact-us`}><i class="bi bi-headset"></i> Help</Link></li>

                                <li><Link to={`/wishlist`}><i class="bi bi-heart"></i> <span>{wishlistCount}</span></Link></li>
                                  
                                <li><Link to={`/cart`}><i class="bi bi-handbag"></i> <span>{cartCount}</span></Link></li>
                              </ul>
                            </div>
                          </div>                     
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ) }

              { !shouldHideHeader && (
                !shouldHideHeaderCategoryRoutes && (
                    <div className="header-main sfwedgwerwefrwerwer bg-white position-relative">       
                      <div className="header-main-wrapper">
                          {mainCategory?.map((category) => {

                            const bannerCat = mainCategory.find(
                              item => item.mainCategory_banner?.length > 0
                            );

                            return (
                              <SwiperSlide key={category.id}>
                                <NavLink to={`/${category.mainCategory_slug}`} end>
                                  {category.mainCategory_name}
                                </NavLink>

                                {category.head_categories.length > 0 && (
                                  <div className="header-mega-menu position-absolute w-100">
                                    <div className="h-m-m-inner bg-white py-2 mt-3">
                                      <div className="container-fluid">
                                        <div className="row">
                                          <div className="col-lg-5">
                                            <div className="ojkmiweee_left py-3">
                                              <div className="row">
                                                {category.head_categories?.map((headCat) => (
                                                  <div className="col-lg-4" key={headCat.id}>
                                                    <div className="oieniuiewr_inner">
                                                      <h5>{headCat.headCategories_name}</h5>
                                                      <ul className="mb-0 ps-0">
                                                        {headCat.sub_categories?.slice(0, 8).map((subCat) => (
                                                          <li key={subCat.id}>

                                                            {(
                                                              headCat.headCategories_name === 'IN-HOUSE DESIGNERS' || 
                                                              headCat.headCategories_name === 'TRENDING NOW' || 
                                                              headCat.headCategories_name === 'FEATURED'
                                                            ) ? (
                                                              <Link to={`${subCat.subCategories_url}`}>
                                                                {subCat.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}
                                                              </Link>
                                                            ) : (
                                                              <Link to={`/${category.mainCategory_slug}/${subCat.subCategories_slug}`}>
                                                                {subCat.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}
                                                              </Link>
                                                            )}

                                                            
                                                          </li> 
                                                          
                                                        ))}

                                                        {/* Show "View All" if more than 8 */}
                                                        {headCat.sub_categories?.length > 8 && (
                                                          <li>
                                                            <Link to={`/${category.mainCategory_slug}`}>
                                                              View All →
                                                            </Link>
                                                          </li>
                                                        )}
                                                      </ul>
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>

                                          <div className="col-lg-7">
                                            <div className="ojkmiweee_right">
                                              <div className="row">
                                                <div className="col-lg-7">
                                                  <div className="row">
                                                    <div className="col-lg-6">
                                                      <div className="vertical-image">
                                                        <div className="pkopkerrwer sfsdfweweweqwq text-center">
                                                          <img
                                                            src={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage_url}/${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage1}`}
                                                            className="w-100"
                                                            alt={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerTitle1}`}
                                                          />
                                                          <div className="dkewbjnrkwejrwer mt-2">
                                                            <a href={bannerCat?.mainCategory_banner?.[0]?.category_bannerTitle1}>SHOP NOW</a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                      <div className="vertical-image">
                                                        <div className="pkopkerrwer sfsdfweweweqwq text-center">
                                                          <img
                                                            src={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage_url}/${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage1}`}
                                                            className="w-100"
                                                            alt={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerTitle1}`}
                                                          />
                                                          <div className="dkewbjnrkwejrwer mt-2">
                                                            <a href={bannerCat?.mainCategory_banner?.[0]?.category_bannerTitle1}>SHOP NOW</a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>                                    

                                                <div className="col-lg-5">
                                                  <div className="pkopkerrwer safsrfwee text-center mb-4">
                                                    <Link to="/">
                                                      <img
                                                          src={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage_url}/${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage3}`}
                                                          className="w-100"
                                                          alt={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerTitle3}`}
                                                        />
                                                    </Link>
                                                  </div>

                                                  <div className="pkopkerrwer safsrfwee text-center mb-4">
                                                    <Link to="/">
                                                      <img
                                                        src={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage_url}/${bannerCat?.mainCategory_banner?.[0]?.category_bannerImage4}`}
                                                        className="w-100"
                                                        alt={`${bannerCat?.mainCategory_banner?.[0]?.category_bannerTitle4}`}
                                                      />
                                                    </Link>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </SwiperSlide>
                            );
                        })}  
                      </div>    
                    </div>
                  )
              ) }
            </div>
          </div>
        </header>
      ) }


      {/*res catgory menu modal*/}

      <div className={`${resMenu ? "res-ctgy-menu-backdrop d-none" : "res-ctgy-menu-backdrop d-none res-ctgy-menu-backdrop-hide"} position-fixed w-100 h-100`} onClick={() => setResMenu(false)}></div>

      <div className={`${resMenu ? "res-ctgy-menu-modal d-none" : "res-ctgy-menu-modal d-none res-ctgy-menu-modal-hide"} bg-white position-fixed h-100 p-3`}>
        <div className="d-flex align-items-center justify-content-between">
          

            {user ? (
              <>
                <Link to="/profile"><i class="bi me-1 bi-person"></i> {user.name}</Link>
              </>
            ) : (
              <>
                <ul className="d-flex align-items-center mb-0 ps-0">
                  <li><Link to="/register">SIGN UP</Link></li>
                  <li className="mx-2">|</li>
                  <li><Link to="/login">LOG IN</Link></li>
                </ul>
                <Link to="/login"><i class="bi me-1 bi-person"></i> My Account</Link>
              </>
            )}

        </div>

        <div className="cojeojewrer h-100 mt-4">
          {mainCategory?.map((category) => {

            const leftBanners = category.mainCategory_banner?.slice(0, 2);  // first 2 images
            const rightBanners = category.mainCategory_banner?.slice(2, 4); // next 2 images

          return (
            
            <div className="diuewhuirwere" key={category.id}>
              <div className="mnctgy d-flex align-items-center justify-content-between py-2 px-1">
                <Link to={`/${category.mainCategory_slug}`}>{category.mainCategory_name}</Link>
                {category.head_categories.length > 0 && (
                  <i
                    className={`bi ${resCtgyDrpdwn === category.id ? "bi-dash" : "bi-plus"}`}
                    onClick={() =>
                      setResCtgyDrpdwn(resCtgyDrpdwn === category.id ? null : category.id)
                    }
                  ></i>
                )}
              </div>

              {resCtgyDrpdwn === category.id && (
                <div className="dojiewjoejojowerwer">
                  <div className="header-mega-menu w-100">
                    <div className="h-m-m-inner bg-white py-2 mt-3">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="ojkmiweee_left py-3">
                              <div className="row">
                                {category.head_categories?.map((headCat) => (
                                  <div className="col-lg-4" key={headCat.id}>
                                    <div className="oieniuiewr_inner">
                                      <h5>{headCat.headCategories_name}</h5>
                                      <ul className="mb-0 ps-0">
                                        {headCat.sub_categories?.slice(0, 8).map((subCat) => (
                                          <li key={subCat.id}>
                                            {(
                                              headCat.headCategories_name === 'IN-HOUSE DESIGNERS' || 
                                              headCat.headCategories_name === 'TRENDING NOW' || 
                                              headCat.headCategories_name === 'FEATURED'
                                            ) ? (
                                              <Link to={`${subCat.subCategories_url}`}>
                                                {subCat.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}
                                              </Link>
                                            ) : (
                                              <Link to={`/${category.mainCategory_slug}/${subCat.subCategories_slug}`}>
                                                {subCat.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}
                                              </Link>
                                            )}
                                          </li>
                                        ))}

                                        {headCat.sub_categories?.length > 8 && (
                                          <li>
                                            <Link to={`/${category.mainCategory_slug}`}>
                                              View All →
                                            </Link>
                                          </li>
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="ojkmiweee_right">
                              <div className="row">
                                <div className="col-lg-7">
                                  <div className="row">
                                    {leftBanners?.map((b) => (
                                      <div className="col-lg-6" key={b.id}>
                                        <div className="pkopkerrwer text-center">
                                          <img
                                            src={`${b.category_bannerImage_url}/${b.category_bannerImage}`}
                                            className="w-100"
                                            alt=""
                                          />
                                          <div className="dkewbjnrkwejrwer mt-2">
                                            <a href={b.category_bannerURL}>SHOP NOW</a>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div className="col-lg-5">
                                  {rightBanners?.map((b, index) => (
                                    <div className="pkopkerrwer safsrfwee text-center mb-4" key={index}>
                                      <Link to={b.category_bannerURL}>
                                        <img
                                          src={`${b.category_bannerImage_url}/${b.category_bannerImage}`}
                                          className="w-100"
                                          alt=""
                                        />
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </>
  )
}