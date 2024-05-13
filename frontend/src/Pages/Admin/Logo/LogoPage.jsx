import { render } from '@react-three/fiber';
import { Button, Table, message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LogoPage = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [dataSource, setdataSource] = useState([])
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    const fetchLogo = useCallback(async() => {
        setloading(true)
        try {
            const response = await fetch(`${apiUrl}/api/logo`)
            if(response.ok){
                const data = await response.json()
                setdataSource(data)

            }else{
                message.error("Verileri getirilemedi")
            }
        } catch (error) {
            console.log(error);
        }finally{
            setloading(false)
        }
    },[apiUrl])

    useEffect(() => {
        fetchLogo()
    },[fetchLogo])

    const columns = [
        {
            title: 'Logo',
            dataIndex: 'img',
            key: 'img',
            render:(imgSrc) => (
                <img src={imgSrc}  width={200}/>
            )
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
            render:(_,record) => (
                <Button onClick={() => navigate(`/admin/logo/update/${record._id}`)} type='primary'>
                    Düzenle
                </Button>
            )
        },
    ];

    return (
        <Table rowKey={(record) => record._id} loading={loading}  dataSource={dataSource} columns={columns} />
    )
}

export default LogoPage