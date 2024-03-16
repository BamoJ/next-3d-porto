import { Content } from "@prismicio/client"
import { SliceComponentProps } from "@prismicio/react"

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
      <div className="grid grid-cols-1 items-center desktop:grid-cols-2">
        <h1
          className="text-[clamp(3rem,20vmin,20rem)]"
          aria-label={slice.primary.first_name + " " + slice.primary.last_name}
        >
          {slice.primary.first_name} {slice.primary.last_name}
        </h1>
        <span className="text-lg uppercase tracking-wider">
          {slice.primary.title}
        </span>
      </div>
    </section>
  )
}

export default Hero
