import { Button, Form, Input, Spin, message } from 'antd'
import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CategoryUpdatePage = () => {

    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const categoryId = params.id
    const [form] = Form.useForm()


    const onFinish = async (value) => {
        try {
            setLoading(true)
            const response = await fetch(`${apiUrl}/api/categories/${categoryId}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(value)
            })
            if (response.ok) {
                message.success("Kategori başarıyla güncellendi")
            } else {
                message.error("Kategori güncellenirken bir hata oluştu")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        const fetchSingleCategories = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${apiUrl}/api/categories/${categoryId}`)

                if (!response.ok) {
                    throw new Error("verileri getirme hatası")
                }
                const data = await response.json()
                if (data) {
                    form.setFieldsValue({
                        name: data.name,
                        img: data.img
                    })
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        fetchSingleCategories()
    }, [apiUrl, categoryId, form])
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
                    <Input />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Düzenle
                </Button>

            </Form>
        </Spin>

    )
}

export default CategoryUpdatePage