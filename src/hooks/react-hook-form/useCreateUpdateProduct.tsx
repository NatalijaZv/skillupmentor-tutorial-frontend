import { yupResolver } from '@hookform/resolvers/yup'
import { ProductType } from 'models/product'
import { RoleType } from 'models/role'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

export interface CreateUpdateProductFields {
  title: string
  description: string
  price: number
}

interface Props {
  defaultValues?: ProductType
}

export const useCreateUpdateProductForm = ({ defaultValues }: Props) => {
  const CreateUpdateProductSchema = Yup.object().shape({
    title: Yup.string().required('Product title is required'),
    description: Yup.string().required('Product description is required'),
    price: Yup.number().required('Product price is required'),
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      price: 0,
      ...defaultValues,
    },
    mode: 'onSubmit',
    resolver: yupResolver(CreateUpdateProductSchema),
  })
  return { handleSubmit, errors, control }
}

export type CreateUpdateProductForm = ReturnType<
  typeof useCreateUpdateProductForm
>
