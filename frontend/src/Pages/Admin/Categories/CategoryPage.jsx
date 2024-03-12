import React, { useCallback, useEffect, useState } from 'react'
import { Button, Popconfirm, Space, Table, message } from 'antd'
import { useNavigate } from 'react-router-dom'
const CategoryPage = () => {
    const [dataSource, setdataSource] = useState([])
    const [loading, setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const navigate = useNavigate()

    const columns = [
        {
            title: 'İmage',
            dataIndex: 'img',
            key: 'img',
            render: (imgSrc) => (
                <img src={imgSrc} width={100} />
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Oluşturulma Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',

        },
        {
            title: 'Sil',
            dataIndex: 'sil',
            key: 'sil',
            render: (_, record) => (
                <Space size={"middle"}>
                    <Button onClick={() => navigate(`/admin/categories/update/${record._id}`)} type='primary'>
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Kategori Sil"
                        description="Kategoriyi silmek istediğinizden emin misin?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteCategory(record._id)}
                    >
                        <Button type='primary' danger>Sil</Button>
                    </Popconfirm>


                </Space>
            )
        }

    ];
    const fetchCategories = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/categories`)

            if (response.ok) {
                const data = await response.json()
                setdataSource(data)

            } else {
                message.error("Server Hatası Kullanıcılar Getirilemedi")
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }, [apiUrl])

    const deleteCategory = async (CategoryId) => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/categories/${CategoryId}`, {
                method: "DELETE",
            })

            if (response.ok) {
                fetchCategories()
                message.success("Kategori başarıyla silindi")
            } else {
                message.error("Kategori silme işlemi başarısız")
            }
        } catch (error) {
            console.log("Silme Hatası", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])
    return (
        <Table loading={loading} rowKey={(record) => record._id} dataSource={dataSource} columns={columns} />
    )
}

export default CategoryPage