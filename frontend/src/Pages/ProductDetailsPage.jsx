import React, { useState } from 'react'
import Policy from '../components/Layout/Policy/Policy'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import DialogModal from '../components/Modals/Dialog/DialogModal'
const ProductDetailsPage = () => {
  const [isDialogModal, setisDialogModal] = useState(false)
  return (
    <>
      <ProductDetails/>
      <Policy/>
      <DialogModal isDialogModal={isDialogModal} setisDialogModal={setisDialogModal}/>
    </>
  )
}

export default ProductDetailsPage