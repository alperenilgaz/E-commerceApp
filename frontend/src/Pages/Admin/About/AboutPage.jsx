import { Button, Popconfirm, Space, Table, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [dataSource, setdataSource] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const deleteAbout = async(aboutId) => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/about/${aboutId}`,{
                method:'DELETE'
            })
            if(response.ok){
                fetchAbout()
                message.error("Resim başarıyla silindi")
            }else{
                message.error("Resim silinme işlemi başarısız oldu")
            }
        } catch (error) {
            console.log("error")
        }finally{
            setLoading(false)
        }
    }

    const fetchAbout = useCallback( async() => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/about`)
            if(response.ok){
                const data = await response.json()
                setdataSource(data)
            }else{
                message.error("veriler getirilemedi")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    },[apiUrl])

    useEffect(() => {
        fetchAbout()
    },[fetchAbout])

    
      const columns = [
        {
          title: 'Resim',
          dataIndex:'img',
          key:'img',
          render: (imgSrc) => (
            <img src={imgSrc} width={100} />
        )
        },
        {
            title: 'Oluşturulma Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title:"Sil",
            dataIndex: 'sil',
            key: "sil",
            render:(_,record) => (
            <Space size={"middle"}>
                <Button onClick={() => navigate(`/admin/about/update/${record._id}`)} type='primary'>
                    Düzenle
                </Button>
                <Popconfirm
                    title="Resimi Sil"
                    description="Resmi silmek istediğinden emin misin?"
                    okText="Evet"
                    cancelText="Hayır" 
                    onConfirm={() => deleteAbout(record._id)}
                >
                    <Button danger>Sil</Button>

                </Popconfirm>
            </Space>
                
            )
        }
        
      ];
  return (
    <Table loading={loading} dataSource={dataSource} columns={columns} />
  )
}

export default AboutPage