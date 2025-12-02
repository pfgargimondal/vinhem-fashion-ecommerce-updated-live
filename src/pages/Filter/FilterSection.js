import { useState } from "react";
import { useFilter } from "../../context/FilterContext";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function FilterSection({ setResFltrMenu, allFilterMappingdata, filterCategories }) {
  const { setMainCategory, setSubCategory, setFilterCategory, setColor, setMaterial, setDesigner, setPlusSize, setOccasion, setSize, resetFilter } = useFilter();
  const [selectedTheme, setSelectedTheme] = useState("");
  const [sbctgry, setSbctgry] = useState(null);
  const [insdSbctgry, setInsdSbctgry] = useState(null);
  

  const toTitleCase = (str = "") =>
  str
    .replace(/[-_]/g, " ") // remove underscores/hyphens
    .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  const handleSelect = (filterType, value) => {
    switch (filterType.toLowerCase()) {
      case "color":
        setColor(value);
        break;
      
      case "material":
        setMaterial(value);
        break;       

      case "designers":
        setDesigner(value);
        break;

      case "plus_sizes":
        setPlusSize(value);
        break;

      case "occasion":
        setOccasion(value);
        break;

      case "size":
        setSize(value);
        break;

      default:
        break;
    }
  }

  const handleSbctgry = (id) => {
    setSbctgry(prevId => (prevId === id ? null : id));
  }

  const handleInSbctgry = (id) => {
    setInsdSbctgry(prevSbCtgry => (prevSbCtgry === id ? null : id));
  }

  const handleResponsiveClearFilter = () => {
    resetFilter();

    setResFltrMenu(false);
  }

  const [minPrice, setMinPrice] = useState(2500);
  const [maxPrice, setMaxPrice] = useState(6000);

  const [minInput, setMinInput] = useState("2500");
  const [maxInput, setMaxInput] = useState("6000");
  
  const priceGap = 500;
  const maxRange = 1000000;

  const handleMinInput = (e) => {
    setMinInput(e.target.value);
  };

  const handleMaxInput = (e) => {
    setMaxInput(e.target.value); // allows free typing
  };

  const handleMinBlur = () => {
    let value = Number(minInput);

    if (!value || value < 0) value = 0;
    if (value > maxPrice - priceGap) value = maxPrice - priceGap;

    setMinPrice(value);
    setMinInput(String(value));
  };

  const handleMaxBlur = () => {
    let value = Number(maxInput);

    if (!value) value = minPrice + priceGap;
    if (value > maxRange) value = maxRange;
    if (value < minPrice + priceGap) value = minPrice + priceGap;

    setMaxPrice(value);
    setMaxInput(String(value));
  };

  const handleMinRange = (e) => {
    const value = Number(e.target.value);

    if (maxPrice - value >= priceGap) {
      setMinPrice(value);
      setMinInput(String(value));
    }
  };

  const handleMaxRange = (e) => {
    const value = Number(e.target.value);

    if (value - minPrice >= priceGap) {
      setMaxPrice(value);
      setMaxInput(String(value));
    }
  };

  const handleMinEnter = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };

  const handleMaxEnter = (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  };


  return (
    <>
      <div className="iushifjsdfsd">
        <div className="dkewjriwehrnjhweijrwer mb-4">
          <div className="disenihrenjr mb-3 pt-4 pb-3 d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Price</h5>

            <i className="bi bi-chevron-down"></i>
          </div>

          <div className="dohwekrjiwejr">
            <div className="wrapper">
              <div className="price-input">
                <div className="field">
                  <span>Min</span>

                  <input
                    type="number"
                    value={minInput}
                    onChange={handleMinInput}
                    onBlur={handleMinBlur}
                    onKeyDown={handleMinEnter}
                  />
                </div>

                <div className="separator">-</div>

                <div className="field">
                  <span>Max</span>

                  <input
                    type="number"
                    value={maxInput}
                    onChange={handleMaxInput}
                    onBlur={handleMaxBlur}
                    onKeyDown={handleMaxEnter}
                  />
                </div>
              </div>

              <div className="slider">
                <div className="progress" style={{left: `${(minPrice / maxRange) * 100}%`, right: `${100 - (maxPrice / maxRange) * 100}%`}}></div>
              </div>

              <div className="range-input">
                <input
                  type="range"
                  className="range-min"
                  min="0"
                  max={maxRange}
                  step="100"
                  value={minPrice}
                  onChange={handleMinRange}
                />
                <input
                  type="range"
                  className="range-max"
                  min="0"
                  max={maxRange}
                  step="100"
                  value={maxPrice}
                  onChange={handleMaxRange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="dkewjriwehrnjhweijrwer mb-4">
          <div className="disenihrenjr mb-3 pt-4 pb-3 d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Categories</h5>

            <i className="bi bi-chevron-down"></i>
          </div>

          <div className="deowjnkrwere bdfgsdfseewewrr">
            {filterCategories.map(filterCategory => (
              <div key={filterCategory.id} className="doewjkrnhweiurwer mb-3">
                {filterCategory.sub_categories.length > 0 && (
                  <div className="duiwehijnwerwer">
                    <div class="main-catgry-filter px-2">
                      <div className="radio-wrapper-5">
                        <div className="oijdmeiojewrer d-flex justify-content-between w-100 align-items-center">
                          <div className="doiwejirwer d-flex align-items-center">
                            <div className="cdwehjirnweijrowejrowejr">
                              <div className="checkbox-wrapper-33">
                                <label htmlFor={`mnctgry-${filterCategory.id}`} className="checkbox">
                                  <input id={`mnctgry-${filterCategory.id}`} onChange={() => setMainCategory(filterCategory.mainCategory_name)} value={filterCategory.mainCategory_name} className="checkbox__trigger visuallyhidden" type="checkbox" />
                                  
                                  <span className="checkbox__symbol">
                                    <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4 14l8 7L24 7"></path>
                                    </svg>
                                  </span>
                                  
                                  <p className="checkbox__textwrapper">{filterCategory.mainCategory_name}</p>
                                </label>
                              </div>
                            </div>
                          </div>

                          {filterCategory.sub_categories.length > 0 && (
                            <i onClick={() => handleSbctgry(filterCategory.id)} class={`fa-solid ${(sbctgry === filterCategory.id) ? "fa-minus" : "fa-plus"}`}></i>
                          )}                  
                        </div>
                      </div> 

                      {sbctgry === filterCategory.id && (
                        <div className="sub-catgry-filter indiewjrwerewr">
                          {filterCategory.sub_categories.map(sub_category => (
                            <div className="doewjroijwerwer mb-3">
                              <div key={sub_category.id} class="radio-wrapper-5 ps-3 justify-content-between align-items-center">
                                <div className="doiwejirwer d-flex align-items-center">
                                  <div className="cdwehjirnweijrowejrowejr">
                                    <div className="checkbox-wrapper-33">
                                      <label htmlFor={`sbctgry-${sub_category.id}`} className="checkbox">
                                        <input id={`sbctgry-${sub_category.id}`} onChange={() => setSubCategory(filterCategory.mainCategory_name, sub_category.subCategories_name)} value={sub_category.subCategories_name} className="checkbox__trigger visuallyhidden" type="checkbox" />
                                        
                                        <span className="checkbox__symbol">
                                          <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 14l8 7L24 7"></path>
                                          </svg>
                                        </span>
                                        
                                        <p className="checkbox__textwrapper">{sub_category.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}</p>
                                      </label>
                                    </div>
                                  </div>
                                </div>

                                {sub_category.filter_categories.length > 0 && (
                                  <div className="oijdmeiojewrer">
                                    <i onClick={() => handleInSbctgry(sub_category.id)} class={`fa-solid ${(insdSbctgry === sub_category.id) ? "fa-minus" : "fa-plus"}`}></i>
                                  </div>
                                )}                        
                              </div>

                              {insdSbctgry === sub_category.id && (
                                <div className="inside-sub-catgry-filter ps-3">
                                  {sub_category.filter_categories.map(filter_category => (
                                    <div key={filter_category.id} class="radio-wrapper-5 ps-3 mb-3 justify-content-between align-items-center">
                                      <div className="doiwejirwer d-flex align-items-center">
                                        <div className="cdwehjirnweijrowejrowejr">
                                          <div className="checkbox-wrapper-33">
                                            <label htmlFor={`insd-sb-ctgry-${filter_category.id}`} className="checkbox">
                                              <input onChange={() => setFilterCategory(filterCategory.mainCategory_name, sub_category.subCategories_name, filter_category.filterCategories_name)} value={filter_category.filterCategories_name} id={`insd-sb-ctgry-${filter_category.id}`} className="checkbox__trigger visuallyhidden" type="checkbox" />
                                              
                                              <span className="checkbox__symbol">
                                                <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M4 14l8 7L24 7"></path>
                                                </svg>
                                              </span>
                                              
                                              <p className="checkbox__textwrapper">{filter_category.filterCategories_name}</p>
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}                      
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}                   
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {allFilterMappingdata?.map((FilterMappingdata, dvbfbxdfbg) => (
          <div key={FilterMappingdata.id} className="dkewjriwehrnjhweijrwer mb-4">
            <div className="disenihrenjr mb-3 pb-3 d-flex align-items-center justify-content-between">
              <h5 className="mb-0">{toTitleCase(FilterMappingdata.filter_option)}</h5>
              <i className="bi bi-chevron-down"></i>
            </div>

            <div className="doewjkrnhweiurwer bdfgsdfseewewrr">
              {FilterMappingdata.filter_option.toLowerCase() === "color" ? (
                FilterMappingdata.colors?.map((colorObj, index) => {
                  const colorValue = colorObj.color_name;
                  const colorCode = colorObj.color_code;

                  return (
                    <div className="doewjkrnhweiurwer clor-fltr-optn">
                      <div key={index} className="cdwehjirnweijrowejrowejr">
                        <div className="checkbox-wrapper-33">
                          <label htmlFor={colorValue} className={`checkbox ${(selectedTheme === colorCode) ? "clr-label" : ""} mb-2 px-2 py-1`}>
                            <input onChange={() => {setSelectedTheme(colorCode); handleSelect("color", colorValue)}} 
                              data-color={colorValue}                                     
                              id={colorValue} 
                              name={FilterMappingdata.filter_option} 
                              className="checkbox__trigger visuallyhidden" 
                              type="checkbox" />
                            
                            <span className="checkbox__symbol">
                              <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 14l8 7L24 7"></path>
                              </svg>
                            </span>

                            <div className="dijwehirwer rounded-pill me-2" style={{background: colorCode, border: "1px solid #b0bec5"}}></div>
                            
                            <p className="checkbox__textwrapper">{colorValue}</p>
                          </label>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                FilterMappingdata.filter_values.split(",").map((item, indexdsvd) => (
                  <div key={`${dvbfbxdfbg}-${indexdsvd}`} class="radio-wrapper-5 px-2 mb-3">
                    <div className="cdwehjirnweijrowejrowejr">
                      <div className="checkbox-wrapper-33">
                        <label htmlFor={`${dvbfbxdfbg}-${indexdsvd}`} className="checkbox">
                          <input
                            id={`${dvbfbxdfbg}-${indexdsvd}`}
                            name={FilterMappingdata.filter_option}
                            onChange={() => handleSelect(FilterMappingdata.filter_option, item.trim())}                            
                            className="checkbox__trigger visuallyhidden" type="checkbox" />
                          
                          <span className="checkbox__symbol">
                            <svg aria-hidden="true" className="icon-checkbox" width="28px" height="28px" viewBox="0 0 28 28" version="1" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 14l8 7L24 7"></path>
                            </svg>
                          </span>
                          
                          <p className="checkbox__textwrapper">{item.trim()}</p>
                        </label>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>

      {/*res filter options*/}

      <div className="dweihruiwehrjnwer d-none">
        <div className="idjweihewr">
          <Tab.Container id="left-tabs-example" defaultActiveKey="resfilter-categories">
            <Row className="h-100">
              <Col xs={4}>
                <Nav variant="pills" className="dfgefsertttt sticky-top flex-column h-100">
                  <Nav.Item>
                    <Nav.Link eventKey="resfilter-categories">
                      <div className="disenihrenjr">
                        <p className="mb-0">Categories</p>
                      </div>
                    </Nav.Link>
                  </Nav.Item>

                  {allFilterMappingdata?.map((FilterMappingdata) => (
                    <Nav.Item key={FilterMappingdata.id}>
                      <Nav.Link eventKey={`resfilter-${FilterMappingdata.filter_option}`}>
                        <div className="disenihrenjr">
                          <p className="mb-0">{toTitleCase(FilterMappingdata.filter_option)}</p>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>

              <Col xs={8}>
                <Tab.Content className="pt-4">
                  <Tab.Pane className="h-100" eventKey="resfilter-categories">
                    <div className="deowjnkrwere bdfgsdfseewewrr">
                      {filterCategories.map(filterCategory => (
                        <div key={filterCategory.id} className="doewjkrnhweiurwer mb-2">
                          {filterCategory.sub_categories.length > 0 && (
                            <div className="duiwehijnwerwer">
                              <div class="main-catgry-filter pe-3">
                                <div className="radio-wrapper-5">
                                  <div className="oijdmeiojewrer d-flex justify-content-between w-100 align-items-center">
                                    <div className="doiwejirwer d-flex align-items-center">
                                      <label htmlFor={`dwerrr-${filterCategory.id}`} className="forCircle">
                                        <input onChange={() => setMainCategory(filterCategory.mainCategory_name)} value={filterCategory.mainCategory_name} id={`dwerrr-${filterCategory.id}`} type="radio" name="sadwee" />

                                        <span>
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="h-3.5 w-3.5"
                                              viewBox="0 0 16 16"
                                              fill="currentColor"
                                          >
                                            <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                          </svg>
                                        </span>
                                      </label>

                                      <label htmlFor={`dwerrr-${filterCategory.id}`}>{filterCategory.mainCategory_name}</label>
                                    </div>

                                    {filterCategory.sub_categories.length > 0 && (
                                      <i onClick={() => handleSbctgry(filterCategory.id)} class={`fa-solid ${(sbctgry === filterCategory.id) ? "fa-minus" : "fa-plus"}`}></i>
                                    )}                  
                                  </div>
                                </div> 

                                {sbctgry === filterCategory.id && (
                                  <div className="sub-catgry-filter indiewjrwerewr">
                                    {filterCategory.sub_categories.map(sub_category => (
                                      <div className="doewjroijwerwer">
                                        <div key={sub_category.id} class="radio-wrapper-5 ps-3 justify-content-between align-items-center">
                                          <div className="doiwejirwer d-flex align-items-center">
                                            <label htmlFor={`sdqwdwee-${sub_category.id}`} className="forCircle">
                                              <input onChange={() => setSubCategory(filterCategory.mainCategory_name, sub_category.subCategories_name)} value={sub_category.subCategories_name} id={`sdqwdwee-${sub_category.id}`} type="radio" name="wqeqweqe" />

                                              <span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-3.5 w-3.5"
                                                    viewBox="0 0 16 16"
                                                    fill="currentColor"
                                                >
                                                    <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                                </svg>
                                              </span>
                                            </label>
                                            

                                            <label htmlFor={`sdqwdwee-${sub_category.id}`}>{sub_category.subCategories_name}</label>
                                          </div>

                                          {sub_category.filter_categories.length > 0 && (
                                            <div className="oijdmeiojewrer">
                                              <i onClick={() => handleInSbctgry(sub_category.id)} class={`fa-solid ${(insdSbctgry === sub_category.id) ? "fa-minus" : "fa-plus"}`}></i>
                                            </div>
                                          )}                        
                                        </div>

                                        {insdSbctgry === sub_category.id && (
                                          <div className="inside-sub-catgry-filter ps-2">
                                            {sub_category.filter_categories.map(filter_category => (
                                              <div key={filter_category.id} class="radio-wrapper-5 ps-4 justify-content-between align-items-center">
                                                <div className="doiwejirwer d-flex align-items-center">
                                                  <label htmlFor={`vbhytgretre-${filter_category.id}`} className="forCircle">
                                                    <input onChange={() => setFilterCategory(filterCategory.mainCategory_name, sub_category.subCategories_name, filter_category.filterCategories_name)} value={filter_category.filterCategories_name} id={`vbhytgretre-${filter_category.id}`} type="radio" name="aweqeqwe" />

                                                    <span>
                                                      <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          className="h-3.5 w-3.5"
                                                          viewBox="0 0 16 16"
                                                          fill="currentColor"
                                                      >
                                                          <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                                      </svg>
                                                    </span>
                                                  </label>

                                                  <label htmlFor={`vbhytgretre-${filter_category.id}`}>{filter_category.filterCategories_name}</label>
                                                </div>
                                              </div>
                                            ))}                      
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                )}                   
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>

                  {allFilterMappingdata?.map((FilterMappingdata, dvbfbxdfbg) => (
                    <Tab.Pane eventKey={`resfilter-${FilterMappingdata.filter_option}`}>
                      <div className="doewjkrnhweiurwer">
                        {FilterMappingdata.filter_option.toLowerCase() === "color" ? (
                          FilterMappingdata.colors?.map((colorObj, index) => {
                            const colorValue = colorObj.color_name;
                            const colorCode = colorObj.color_code;

                            return (
                            <div className="doewjkrnhweiurwer clor-fltr-optn osdmcfosjrserr sdfvgdfvrgrert">
                                <div id="content">
                                    <label key={index} htmlFor={`dweqeqee-${colorValue}`} className={`${(selectedTheme === colorCode) ? "clr-label" : ""} me-3 px-2 py-1`}>
                                      <input
                                          type="radio"
                                          name={`djehw-${FilterMappingdata.filter_option}`}
                                          id={`dweqeqee-${colorValue}`}
                                          className="colored-radio"
                                          data-color={colorValue}
                                          onChange={() => {
                                            setSelectedTheme(colorCode);
                                            handleSelect("color", colorValue);
                                          }}
                                          style={{
                                              backgroundColor: colorCode,
                                              border: `1px solid #b0bec5;`,
                                              width: "30px",
                                              height: "30px",
                                              borderRadius: "50%",
                                              cursor: "pointer",
                                          }}
                                      />

                                      <span>{colorValue}</span>
                                    </label>
                                </div>
                            </div>
                            );
                          })
                        ) : (
                          FilterMappingdata.filter_values.split(",").map((item, indexdsvd) => (
                            <div key={`${dvbfbxdfbg}-${indexdsvd}`} class="radio-wrapper-5">
                                <label htmlFor={`asdedeqewqee-${`${dvbfbxdfbg}-${indexdsvd}`}`} className="forCircle">
                                    <input
                                    id={`asdedeqewqee-${`${dvbfbxdfbg}-${indexdsvd}`}`}
                                    type="radio"
                                    name={`djehw-${FilterMappingdata.filter_option}`}
                                    onChange={() => handleSelect(FilterMappingdata.filter_option, item.trim())}
                                    />
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                    >
                                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                                    </svg>
                                    </span>
                                </label>

                                <label htmlFor={`asdedeqewqee-${`${dvbfbxdfbg}-${indexdsvd}`}`}>{item.trim()}</label>
                            </div>
                          ))
                        )}
                      </div>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>

        <div className="doihweuijewrr">
          <button onClick={handleResponsiveClearFilter} className="btn btn-main w-100 rounded-0">CLEAR ALL</button>
        </div>
      </div>
    </>
  );
}
