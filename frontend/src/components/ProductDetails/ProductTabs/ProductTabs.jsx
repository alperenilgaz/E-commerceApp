import React, { useState } from 'react'
import './productTabs.css'
import Reviews from '../../Reviews/Reviews'
const ProductTabs = ({singleProduct,setSingleProduct}) => {
    const [active, setactive] = useState("desc")
    const HandleTabsClick = (e,tabs) => {
        e.preventDefault()
        setactive(tabs)
    }
    
    return (
        <div className="single-tabs">
            <ul className="tab-list">
                <li>
                    <a onClick={(e) => HandleTabsClick(e,"desc")} href="#" className={`tab-button ${active === "desc" && "active"}`} >
                        Description
                    </a>
                </li>
                <li>
                    <a onClick={(e) => HandleTabsClick(e,"info")} href="#" className={`tab-button ${active === "info" && "active"}`}>
                        Additional information
                    </a>
                </li>
                <li>
                    <a onClick={(e)=> HandleTabsClick(e,"reviews")} href="#" className={`tab-button ${active === "reviews" && "active"}`}>
                        Reviews
                    </a>
                </li>
            </ul>
            <div className="tab-panel">
                <div dangerouslySetInnerHTML={{__html:singleProduct.description}} className={`tab-panel-descriptions content ${active === "desc" && 'active'}`} id="desc">
                    
                </div>
                <div className={`tab-panel-information content ${active === "info" && 'active'}`} id="info">
                    <h3>Additional information</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Color</th>
                                <td>
                                    <p>
                                {singleProduct.colors.map((color,key) => (
                                        <span key={key}>{color}
                                         {key < singleProduct.sizes.length-1 && ", "}
                                         </span> 
                                        ))}                            
                                   </p>
                                </td>
                            </tr>
                            <tr>
                                <th>Size</th>
                                <td>
                                    <p>
                                        {singleProduct.sizes.map((size,key) => (
                                            <span key={key}>{size}
                                            {key < singleProduct.sizes.length-1 && ", "}
                                            </span>
                                            ))}
                                    </p>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Reviews setSingleProduct={setSingleProduct} singleProduct={singleProduct} active={active==="reviews" ? "content active" : "content"} />
            </div>
        </div>
    )
}

export default ProductTabs