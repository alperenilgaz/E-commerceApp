import { render } from '@react-three/fiber';
import { Button, Popconfirm, Space, Table, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SliderPage = () => {
  const [dataSource, setdataSource] = useState([])
  const [loading, setloading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const navigate =useNavigate()
  const fetchSlider = useCallback(async () => {
    setloading(true)
    try {
      const response = await fetch(`${apiUrl}/api/slider`)
      if (response.ok) {
        const data = await response.json()
        setdataSource(data)
      } else {
        message.error("Veriler getirilirken bir hata oluştu")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false)
    }
  }, [apiUrl])

  useEffect(() => {
    fetchSlider()
  }, [fetchSlider])


  const columns = [
    {
      title: 'Resim',
      dataIndex: 'img',
      key: 'img',
      render: (imgSrc) => (
        <img src={imgSrc} width={200} height={150} />
      ),
    },
    {
      title: 'Oluşturulma Tarihi',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Düzenle',
      dataIndex: 'düzenle',
      key: 'düzenle',
      render: (_, record) => (
          <Button onClick={() => navigate(`/admin/slider/update/${record._id}`)} type="primary">
            Düzenle
          </Button>


      ),
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default SliderPage