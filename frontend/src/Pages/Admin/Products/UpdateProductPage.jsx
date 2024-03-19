import { Button, Form, Input, InputNumber, Select, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateProductPage = () => {

  const apiUrl = import.meta.env.VITE_API_BASE_URL
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const params = useParams()
  const productId = params.id
 
 
  useEffect(() => {  
    const fetchData = async () => {
        setLoading(true)
        try {
            const [categoriesResponse,SingleProductResponse] = await Promise.all([
                fetch(`${apiUrl}/api/categories`),
                fetch(`${apiUrl}/api/product/${productId}`)
            ])
            if(!categoriesResponse.ok ||!SingleProductResponse){
                message.error("Veri getirme başarısız")
                return;
            }
     
            const [categoriesData,SingleProductData] = await Promise.all([
                categoriesResponse.json(),
                SingleProductResponse.json(),
       

            ])
            setCategories(categoriesData)
         
            if(SingleProductData){
                form.setFieldsValue({
                    name:SingleProductData.name,
                    category:SingleProductData.category,
                    current:SingleProductData.price.current,
                    discount:SingleProductData.price.discount,
                    description:SingleProductData.description,
                    img:SingleProductData.img.join("\n"),
                    colors:SingleProductData.colors.join("\n"),
                    sizes:SingleProductData.sizes.join("\n"),
                    
                    
                })
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    fetchData()
}, [apiUrl,productId,form])

  
  const onFinish = async (value) => {
    const imgLinks = value.img
    .split("\n")
    .map((link) => link.trim())
    const colors = value.colors
    .split("\n")
    .map((link) => link.trim())
    const sizes = value.sizes
    .split("\n")
    .map((link) => link.trim())
    setLoading(true)
    try {
    
     
      const response = await fetch(`${apiUrl}/api/product/${productId}`, {
        method: 'PUT',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          ...value,
          price:{
            current:value.current,
            discount:value.discount
          },
          sizes,
          colors,
          img:imgLinks
        })
      })
      if (response.ok) {
        message.success("Ürün başarıyla güncellendi")
        navigate("/admin/products")


      } else {
        message.error("Ürün güncellendi bir hata oluştu!")
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
          label="Ürün İsmi"
          name="name"
          rules={[
            {
              required: true,
              message: 'Lütfen ürün adını girin!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Ürün Kategorisi"
          name="category"
          rules={[
            {
              required: true,
              message: 'Lütfen 1 kategori seçiniz!',
            },
          ]}
        >
          <Select>
            {
              categories.map((item) =>  (
                <Select.Option value={item._id} key={item._id}>
                {item.name}
              </Select.Option>
              ))}
           
          </Select>
        </Form.Item>
        <Form.Item
          label="Ürün Fiyatı"
          name="current"
          rules={[
            {
              required: true,
              message: 'Lütfen ürün fiyatını girin!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="İndirim Yüzdesi"
          name="discount"
          rules={[
            {
              required: true,
              message: 'Lütfen ürün fiyatını girin!',
            },
          ]}

        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Ürün Açıklaması"
          name="description"
          rules={[
            {
              required: true,
              message: "Lütfen bir ürün açıklaması girin!",
            },
          ]}
        >
          <ReactQuill
            theme="snow"
            style={{
              backgroundColor: "white",
            }}
          />
        </Form.Item>
        <Form.Item
          label="Ürün Görselleri (Linkler)"
          name="img"
          rules={[
            {
              required: true,
              message: 'Lütfen 4 ürün görsel linki giriniz!',
            },
          ]}
        >
          <Input.TextArea
            placeholder='Her bir görsel linkini yeni bir satıra yazınız!'
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Ürün Bedenleri (Bedenler)"
          name="sizes"
          rules={[
            {
              required: true,
              message: 'Lütfen  en az 1 beden ölçüsü  giriniz!',
            },
          ]}
        >
          <Input.TextArea
            placeholder='Her bir beden ölçüsünü yeni bir satıra yazınız!'
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>
        <Form.Item
          label="Ürün Renkleri (Renkler)"
          name="colors"
          rules={[
            {
              required: true,
              message: 'Lütfen  en az 1 renk bilgisi  giriniz!',
            },
          ]}
        >
          <Input.TextArea
            placeholder='Her bir renk bilgisini yeni bir satıra yazınız!'
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

      


        <Button type="primary" htmlType="submit">
          Düzenle
        </Button>

      </Form>
    </Spin>

  )
}

export default UpdateProductPage