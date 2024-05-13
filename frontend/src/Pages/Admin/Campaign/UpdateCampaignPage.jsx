import { Button, Form, Input, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateCampaignPage = () => {
  const [form] = Form.useForm()
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [loading, setloading] = useState(false)
  const params = useParams()
  const campaignId = params.id

  const onFinish = async(value) => {
    try {
        setloading(true)
        const response = await fetch(`${apiUrl}/api/campaign/${campaignId}`,{
            method:'PUT',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(value)
        }) 
        if(response.ok){
            message.success("Pano başarıyla güncellendi")
        
        }else{
            message.error("Pano güncellenirken hata oluştu")
        }


    } catch (error) {
        console.log(error)
    }finally{
        setloading(false)
    }
} 

  useEffect(() => {
    const fetchSingleCampaign = async() => {
      setloading(true)
      try {
        const response = await fetch(`${apiUrl}/api/campaign/${campaignId}`)
        if(!response.ok){
          throw new Error("Veri Getirme Hatası")
        }
        const data = await response.json()
        if(data){
          form.setFieldsValue({
            img:data.img,
            title:data.title,
            strong:data.strong,
            shop:data.shop,
          })
        }
      } catch (error) {
        console.log(error);
      }finally{
        setloading(false)
      }
    }
    fetchSingleCampaign()
  },[apiUrl,campaignId,form])
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
            label="Resim"
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
        <Form.Item
            label="Başlık"
            name="title"
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
            label="Kampanya içeriği"
            name="strong"
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
            label="Yönlendirme"
            name="shop"
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

export default UpdateCampaignPage