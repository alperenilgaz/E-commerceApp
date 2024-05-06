import React, { useEffect, useState } from 'react'
import './campaigns.css'
import { message } from 'antd'
const Campaigns = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [campaigns, setcampaigns] = useState([])

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/campaign`)
        if (response.ok) {
          const data = await response.json()
          setcampaigns(data)
        } else {
          message.error("Veri Getirme Hatası")
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCampaigns()
  }, [apiUrl])
  console.log(campaigns);
  return (
    <section className="campaign-single">
      <div className="container">
        <div className="campaign-wrapper">
          {
            campaigns.map(item => (
              <>
                <strong>{item.strong}</strong>
                <h2>{item.title}</h2>
                <span></span>
                <a href="#" className="btn btn-lg">
                  {item.shop}
                  <i className="bi bi-arrow-right"></i>
                </a>
              </>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Campaigns