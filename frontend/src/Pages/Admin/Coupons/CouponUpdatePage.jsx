import { Button, Form, Input, Spin, message } from 'antd'
import React, {useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CouponUpdatePage = () => {

    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const couponId = params.id
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = async (value) => {
        try {
            setLoading(true)
            const response = await fetch(`${apiUrl}/api/coupon/${couponId}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(value)
            })
            if (response.ok) {
                message.success("Kupon başarıyla güncellendi")
                navigate("/admin/coupons")
            } else {
                message.error("Kupon güncellenirken bir hata oluştu")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        const fetchCoupons = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${apiUrl}/api/coupon/${couponId}`)

                if (!response.ok) {
                    throw new Error("verileri getirme hatası")
                }
                const data = await response.json()
                if (data) {
                    form.setFieldsValue({
                        code: data.code,
                        discount: data.discountPercent
                    })
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fetchCoupons()
    }, [apiUrl, couponId, form])
    return (
        <Spin spinning={loading}>
            <Form
                form={form}
                name="basic"
                layout="vertical"
                autoComplete='off'
                onFinish={onFinish}
            >
                <Form.Item
                    label="Kupon Kodu"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen kampanya kodunu girin!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Kampanya Yüzdesi"
                    name="discount"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen kampanya miktarını giriniz!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Düzenle
                </Button>

            </Form>
        </Spin>

    )
}

export default CouponUpdatePage