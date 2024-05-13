import { Form, Input ,Button, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const UpdateBrandPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const params = useParams()
  const brandId = params.id
  
  const onFinish = async(value) => {
      try {
          setLoading(true)
          const response = await fetch(`${apiUrl}/api/brands/${brandId}`,{
              method:'PUT',
              headers:{
                  "Content-type":"application/json"
              },
              body:JSON.stringify(value)
          }) 
          if(response.ok){
              message.success("Marka başarıyla güncellendi")
          
          }else{
              message.error("Marka güncellenirken hata oluştu")
          }


      } catch (error) {
          console.log(error)
      }finally{
          setLoading(false)
      }
  } 
  useEffect(() =>{
    const fetchSingleBrands = async() => {
      setLoading(true)
      try {
          const response = await fetch(`${apiUrl}/api/brands/${brandId}`)
          if(!response.ok){
            throw new Error("Veri getirme hatası")
          }
          const data = await response.json()
          if(data){
            form.setFieldsValue({
              name:data.name,
              img:data.img
            })
          }
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
    }
    fetchSingleBrands()
  },[apiUrl,brandId,form])
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

export default UpdateBrandPage