import { useState } from "react";
import { useFilter } from "../../context/FilterContext";

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function FilterSection({ setResFltrMenu, allFilterMappingdata, filterCategories }) {
  const { mainCategory, setMainCategory, subCategory, setSubCategory, filterCtgry, setFilterCategory, setColor, material, setMaterial, designer, setDesigner, plusSize, setPlusSize, occasion, setOccasion, size, setSize, resetFilter } = useFilter();
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


  return (
    <>
      <div className="iushifjsdfsd">
        <div className="dkewjriwehrnjhweijrwer mb-4">
          <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
            <h5 className="mb-0">Categories</h5>

            <i className="bi bi-chevron-down"></i>
          </div>

          <div className="deowjnkrwere bdfgsdfseewewrr">
            {filterCategories.map(filterCategory => (
              <div key={filterCategory.id} className="doewjkrnhweiurwer mb-2">
                {filterCategory.sub_categories.length > 0 && (
                  <div className="duiwehijnwerwer">
                    <div class="main-catgry-filter pe-3">
                      <div className="radio-wrapper-5">
                        <div className="oijdmeiojewrer d-flex justify-content-between w-100 align-items-center">
                          <div className="doiwejirwer d-flex align-items-center">
                            <label htmlFor={`mnctgry-${filterCategory.id}`} className="forCircle">
                              <input checked={mainCategory === filterCategory.mainCategory_name} onChange={() => setMainCategory(filterCategory.mainCategory_name)} value={filterCategory.mainCategory_name} id={`mnctgry-${filterCategory.id}`} type="radio" name="dasfe" />

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

                            <label htmlFor={`mnctgry-${filterCategory.id}`}>{filterCategory.mainCategory_name}</label>
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
                                  <label htmlFor={`sbctgry-${sub_category.id}`} className="forCircle">
                                    <input checked={subCategory === sub_category.subCategories_name} onChange={() => setSubCategory(filterCategory.mainCategory_name, sub_category.subCategories_name)} value={sub_category.subCategories_name} id={`sbctgry-${sub_category.id}`} type="radio" name="cvseweer" />

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
                                  

                                  <label htmlFor={`sbctgry-${sub_category.id}`}>{sub_category.subCategories_name.replace(/\s*\(Boys\)|\s*\(Girls\)/gi, "")}</label>
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
                                        <label htmlFor={`insd-sb-ctgry-${filter_category.id}`} className="forCircle">
                                          <input checked={filterCtgry === filter_category.filterCategories_name} onChange={() => setFilterCategory(filterCategory.mainCategory_name, sub_category.subCategories_name, filter_category.filterCategories_name)} value={filter_category.filterCategories_name} id={`insd-sb-ctgry-${filter_category.id}`} type="radio" name="erqewee" />

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

                                        <label htmlFor={`insd-sb-ctgry-${filter_category.id}`}>{filter_category.filterCategories_name}</label>
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
            <div className="disenihrenjr mb-3 py-4 d-flex align-items-center justify-content-between">
              <h5 className="mb-0">{toTitleCase(FilterMappingdata.filter_option)}</h5>
              <i className="bi bi-chevron-down"></i>
            </div>

            <div className="doewjkrnhweiurwer">
              {FilterMappingdata.filter_option.toLowerCase() === "color" ? (
                FilterMappingdata.colors?.map((colorObj, index) => {
                  const colorValue = colorObj.color_name;
                  const colorCode = colorObj.color_code;

                  return (
                  <div className="doewjkrnhweiurwer clor-fltr-optn osdmcfosjrserr sdfvgdfvrgrert">
                      <div id="content">
                          <label key={index} htmlFor={colorValue} className={`${(selectedTheme === colorCode) ? "clr-label" : ""} me-3 px-2 py-1`}>
                            <input
                                type="radio"
                                name={FilterMappingdata.filter_option}
                                id={colorValue}
                                className="colored-radio"
                                data-color={colorValue}
                                checked={selectedTheme === colorCode}
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
                      <label htmlFor={`${dvbfbxdfbg}-${indexdsvd}`} className="forCircle">
                          <input
                          id={`${dvbfbxdfbg}-${indexdsvd}`}
                          type="radio"
                          name={FilterMappingdata.filter_option}
                          onChange={() => handleSelect(FilterMappingdata.filter_option, item.trim())}
                          checked={
                            (FilterMappingdata.filter_option.toLowerCase() === "material" && material === item.trim()) ||
                            (FilterMappingdata.filter_option.toLowerCase() === "designers" && designer === item.trim()) ||
                            (FilterMappingdata.filter_option.toLowerCase() === "plus_sizes" && plusSize === item.trim()) ||
                            (FilterMappingdata.filter_option.toLowerCase() === "occasion" && occasion === item.trim()) ||
                            (FilterMappingdata.filter_option.toLowerCase() === "size" && size === item.trim())
                          }
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

                      <label htmlFor={`${dvbfbxdfbg}-${indexdsvd}`}>{item.trim()}</label>
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
                                        <input checked={mainCategory === filterCategory.mainCategory_name} onChange={() => setMainCategory(filterCategory.mainCategory_name)} value={filterCategory.mainCategory_name} id={`dwerrr-${filterCategory.id}`} type="radio" name="sadwee" />

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
                                              <input checked={subCategory === sub_category.subCategories_name} onChange={() => setSubCategory(filterCategory.mainCategory_name, sub_category.subCategories_name)} value={sub_category.subCategories_name} id={`sdqwdwee-${sub_category.id}`} type="radio" name="wqeqweqe" />

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
                                                    <input checked={filterCtgry === filter_category.filterCategories_name} onChange={() => setFilterCategory(filterCategory.mainCategory_name, sub_category.subCategories_name, filter_category.filterCategories_name)} value={filter_category.filterCategories_name} id={`vbhytgretre-${filter_category.id}`} type="radio" name="aweqeqwe" />

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
                                          checked={selectedTheme === colorCode}
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
                                    checked={
                                      (FilterMappingdata.filter_option.toLowerCase() === "material" && material === item.trim()) ||
                                      (FilterMappingdata.filter_option.toLowerCase() === "designers" && designer === item.trim()) ||
                                      (FilterMappingdata.filter_option.toLowerCase() === "plus_sizes" && plusSize === item.trim()) ||
                                      (FilterMappingdata.filter_option.toLowerCase() === "occasion" && occasion === item.trim()) ||
                                      (FilterMappingdata.filter_option.toLowerCase() === "size" && size === item.trim())
                                    }
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
