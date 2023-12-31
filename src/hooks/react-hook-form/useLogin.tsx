import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export interface LoginUserFields {
  email: string
  password: string
}

export const useLoginForm = () => {
  const LoginSchema = yup.object().shape({
    email: yup.string().email().required('Please enter a valid email'),
    password: yup.string(),
  })
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(LoginSchema),
  })
  return { handleSubmit, errors, control }
}
export {}
export type LoginForm = ReturnType<typeof useLoginForm>
