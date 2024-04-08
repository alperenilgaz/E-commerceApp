import React from 'react'
import './policy.css'
const Policy = () => {
  return (
    <section className="policy">
    <div className="container">
      <ul className="policy-list">
        <li className="policy-item">
          <i className="bi bi-truck"></i>
          <div className="policy-texts">
            <strong>Ücretsiz Teslimat</strong>
            <span>15 TL'den başlayan fiyatlar</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-headset"></i>
          <div className="policy-texts">
            <strong>7/24 Destek</strong>
            <span>24 saat çevrimiçi</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-arrow-clockwise"></i>
          <div className="policy-texts">
            <strong> 30 Gün İçinde İade</strong>
            <span>30 gün içinde iade etmeniz yeterli</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-credit-card"></i>
          <div className="policy-texts">
            <strong>Ödeme Methodu</strong>
            <span>Güvenli Ödeme</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Policy