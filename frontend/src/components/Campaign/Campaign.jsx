import React from 'react'
import './campaign.css'
import CampaignItem from './CampaignItem'
const Campaign = () => {
  return (
    <section className="campaigns">
    <div className="container">
      <div className="campaigns-wrapper">
        <CampaignItem/>
        <CampaignItem/>
      </div>
      <div className="campaigns-wrapper">
      <CampaignItem/>
      <CampaignItem/>
      </div>
    </div>
  </section>
  )
}

export default Campaign