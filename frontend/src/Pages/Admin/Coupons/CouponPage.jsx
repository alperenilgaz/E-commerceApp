import React, { useCallback, useEffect, useState } from 'react'
import { Button, Popconfirm, Space, Table, message } from 'antd'
import { useNavigate } from 'react-router-dom'
const CouponPage = () => {
    const [dataSource, setdataSource] = useState([])
    const [loading, setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const navigate = useNavigate()

    const columns = [
        {
            title: 'Kupon kodu',
            dataIndex: 'code',
            key: 'code',
           render:(code) =>  <b>{code}</b>
        },
        {
            title: 'İndirim Yüzdesi',
            dataIndex: 'discountPercent',
            key: 'discountPercent',
            render: (discount) => <span>%{discount}</span>
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
                    <Button onClick={() => navigate(`/admin/coupons/update/${record._id}`)} type='primary'>
                        Düzenle
                    </Button>
                    <Popconfirm
                        title="Kupon Sil"
                        description="Kuponu silmek istediğinizden emin misin?"
                        okText="Evet"
                        cancelText="Hayır"
                        onConfirm={() => deleteCoupons(record._id)}
                    >
                        <Button type='primary' danger>Sil</Button>
                    </Popconfirm>


                </Space>
            )
        }

    ];
    const fetchCoupons = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/coupon`)

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

    const deleteCoupons = async (couponId) => {
        setLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/coupon/${couponId}`, {
                method: "DELETE",
            })

            if (response.ok) {
                fetchCoupons()
                message.success("Kupon başarıyla silindi")
            } else {
                message.error("Kupon silme işlemi başarısız")
            }
        } catch (error) {
            console.log("Silme Hatası", error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCoupons()
    }, [fetchCoupons])
    return (
        <Table loading={loading} rowKey={(record) => record._id} dataSource={dataSource} columns={columns} />
    )
}

export default CouponPage