import Form from '@/components/Common/Form'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductElement } from '@/Config/Config'
import React, { useState } from 'react'


const initialFormData = {
  image: null,
  title: '',
  description: '',
  category:'',
  brand:'',
  price:'',
  salePrice: '',
  totalStock: ''
}
function Products() {

  const [createProducts , setCreateProducts] = useState(false);

  const [formData , setFormData] = useState(initialFormData);

  function onSubmit() {

  }
  return (
    <>
    <div className='mb-5 w-full flex justify-end'>
     <Button onClick={()=> setCreateProducts(true)}>Add New Product</Button>
    </div>
    <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'></div>
    <Sheet open={createProducts} onOpenChange={()=>{
      setCreateProducts(false)}}>
      <SheetContent side='right' className='overflow-auto'>
       <SheetHeader>
        <SheetTitle>Add New Product</SheetTitle>
       </SheetHeader>
       <div className='py-6'>
        <Form formData={formData} onSubmit={onSubmit} setFormData={setFormData} buttonText='Add' formControls={addProductElement}/>
       </div>
      </SheetContent>
    </Sheet>
    </>
  )
}

export default Products