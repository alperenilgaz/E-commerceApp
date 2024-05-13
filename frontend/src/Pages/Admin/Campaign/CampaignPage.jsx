import { Button, Table, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const CampaignPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [dataSource, setdataSource] = useState([])
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()


    const fetchCampaing = useCallback(async () => {
        setloading(true)
        try {
            const response = await fetch(`${apiUrl}/api/campaign`)
            if(response.ok){
                const data = await response.json()
                setdataSource(data)

            }else{
                message.error("Server Hatası Markalar getirilemedi")
            }
        } catch (error) {
            console.log(error);
        }finally{
            setloading(false)
        }
    },[apiUrl])

    useEffect(() => {
      fetchCampaing()
    }, [fetchCampaing])
    
      const columns = [
        {
          title: 'Resim',
          dataIndex: 'img',
          key: 'img',
          render:(imgSrc => (
            <img src={imgSrc} width={200}/>
          ))
        },
        {
          title: 'Başlık',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Kampanya İçeriği',
          dataIndex: 'strong',
          key: 'strong',
        },
        {
          title: 'Yönlendirme',
          dataIndex: 'shop',
          key: 'shop',
        },
        {
          title: 'Oluşturulma Tarihi',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Aksiyonlar',
          dataIndex: 'düzenle',
          key: 'düzenle',
          render:(_,record) => (
            <Button onClick={() => navigate(`/admin/campaign/update/${record._id}`)} type='primary'>
                Düzenle
            </Button>
          )
        },
      ];
      

  return (
    <Table loading={loading} dataSource={dataSource} columns={columns} />
  )
}

export default CampaignPage