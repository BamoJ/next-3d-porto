'use client'

import { Content, KeyTextField } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef } from 'react'
import Bounded from '@/components/Bounded'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
	const component = useRef(null)

	useEffect(() => {
		let ctx = gsap.context(() => {
			const tl = gsap.timeline()
			tl
				.fromTo(
					'.name-animation',
					{ opacity: 0, yPercent: 100 },
					{
						opacity: 1,
						yPercent: 0,
						duration: 1,
						ease: 'power4.out',
						stagger: {
							each: 0.035,
							from: 'start',
						},
					}
				)
				.from(
					'.title',
					{
						opacity: 0,
						yPercent: 100,
						duration: 1,
						ease: 'power4.out',
					},
					'<+.75'
				)
		}, component)

		return () => {
			ctx.revert()
		}
	}, [])

	const renderLetters = (name: KeyTextField, key: string) => {
		if (!name) return
		return name.split('').map((letter, index) => (
			<span
				key={index}
				className={`name-animation name-animation-${key}-index inline-block opacity-0 `}
			>
				{letter}
			</span>
		))
	}

	return (
		<Bounded
			ref={component}
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<div className="grid min-h-[70svh] grid-cols-1 md:grid-cols-2 items-center">
				<div className="col-start-1 md:row-start-1">
					<h1
						className="text-[clamp(3rem,17vmin,20rem)]"
						aria-label={
							slice.primary.first_name + ' ' + slice.primary.last_name
						}
					>
						<span className="block overflow-hidden text-slate-200">
							{renderLetters(slice.primary.first_name, 'first')}
						</span>
						<span className="block overflow-hidden text-slate-400">
							{renderLetters(slice.primary.last_name, 'last')}
						</span>
					</h1>
					<p className="title block text-sm uppercase -mt-[.2rem]">
						{slice.primary.title}
					</p>
				</div>
			</div>
		</Bounded>
	)
}

export default Hero
