import React, { useCallback, useEffect, useState } from 'react'
import {Button, Popconfirm, Table, message} from 'antd'
const UserPage = () => {
  const [dataSource, setdataSource] = useState([])
  const [loading, setLoading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  

  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render : (imgSrc) => (
        <img src={imgSrc} style={{width:"50px",height:"50px",borderRadius:"50%"}} />
      )
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    }, 
    {
      title: 'Sil',
      dataIndex: 'sil',
      key: 'sil',
      render:(_,record) => (
        <Popconfirm
        title="Kullanıcıyı Sil"
        description="Kullanıcıyı silmek istediğinizden emin misin?"
        okText="Evet"
        cancelText="Hayır"
        onConfirm={() => deleteUsers(record.email)}
      >
        <Button type='primary' danger>Sil</Button>
      </Popconfirm>
      )
    } 
  
  ];
  const fetchUser =useCallback( async() => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/users`)
    
      if(response.ok){
        const data = await response.json()
        setdataSource(data)

      }else{
        message.error("Server Hatası Kullanıcılar Getirilemedi")
      }
    } catch (error) {
     console.log(error);
    }finally{
      setLoading(false)
    }
  },[apiUrl])

  const deleteUsers =  async(UserEmail) => {
    setLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/users/${UserEmail}`,{
        method:"DELETE",
      })
    
      if(response.ok){
        fetchUser()
        message.success("Kullanıcı başarıyla silindi")
      }else{
        message.error("Silme işlemi başarısız")
      }
    } catch (error) {
     console.log("Silme Hatası",error);
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser()
  },[fetchUser])
  return (
    <Table loading={loading} rowKey={(record) => record._id } dataSource={dataSource} columns={columns} />
  )
}

export default UserPage