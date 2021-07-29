import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { IThumbnail } from '../../../data/IProject'
import { AnimateIn, GRID_GAP, SMALL_SCREEN } from '../../../styles/GlobalStyles'
import { GetPageName, Tags } from '..'
import { useInView } from 'react-intersection-observer'

interface IThumbnailProps {
	data: IThumbnail
	hideTags?: boolean
	style?: React.CSSProperties
	setQuery: (query: string) => void
	thumbnailClick?: () => void
}

export const Thumbnail: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	const { data, style, hideTags } = props
	const link = data.file ? data.file.source : `/page/${GetPageName(data.header)}`
	const thumbnailStyle: React.CSSProperties = !data.thumbnail ? { pointerEvents: 'none' } : {}

	const [ref, inView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true,
	})

	return (
		<Container ref={ref} style={{ ...thumbnailStyle, ...style }} aria-hidden={!data.thumbnail}>
			<LinkStyle>
				{data.file ? (
					<a href={link} target="_blank" rel="noopener noreferrer" onClick={props.thumbnailClick}>
						<ImageWrapper>{inView && data.thumbnail && <Image src={data.thumbnail} />}</ImageWrapper>
						<H3>{data.header}</H3>
					</a>
				) : (
					<Link to={link} tabIndex={!data.thumbnail ? -1 : undefined} onClick={props.thumbnailClick}>
						<ImageWrapper>{inView && data.thumbnail && <Image src={data.thumbnail} />}</ImageWrapper>
						<H3>{data.header}</H3>
					</Link>
				)}
			</LinkStyle>

			{data.tags && !hideTags && <Tags tags={data.tags} setQuery={props.setQuery} />}
		</Container>
	)
}

const Container = styled.li`
	display: flex;
	align-items: center;
	flex-direction: column;

	padding: ${GRID_GAP / 2}px 0;

	@media (min-width: ${SMALL_SCREEN}px) {
		padding: ${GRID_GAP / 2}px 1.5%;
	}
`

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	overflow: hidden;
	background-color: ${({ theme }) => theme.thumbnail};
	border: 3px solid transparent;
	background-clip: padding-box; // this should eliminate the need to have a border color (instead of transparent), but it is not hiding the background completely
	transition: border-color 100ms ease-in;
`
const Image = styled.img`
	height: 100%;
	min-height: 160px;
	opacity: 0;
	animation: 1s ease-out 0.5s ${AnimateIn};
	animation-fill-mode: forwards;

	width: 100%;
	object-fit: cover;
`

export const H3 = styled.h3`
	width: 100%;
	text-align: center;
	padding-top: 8px;
	font-size: 1em;
	font-family: 'Museo_Slab_500_2';
	transition: color 100ms ease-in;
`

const LinkStyle = styled.div`
	a {
		&:hover,
		&:focus {
			${ImageWrapper} {
				border-color: ${({ theme }) => theme.accent};
			}
			${H3} {
				color: ${({ theme }) => theme.accent};
			}
		}
	}
`
