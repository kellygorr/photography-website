import styled from 'styled-components'
import { projects } from '../../data'
import { IProject, relatedTags, TagType, SkillType } from '../../data/IProject'
import { GRID_WIDTH, GRID_GAP, THUMBNAIL_SINGLE_COLUMN, SMALL_SCREEN } from '../../styles/GlobalStyles'
import { Heading } from '../Page'
import { Tag, Thumbnail } from '../shared'

interface ISearchProps {
	query: string
	setQuery: (query: string) => void
	thumbnailClick: () => void
}

interface IProjectSearch extends IProject {
	query: string
}

export const SearchResults = (props: ISearchProps): JSX.Element => {
	if (!props.query) {
		return null
	}
	const relatedMatches: IProjectSearch[] = relatedQueryMatches(props.query)
	let matches: IProjectSearch[] = queryMatches(props.query)
	matches = removeDuplicateTitles([...relatedMatches, ...matches])

	const searchResults: IProjectSearch[] = matches.filter((match) => match.query === props.query)
	const relatedResults: IProjectSearch[] = matches.filter((match) => match.query !== props.query)
	const relatedResultTags =
		relatedResults && relatedResults.map((project) => project.query).filter((value, index, self) => self.indexOf(value) === index)

	return (
		<Results>
			{searchResults.length > 0 ? (
				<Gallery>
					<Heading>{`Results for ${props.query}`}</Heading>
					{searchResults.map((project: IProjectSearch) => (
						<Thumbnail
							key={project.details.header}
							data={project.details}
							thumbnailClick={props.thumbnailClick}
							setQuery={props.setQuery}
						/>
					))}
				</Gallery>
			) : (
				<>
					<Message>
						<Heading>Sorry, no results for {props.query}</Heading>
					</Message>
				</>
			)}

			{relatedResults.length > 0 && (
				<>
					<Gallery>
						<Heading>
							<>
								Related results [
								{relatedResultTags.map((tag, index) => (
									<Tag
										key={tag}
										isLastTag={tag ? index === relatedResultTags.length - 1 : false}
										tag={tag}
										setQuery={props.setQuery}
									/>
								))}
								]
							</>
						</Heading>
						{relatedResults.map((project: IProjectSearch) => (
							<Thumbnail
								key={project.details.header}
								data={project.details}
								thumbnailClick={props.thumbnailClick}
								setQuery={props.setQuery}
							/>
						))}
					</Gallery>
				</>
			)}
		</Results>
	)
}

const queryMatches = (query: string): IProjectSearch[] => {
	const tagMatches: IProject[] = projects.filter(
		(project: IProject) => project.details.tags && project.details.tags.find((tag) => tag.toLowerCase() === query.toLowerCase())
	)
	const skillMatches: IProject[] = projects.filter(
		(project: IProject) =>
			project.content &&
			project.content.find(
				(section) =>
					section.highlight &&
					section.highlight.find((item) => item.tags && item.tags.find((tag) => tag.toLowerCase() === query.toLowerCase()))
			)
	)
	const titleMatches: IProject[] = projects.filter(
		(project: IProject) => project.details.header.toLowerCase().indexOf(query.toLowerCase()) !== -1
	)

	const matches: IProject[] = removeDuplicates([...tagMatches, ...skillMatches, ...titleMatches])
	matches.forEach((match) => ((match as IProjectSearch).query = query))

	return matches as IProjectSearch[]
}

const removeDuplicates = (matches: IProject[]): IProject[] => matches.filter((match, index) => matches.indexOf(match) >= index)

const removeDuplicateTitles = (matches: IProjectSearch[]) =>
	matches.filter((item, pos, array) => array.map((mapItem) => mapItem.details['header']).indexOf(item.details['header']) === pos)

const relatedQueryTags = (query: string) => {
	let tags: any = relatedTags.filter((tags) => tags.find((tag) => tag.toLowerCase() === query.toLowerCase()))
	tags = removeDuplicates([].concat(...tags))
	return tags.filter((tag: TagType | SkillType) => tag !== query)
}

const relatedQueryMatches = (query: string): IProjectSearch[] => {
	const tags: (TagType | SkillType)[] = relatedQueryTags(query)
	return tags.map((tag) => queryMatches(tag)).flat(1) // Flatten IProjectSearch[][] to IProjectSearch[]
}

const Results = styled.div``

const Message = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Gallery = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 450px));
	justify-content: center;

	@media (min-width: ${SMALL_SCREEN}px) {
		grid-template-columns: repeat(2, minmax(200px, 450px));
	}

	> h2 {
		grid-row: 1;
		grid-column: 1/-1;
	}
`
