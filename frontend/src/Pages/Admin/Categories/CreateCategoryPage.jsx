import { Button, Form, Input, Spin, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCategoryPage = () => {

    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()
    
    
    const onFinish = async (value) => {
        try {
            setLoading(true)
            const response = await fetch(`${apiUrl}/api/categories/`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(value)
            })
            if (response.ok) {
                message.success("Kategori başarıyla oluşturuldu")
                console.log(form)
    
                form.resetFields()
                

            } else {
                message.error("Kategori oluştururken bir hata oluştu!")
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
                    label="Kategori İsmi"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen Kategori adını girin!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Kategori Görseli (Link)"
                    name="img"
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen Kategori görsel linkini!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Oluştur
                </Button>

            </Form>
        </Spin>

    )
}

export default CreateCategoryPage