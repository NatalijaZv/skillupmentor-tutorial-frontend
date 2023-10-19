import DashboardLayout from 'components/ui/DashboardLayout'
import CreateUpdateProductForm from 'components/ui/product/createUpdateProductForm'
import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

const DashboardProductsEdit: FC = () => {
  const location = useLocation()
  return (
    <DashboardLayout>
      <h1 className="mb-4 text-center">Edit product</h1>
      <CreateUpdateProductForm defaultValues={location.state} />
    </DashboardLayout>
  )
}

export default DashboardProductsEdit
