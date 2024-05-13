import { Button, Popconfirm, Space, Table, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const BrandPage = () => {
  const [dataSource, setdataSource] = useState([])
  const [loading, setLoading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const navigate = useNavigate()
  // fetch Brands 
  const fetchBrands = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/brands`)
      if (response.ok) {
        const data = await response.json()
        setdataSource(data)
      } else {
        message.error("Server Hatası Markalar getirilemedi")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, [apiUrl])
  useEffect(() => {
    fetchBrands()
  }, [fetchBrands])

  // delete brands
  const deleteBrands = async(brandId) => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/brands/${brandId}`,{
        method:"DELETE"
      })
      if(response.ok){
        fetchBrands()
        message.success("Marka başarıyla silindi")
      }else{
        message.error("Marka silme işlemi başarısız oldu!")
      }
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  const columns = [
    {
      title: 'Resim',
      dataIndex: 'img',
      key: 'img',
      render: (imgSrc) => (
        <img src={imgSrc} width={100} />
      )
    },
    {
      title: 'Marka ismi',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <i><b>{text}</b></i>
      )
    },
    {
      title: 'Oluşturulma Tarihi',
      dataIndex: 'createdAt',
      key: 'createdAt',

    },
    {
      title: 'Aksiyonlar',
      dataIndex: 'sil',
      key: 'sil',
      render: (_, record) => (
        <Space size={"middle"}>
          <Button onClick={()=> navigate(`/admin/brands/update/${record._id}`)} type='primary'>
            Düzenle
          </Button>
          <Popconfirm
            title="Marka sil"
            description="Markayı silmek istediğinden emin misin?"
            okText="Evet"
            cancelText="Hayır"
            onConfirm={() => deleteBrands(record._id)}
          >
            <Button danger>Sil</Button>
          </Popconfirm>
        </Space>

      )
    },
  ];

  return (
    <Table loading={loading} dataSource={dataSource} columns={columns} />
  )
}

export default BrandPage