import Spinner from '@/icons/Spinner'

export default function LoadingOverlay() {
  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-secondary/50">
      <Spinner className="w-[3rem] h-[3rem] animate-spin-fast text-accent" />
    </div>
  )
}
