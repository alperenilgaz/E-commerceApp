import { Button, Form, Input, Spin, message } from 'antd'
import React, { useState } from 'react'

const CreateAboutPage = () => {
    const [loading, setloading] = useState(false)
    const [form] = Form.useForm()
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const onFinish = async(value) =>{
        try {
            setloading(true)
            const response = await fetch(`${apiUrl}/api/about`,{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(value)
            })

            if(response.ok){
                message.success("Görsel başarıyla yüklendi")
                form.resetFields()
            }else{
                message.error("Görsel eklenirken bir hata oluştu")
            }
        } catch (error) {
            console.log(error)
        }finally{
            setloading(false)
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
            label="Görsel"
            name="img"
            rules={[
                {
                    required: true,
                    message: 'Lütfen Marka adını girin!',
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

export default CreateAboutPage