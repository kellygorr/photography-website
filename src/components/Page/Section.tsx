import * as React from 'react'
import styled from 'styled-components/macro'
import { createRef } from 'react'
import { ISlideshow, SectionType, IHighlight, IThumbnail } from '../../data/IProject'
import { Body, Paragraph } from './Body'
import { Highlight } from './Highlight'
import { Slideshow } from './Slideshow/Slideshow'
import { Thumbnail } from '../shared'
import { Heading } from '.'

interface ISectionProps {
	type: string
	data: string | ISlideshow | IThumbnail[] | IHighlight[]
	setQuery: (query: string) => void
}

export const Section: React.FC<ISectionProps> = (props: ISectionProps) => {
	return (
		<>
			{props.type === SectionType.Header && <Heading>{props.data as string}</Heading>}
			{props.type === SectionType.Slideshow && (
				<Slideshow
					data={(props.data as ISlideshow).slides}
					neutralBorder={(props.data as ISlideshow).neutralBorder}
					defaultWidth={(props.data as ISlideshow).width}
					slideshowRef={createRef<HTMLDivElement>()}
				/>
			)}
			{props.type === SectionType.Body && <Body data={props.data as string} />}
			{props.type === SectionType.Highlight &&
				(props.data as IHighlight[]).map((data, index) => (
					<Highlight key={index} data={data as IHighlight} setQuery={props.setQuery} />
				))}
			{props.type === SectionType.Attachments && (
				<Gallery>
					{(props.data as IThumbnail[]).map((data, index) => (
						<ThumbnailWrapper key={index}>
							<Thumbnail data={data} setQuery={props.setQuery} />
						</ThumbnailWrapper>
					))}
				</Gallery>
			)}
			{props.type === SectionType.Link && (
				<Paragraph>
					<Link>{props.data as string}</Link>
				</Paragraph>
			)}
		</>
	)
}

const Gallery = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const ThumbnailWrapper = styled.div`
	max-width: 450px;
`

export const Link = styled.a`
	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`
