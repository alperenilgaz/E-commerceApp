import React, { useState } from 'react'
import './productTabs.css'
import Reviews from '../../Reviews/Reviews'
const ProductTabs = () => {
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
                <div className={`tab-panel-descriptions content ${active === "desc" && 'active'}`} id="desc">
                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui
                        finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat
                        ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
                        nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia.
                        Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                        vel, dignissim a tortor.</p>
                    <br />
                    <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui
                        finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat
                        ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales
                        nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia.
                        Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare
                        vel, dignissim a tortor.</p>
                </div>
                <div className={`tab-panel-information content ${active === "info" && 'active'}`} id="info">
                    <h3>Additional information</h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Color</th>
                                <td>
                                    <p>
                                        Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black, White</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Size</th>
                                <td>
                                    <p>
                                        XXS, XS, S, M, L, XL, XXL</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Reviews active={active==="reviews" ? "content active" : "content"} />
            </div>
        </div>
    )
}

export default ProductTabs