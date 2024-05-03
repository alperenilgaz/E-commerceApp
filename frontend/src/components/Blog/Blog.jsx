import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import './blog.css'
import home from '../../../public/img/about-us/about-us1.png'
import { message } from 'antd';
import BlogItem from './BlogItem';

const Blog = () => {
  const [about, setAbout] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  useEffect(() => {
   const fetchAbout = async() => {
    try {
        const response = await fetch(`${apiUrl}/api/about`)
        if(response.ok){
          const data = await response.json()
          setAbout(data)
        }else{
          message.error("Veri getirme hatası")
        }
    } catch (error) {
      console.log(error)      
    }
   }
   fetchAbout()

  },[apiUrl])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextBtn/>,
    prevArrow: <PrevBtn/>,
  };

  function NextBtn({onClick}) {
    return(
      <button style={{zIndex:2}}  onClick={onClick} className="glide__arrow glide__arrow--right" data-glide-dir=">">
      <i className="bi bi-chevron-right"></i>
    </button>
    )
}
function PrevBtn({onClick}){
  return(
    <button  style={{zIndex:2}} onClick={onClick} className="glide__arrow glide__arrow--left" data-glide-dir="<">
          <i className="bi bi-chevron-left"></i>
        </button>
  )
}


  return (
    <section className="blogs">


<Slider {...settings}>
      {
        about.map(img => (
          <BlogItem img={img} key={img._id}/>
        ))
      }
      
    </Slider>
    <div className="description">
      <div className="header">
        <h1>DMG HOME</h1>
      </div>
      <div className="description">
        <p>Dinçer Mermer 1970 yılında Veli Dinçer tarafından kuruldu.1994 yılına kadar firmayı yöneten Veli Dinçer daha sonra firma yönetimini oğulları Ercan ve Abuzer Dinçer’e bıraktı.
44 yıla varan bir tecrübeye sahip olan firmamız mermer, granit, çimstone ve hazır mezar yapımında kendini geliştirerek bulunduğu il olan Erzincan ve civar illerede üretim yapmaktadır. Sektöründe emin adımlarla ilerlemekte olan Dinçer Mermer kaliteden ödün vermeden en iyi hizmeti sunmayı hedeflemektedir.</p>
        <br />
        <p>Dinçer Mermer süreçlerinin performansının ölçümünün sağlıklı veriler, doğru metod ve sistemlerle ölçülmesi ve sürekli iyileştirmeler için girdi sağlanması.
Çalışanların ve eko sistemdeki tüm unsurların iş sağlığı ve güvenliğinin sağlanması, çevresel farkındalığın çalışanlar nezdinde oluşturulması için bilgi seviyesi ve korumacı kültürün sürekli artırılması ve geliştirilmesi.
Dinçer Mermer çalışanlarının iş süreçlerine yeni fikirlerle destek olmalarının teşvik edilmesi ile müşterilerin beklentiler doğrultusunda yaratıcı ve yenilikçi ürün ve hizmetlerin geliştirilmesi.

Müşterilerin istek ve gereksinimlerine odaklı, memnuniyeti beklentilerin üzerinde tutan stratejik yönetim yaklaşımının sergilenmesi.
Dinçer Mermer, tedarikçileri ve ekosisteminde birlikte çalıştığı kuruluşlarla faydalı ilişkiler kurulması ve onlarla birlikte büyümenin sürdürülmesi.
Çevre duyarlılığın artırılması için çalışanların ve toplumun bilgi seviyesinin artırılması yönündeki faaliyetlerin yanı sıra çevreyi, insan sağlığını ve güvenliğini tehdit etmeyen uygulamaların kullanılması ve kullandırılması.
Bilgi güvenliği konusunda, güvenlik ihlal olaylarının en az indirilmesi için gerekli hassasiyetlerin gösterilmesi ve konuyla ilgili müşteri ihtiyaç ve beklentilerinin karşılanması.
Dinçer Mermer, müşteri şikayetlerinin çözümü ile ilgili olarak etkin, gerçekçi ve uygulanabilir çözümler sunulması için çalışır vemüşterinin haklarını korur. Tüm şikayetler kayıt altına alınarak, şikayet çözümü ile ilgili yapılan çalışmaların ardından elde edilen bulgular ve çözümler müşteri ile tam olarak paylaşılır.
Dinçer Mermer yönetimi, yukarıda belirtilen kalite politikası doğrultusunda müşteri memnuniyeti sağlamayı taahhüt eder.</p>
      </div>

    </div>
    </section>
  )
}

export default Blog