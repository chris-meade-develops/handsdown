import useExpander from '@/hooks/useExpander'
import Arrow from '@/icons/Arrow'
import Link from 'next/link'

export default function FaqCard({ number, question, answer, link }: ICms.Faq) {
  const { isExpanded, handleToggle, ref, maxHeight } =
    useExpander<HTMLDivElement>()

  return (
    <div
      className={`bg-white opacity-85 rounded-[40px]  px-19 text-lg font-montserrat max-w-[702px]  text-primary-text mb-10 ${
        isExpanded ? 'py-15' : ' py-17'
      }`}
    >
      <div className="flex items-center justify-between mb-4 ">
        <div className="font-semibold">
          {number}. {question}
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="relative w-10 h-10"
        >
          <div
            className={`w-10 h-1 bg-primary absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 transition-transform duration-150 ${
              isExpanded ? '' : 'rotate-90'
            }`}
          />
          <div
            className={`w-10 h-1 bg-primary absolute  -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ${isExpanded}`}
          />
        </button>
      </div>
      <div
        ref={ref}
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight,
        }}
      >
        <p className="mb-4">{answer}</p>
        {link && (
          <Link
            href={link.address}
            className="flex items-center text-base font-bold transition-all duration-75 hover:text-accent group"
          >
            {link.text}{' '}
            <Arrow className="ml-4 transition-all duration-75 rotate-90 w-7 h-7 fill-black group-hover:fill-accent group-hover:translate-x-3" />
          </Link>
        )}
      </div>
    </div>
  )
}
