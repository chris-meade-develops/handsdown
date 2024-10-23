import Spinner from '@/icons/Spinner'

export default function LoadingOverlay() {
  const transition = {
    animate: {
      opacity: [0, 0.2, 0.4, 0.6, 0.8],
    },
    exit: {
      opacity: [0.8, 0.6, 0.4, 0.2, 0],
    },
    transition: { duration: 0.2, times: [0, 0.25, 0.5, 0.75, 1] },
  }

  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full opacity-50 bg-secondary">
      <Spinner className="w-[3rem] h-[3rem] animate-spin-fast text-accent" />
    </div>
  )
}
