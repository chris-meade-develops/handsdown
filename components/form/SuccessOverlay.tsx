import Success from '@/icons/Success'

export default function SuccessOverlay({ message }: { message: string }) {
  return (
    <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-secondary">
      <div className="flex flex-col items-center justify-start h-full gap-3">
        <p>{message}</p>
        <Success className="w-[3rem] h-[3rem] text-green-500" />
      </div>
    </div>
  )
}
