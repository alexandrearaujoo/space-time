import { MemoryRequest, memorySchema } from '@/schemas/memorySchema'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'
import { api } from '@/lib/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/navigation'

export const useCreateMemory = () => {
  const token = Cookie.get('tokenTimeline')
  const router = useRouter()

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
    const res = await api.post('/memories', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (res.status !== 201) {
      toast.error('Something went wrong')
      return
    }
    reset()
    toast.success('Memory created successfully')
    router.push('/')
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
