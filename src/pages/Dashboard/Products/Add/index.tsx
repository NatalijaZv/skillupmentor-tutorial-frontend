import DashboardLayout from 'components/ui/DashboardLayout'
import CreateUpdateProductForm from 'components/ui/product/createUpdateProductForm'
import React, { FC } from 'react'

const DashboardProductsAdd: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Create new product</h1>
      <CreateUpdateProductForm />
    </DashboardLayout>
  )
}

export default DashboardProductsAdd
