import * as React from 'react'
import styled from 'styled-components/macro'
import { IHighlight, SkillType, ToolType, TagType } from '../../data/IProject'
import { Tag } from '../shared'
import { Link } from './Section'

interface IHighlightProps {
	data: IHighlight
	setQuery: (query: string) => void
}

export const Highlight: React.FC<IHighlightProps> = (props: IHighlightProps) => {
	const { data } = props
	return (
		<HighlightSection>
			<Header>{data.header}</Header>
			{data.tags && data.tags.length > 0 && (
				<List>
					[{' '}
					{data.tags &&
						(data.tags as (TagType | SkillType | ToolType)[]).map((tag: TagType | SkillType | ToolType, index) => (
							<Tag
								key={index}
								isLastTag={data.tags ? index === data.tags.length - 1 : false}
								tag={tag}
								setQuery={props.setQuery}
							/>
						))}{' '}
					]
				</List>
			)}
			{data.list && data.list.length > 0 && (
				<List>
					{(data.list as string[]).map((item: string, index) => (
						<span key={index}>
							{item}
							{index !== (data.list && data.list.length - 1) && ', '}
						</span>
					))}
				</List>
			)}
			{data.link && <Link href={data.link as string}>{data.link}</Link>}
			{data.body && <Body>{data.body}</Body>}
		</HighlightSection>
	)
}

const HighlightSection = styled.div`
	display: flex;
	padding: 0 8%;

	@media (min-width: 1200px) {
		padding: 0 15%;
	}
`

const Header = styled.h4`
	padding-right: 10px;
	white-space: nowrap;
	&::after {
		content: ': ';
	}
`

const List = styled.p``
const Body = styled.p``
