import { MemoryRequest, memorySchema } from '@/schemas/memorySchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

export const useCreateMemory = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MemoryRequest>({ resolver: zodResolver(memorySchema) })

  const coverUrl = watch('coverUrl')

  const setCustomValue = (id: 'coverUrl', value: string) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }

  const onSubmit = async (data: MemoryRequest) => {
    console.log(data)
    reset()
    toast.success('Memory created successfully')
  }

  return {
    onSubmit,
    register,
    setCustomValue,
    handleSubmit,
    errors,
    isSubmitting,
    coverUrl,
  }
}
