import { Form, Input ,Button, Spin, message } from 'antd'

import React, { useState } from 'react'

const CreateBrandsPage = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const onFinish = async(value) => {
        try {
            setLoading(true)
            const response = await fetch(`${apiUrl}/api/brands`,{
                method:'POST',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(value)
            }) 
            if(response.ok){
                message.success("Marka başarıyla eklendi")
                console.log(form);
                form.resetFields()
            }else{
                message.error("Marka eklenirken hata oluştu")
            }


        } catch (error) {
            console.log(error)
        }finally{
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
            label="Marka ismi"
            name="name"
            rules={[
                {
                    required: true,
                    message: 'Lütfen Marka adını girin!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Marka Görseli (Link)"
            name="img"
            rules={[
                {
                    required: true,
                    message: 'Lütfen Marka görsel linkini!',
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

export default CreateBrandsPage