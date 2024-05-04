import { Button, Form, Input, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateSliderPage = () => {
  const [loading, setloading] = useState(false)
  const [form] = Form.useForm()
  const params = useParams()
  const sliderId = params.id
  const apiUrl = import.meta.env.VITE_API_BASE_URL

  const onFinish = async(value) => {
    try {
      setloading(true)
      const response = await fetch(`${apiUrl}/api/slider/${sliderId}`,{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(value)
      })
      if(response.ok){
        message.success("Görsel başarıyla güncellendi")
      }else{
        message.error("Görsel güncellenirken bir hata oluştu")
      }
    } catch (error) {
      console.log(error);
    }finally{
      setloading(false)
    }
  }

  useEffect(() => {
    const fetchSingleSlider = async() => {
      setloading(true)
      try {
        const response = await fetch(`${apiUrl}/api/slider/${sliderId}`)
        if(!response.ok){
          throw new Error("Verileri getirme hatası")
        }
        const data = await response.json()
        if(data){
          form.setFieldsValue({
            img:data.img
          })
        }
      } catch (error) {
        console.log(error);
      }finally
      {
        setloading(false)
      }
    }
    fetchSingleSlider()
  },[apiUrl,sliderId,form])
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
            Düzenle
        </Button>

    </Form>
</Spin>
  )
}

export default UpdateSliderPage