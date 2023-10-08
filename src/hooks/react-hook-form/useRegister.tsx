import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export interface RegisterUserFields {
  first_name?: string
  last_name?: string
  email: string
  password: string
  confirm_password: string
}

export const useRegisterForm = () => {
  const RegisterSchema = yup.object().shape({
    first_name: yup.string().notRequired(),
    last_name: yup.string().notRequired(),
    email: yup.string().email().required('Please enter a valid email'),
    password: yup
      .string()
      .matches(
        /^(?=.*\d)[A-Za-z.\s_-]+[\w~@#$%^&*+=`|{}:;!.?",()[\]-]{6,}/,
        'Password must have at least one number, lower or upper case letter and it has to be longer than 5 characters',
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords do not match.')
      .required('Passwords do not match.'),
  })
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
    mode: 'onSubmit',
    resolver: yupResolver(RegisterSchema),
  })
  return { handleSubmit, errors, reset, control }
}

export type RegisterForm = ReturnType<typeof useRegisterForm>
