import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='flex w-full flex-col gap-[-0.15rem]'>
        <h1 className='text-2xl font-bold tracking-tight'>
          {slice.primary.first_name}
          {slice.primary.last_name}
        </h1>
        <span>{slice.primary.title}</span>
      </div>
    </section>
  )
}

export default Hero
