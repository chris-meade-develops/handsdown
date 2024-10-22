export const handleNoClassOptionsOrLoading = ({
  fieldValue,
  loading,
  error,
  classOptions,
}: {
  fieldValue?: string
  loading: boolean
  error: boolean
  classOptions: ClassObject[]
}) => {
  if (loading && classOptions.length === 0) {
    return { value: '', label: 'Loading...' }
  }
  if (classOptions.length === 0) {
    return { value: '', label: 'Please select a course' }
  }

  if (error) {
    return { value: '', label: 'Error' }
  }

  return (
    classOptions.find((option) => option.value === fieldValue) || {
      value: '',
      label: '',
    }
  )
}
