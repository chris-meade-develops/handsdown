import Arrow from '@/icons/Arrow'

export default function ArrowButton({
  type = 'next',
  reverseColors = false,
  ...props
}: ICarousel.ArrowButton) {
  return (
    <button
      className={`flex items-center justify-center w-16 h-16 rounded-full ${
        reverseColors ? 'bg-white' : 'bg-primary'
      }`}
      {...props}
    >
      <Arrow
        className={`${reverseColors ? 'fill-black' : 'fill-white'} h-auto w-8 ${
          type === 'next' ? 'rotate-90' : '-rotate-90'
        }`}
      />
    </button>
  )
}
