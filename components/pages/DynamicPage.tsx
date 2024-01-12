import DefaultHero from '@/components/hero/DefaultHero'
import dynamic from 'next/dynamic'
import Hero from '../hero'

export default function DynamicPage({ cmsData }: IPage.Props) {
  const { hero, dynamicComponents } = cmsData

  return (
    <main>
      {hero.data ? <DefaultHero {...hero} /> : <Hero />}
      {dynamicComponents?.map((component: ICms.DynamicComponents) => {
        const componentName = component.__component.split('.')[1]
        const Component = dynamic(() => import(`@/components/${componentName}`))

        return <Component key={component.id * Math.random()} {...component} />
      })}
    </main>
  )
}
