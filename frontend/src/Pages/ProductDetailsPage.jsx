import React, { useEffect, useState } from 'react'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import DialogModal from '../components/Modals/Dialog/DialogModal'

import { useParams } from 'react-router-dom'
const ProductDetailsPage = () => {
  const [singleProduct, setSingleProduct] = useState(null)
  const [isDialogModal, setisDialogModal] = useState(false)
  const {id:productId} = useParams()
  const apiUrl = import.meta.env.VITE_API_BASE_URL


  useEffect(() => {
    const fetchSingleProduct = async () => {

        try {
            const response = await fetch(`${apiUrl}/api/product/${productId}`)

            if (!response.ok) {
                throw new Error("verileri getirme hatası")
            }
            const data = await response.json()
            setSingleProduct(data)
        } catch (error) {
            console.log(error);
        } 
    }
    fetchSingleProduct()
}, [apiUrl, productId])

  return (
    <>
     {singleProduct ? <ProductDetails singleProduct={singleProduct} /> : <p>Ürün Yükleniyor...</p>}
  
      <DialogModal isDialogModal={isDialogModal} setisDialogModal={setisDialogModal}/>
    </>
  )
}

export default ProductDetailsPage