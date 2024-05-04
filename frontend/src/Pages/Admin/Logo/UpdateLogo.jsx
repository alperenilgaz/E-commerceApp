import { Button, Form, Input, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateLogo = () => {
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [loading, setloading] = useState(false)
    const [form] = Form.useForm()
    const params = useParams()
    const logoId = params.id

    const onFinish = async(value) => {
        try {
            setloading(true)
            const response = await fetch(`${apiUrl}/api/logo/${logoId}`,{
                method:'PUT',
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify(value)
            })
            if(response.ok){
                message.success("Logo başarıyla güncellendi")
            }else{
                message.error("Logo güncellenirken bir hata oluştu")
            }
        } catch (error) {
            console.log(error);
        }finally{
            setloading(false)
        }
    }

    useEffect(() => {
        const fetchSingleLogo = async() => {
            setloading(true)
            try {
                const response = await fetch(`${apiUrl}/api/logo/${logoId}`)
                if(!response.ok){
                    throw new Error("Veri getirme hatası")
                }
                const data = await response.json()
                if(data){
                    form.setFieldsValue({
                        img:data.img
                    })
                }
            } catch (error) {
                console.log(error);
            }finally{
                setloading(false)
            }
        }
        fetchSingleLogo()
    },[apiUrl,logoId,form])

  return (
    <Spin spinning={loading}>
    <Form
        form={form}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
    
      
    >
        <Form.Item
            label="Logo"
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
            Düzenle
        </Button>

    </Form>
</Spin>
  )
}

export default UpdateLogo