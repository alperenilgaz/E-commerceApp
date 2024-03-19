import { Button, Form, Input, Spin, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCouponsPage = () => {

    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = async (value) => {
        try {
            setLoading(true)
            const response = await fetch(`${apiUrl}/api/coupon/`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(value)
            })
            if (response.ok) {
                message.success("Kupon başarıyla oluşturuldu")
                navigate("/admin/coupons")
                

            } else {
                message.error("Kupon oluştururken bir hata oluştu!")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    return (
        <Spin spinning={loading}>
            <Form
                form={form}
                name="basic"
                layout="vertical"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Kupon Kodu"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen kampanya miktarını giriniz!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Kampanya Yüzdesi"
                    name="discountPercent"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen kampanya yüzdesini giriniz !',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Oluştur
                </Button>

            </Form>
        </Spin>

    )
}

export default CreateCouponsPage