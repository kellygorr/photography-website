import * as React from 'react'
import styled from 'styled-components'
import { FileType, ISlide } from '../../../data/IProject'
import { AccentColors, NeutralColors } from '../../../styles/theme'

interface IPageProps {
	index: number
	isActive: boolean
	isScrolling: boolean
	neutralBorder?: boolean
	defaultWidth: number
	data: ISlide
	setIsScrolling: (isScrolling: boolean) => void
	slideshowRef: React.RefObject<HTMLDivElement>
}

export const Slide: React.FC<IPageProps> = (props: IPageProps) => {
	const { data, isActive, isScrolling, setIsScrolling, slideshowRef, index, neutralBorder, defaultWidth } = props
	React.useEffect(() => window.scrollTo(0, 0), [])

	return (
		<Container
			onClick={() => {
				if (!isActive && slideshowRef && slideshowRef.current && setIsScrolling) {
					setIsScrolling(true)

					const nextScroll = slideshowRef.current.clientWidth * 0.75 * index
					const currentScroll = slideshowRef.current.scrollLeft

					slideshowRef.current.scrollBy({
						top: 0,
						left: nextScroll - currentScroll,
						behavior: 'smooth',
					})
				}
			}}
			style={{
				cursor: isActive || !setIsScrolling ? 'default' : 'pointer',
				borderColor: isActive
					? isScrolling
						? 'transparent'
						: neutralBorder
						? NeutralColors.gray11
						: AccentColors.red
					: 'transparent',
				transitionDuration: isScrolling ? '0s' : '300ms',
				maxWidth: data.width ? data.width + 'px' : defaultWidth + 'px',
			}}
		>
			{data.file && data.file.type === FileType.Video ? (
				<video controls poster={data.img}>
					<source src={data.file.source} type="video/mp4" />
				</video>
			) : (
				<img src={data.img} alt={data.img} />
			)}
		</Container>
	)
}

interface IStyle {
	isActive?: boolean
	isScrolling?: boolean
}

const Container = styled.div<IStyle>`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	width: 75%;
	min-width: 75%;

	background-color: ${({ theme }) => theme.neutral};
	border: 3px solid;
	background-clip: padding-box;

	/* snap align center  */
	scroll-snap-align: center;

	transition: border-color linear;

	img,
	video {
		width: 100%;
	}
`
