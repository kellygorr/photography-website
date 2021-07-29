import * as React from 'react'
import styled from 'styled-components/macro'

interface ITagProps {
	isLastTag: boolean
	tag: string
	setQuery: (query: string) => void
}

export const Tag: React.FC<ITagProps> = (props: ITagProps) => {
	const { isLastTag, tag } = props
	const tagName = tag === 'UI-UX' ? 'UI/UX' : tag

	const handleClick = (text: string) => {
		const query = text
		props.setQuery(query)
	}

	return (
		<>
			<TagButton onClick={() => handleClick(tagName)} tabIndex={-1}>
				{tagName}
			</TagButton>
			{!isLastTag && ', '}
		</>
	)
}

const TagButton = styled.span`
	cursor: pointer;
	width: 100%;
	padding-top: 3px;
	text-align: center;
	font-size: 0.9em;

	&:hover {
		text-decoration: underline;
	}
`
