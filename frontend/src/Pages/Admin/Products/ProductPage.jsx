import React, { useCallback, useEffect, useState } from 'react'
import { Button, Popconfirm, Space, Table, message } from 'antd'
import { useNavigate } from 'react-router-dom'
const ProductPage = () => {
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const navigate = useNavigate()

    const columns = [
        {
            title: 'Ürün Resmi',
            dataIndex: 'img',
            key: 'img',
            render: (imgSrc) => (
                <img src={imgSrc[0]} width={100} />
            )
        },
        {
            title: 'Ürün İsmi',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Kategori',
            dataIndex: 'categoryName',
            key: 'categoryName',
            render: (text) => <b>{text}</b>
        },
        {
            title: 'Ürün Fiyatı',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <span>{text.current.toFixed(2)}TL</span>
        },
        {
            title: 'İndirim Mikatarı',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <span>%{text.discount}</span>
        },
        {
            title: 'Oluşturulma Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',

        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (_, record) => (
                <Space size={"middle"}>
                    <Button onClick={() => navigate(`/admin/products/update/${record._id}`)} type='primary'>
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Ürün Sil"
                        description="Ürünü silmek istediğinizden emin misin?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteProducts(record._id)}
                    >
                        <Button type='primary' danger>Sil</Button>
                    </Popconfirm>


                </Space>
            )
        }

    ];

    const deleteProducts = async (ProductId) => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/product/${ProductId}`, {
                method: "DELETE",
            })

            if (response.ok) {
                message.success("Kategori başarıyla silindi")
                setDataSource((prevProducts) => {
                    return prevProducts.filter(item => item._id !== ProductId)
                })
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
        const fetchData = async () => {
            setLoading(true)
            try {
                const [categoriesResponse,productResponse] = await Promise.all([
                    fetch(`${apiUrl}/api/categories`),
                    fetch(`${apiUrl}/api/product`)
                ])
                if(!categoriesResponse.ok ||!productResponse){
                    message.error("Veri getirme başarısız")
                }
         
                const [categoriesData,productData] = await Promise.all([
                    categoriesResponse.json(),
                    productResponse.json()

                ])
                const productWithCategories = productData.map((product) =>{
                    const categoryId = product.category
                    const category = categoriesData.find((item) => item._id === categoryId)
                    return {
                        ...product,
                        categoryName:category ? category.name : ""
                    }
                })
                setDataSource(productWithCategories)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [apiUrl])
    return (
        <Table loading={loading} rowKey={(record) => record._id} dataSource={dataSource} columns={columns} />
    )
}

export default ProductPage