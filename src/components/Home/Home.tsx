import * as React from 'react'
import styled from 'styled-components/macro'
import { projects } from '../../data'
import { IProject } from '../../data/IProject'
import { GRID_GAP, GRID_WIDTH, LARGE_SCREEN, MEDIUM_SCREEN, SMALL_SCREEN } from '../../styles/GlobalStyles'
import { RandomBinaryStr, Thumbnail, useRowHook } from '../shared'

interface IHomeProps {
	isDarkMode: boolean
	setQuery: (query: string) => void
}

export const Home = (props: IHomeProps): JSX.Element => {
	const [blankThumbnails, setBlankThumbnails] = React.useState<IProject[]>([])

	const [ref, rowLength, overflowAmount] = useRowHook(projects.length)

	/* 
		Generate array of blank thumbnails.  
		Don't generate a new array every time, only add onto it if we need more blank thumbnails 
	*/
	React.useEffect(() => {
		if (overflowAmount > blankThumbnails.length) {
			// Amount of blankThumbnails needed to equal the overflowAmount
			const diff = overflowAmount - blankThumbnails.length
			const newArray: IProject[] = Array.from(Array(diff), () => ({
				details: {
					header: RandomBinaryStr(),
					thumbnail: null,
					tags: Array.from(Array(Math.floor(Math.random() * 3) + 1), () => RandomBinaryStr()),
				},
			}))
			setBlankThumbnails([...blankThumbnails, ...newArray])
		}
	}, [rowLength, overflowAmount, blankThumbnails])

	return (
		<Gallery ref={ref}>
			{projects.map((project, index) => {
				const row = Math.floor(index / rowLength)
				const translateX = rowLength > 2 ? GetTranslateX(row % 2 === 0) : 0
				return (
					<Thumbnail
						key={project.details.header}
						data={project.details}
						style={{
							transform: `translate3d(${translateX}, 0,0)`,
						}}
						hideTags={rowLength < 2}
						setQuery={props.setQuery}
					/>
				)
			})}

			{rowLength > 1 &&
				blankThumbnails.slice(0, overflowAmount).map((project, index) => {
					const row = Math.floor((index + projects.length) / rowLength)
					const translateX = rowLength > 2 ? GetTranslateX(row % 2 === 0) : 0
					return (
						<Thumbnail
							key={project.details.header}
							data={project.details}
							style={{
								opacity: props.isDarkMode ? 0.15 : 0.4,
								transform: `translate3d(${translateX}, 0,0)`,
							}}
							hideTags={rowLength < 2}
							setQuery={props.setQuery}
						/>
					)
				})}
		</Gallery>
	)
}

const GetTranslateX = (isRowEven: boolean): string => (isRowEven ? '-30px' : '30px')

const Gallery = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: minmax(200px, 450px);
	justify-content: center;
	/* DO NOT ADD PADDING OR MARGIN or GAP, THIS WILL MESS UP THE CALC.  Padding must be added to thumbnail */

	@media (min-width: ${SMALL_SCREEN}px) {
		grid-template-columns: repeat(2, minmax(200px, 450px));
	}

	@media (min-width: ${LARGE_SCREEN}px) {
		grid-template-columns: repeat(auto-fit, ${GRID_WIDTH + GRID_GAP}px);
	}
`
