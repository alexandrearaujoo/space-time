import { ResultImageUpload } from '@/interfaces'
import { Camera } from 'lucide-react'
import { CldUploadWidget } from 'next-cloudinary'
import { useCallback } from 'react'

interface ImageUploadProps {
  onChange: (value: string) => void
}

const ImageUpload = ({ onChange }: ImageUploadProps) => {
  const handleUpload = useCallback(
    (result: ResultImageUpload) => {
      onChange(result.info.secure_url)
    },
    [onChange],
  )

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="ydmtcvdh"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="flex cursor-pointer items-center gap-2 "
          >
            <Camera className="h-4 w-4" />
            <p className="text-sm text-gray-200 transition-colors duration-200 hover:text-gray-100">
              Click to upload
            </p>
          </div>
        )
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload
