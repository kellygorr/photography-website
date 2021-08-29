import * as React from 'react'
import styled from 'styled-components/macro'
import { SkillType, TagType, ToolType } from '../../../data/IProject'

import { Tag } from './Tag'

interface IThumbnailProps {
	tags: (TagType | SkillType | ToolType | string)[]
	setQuery: (query: string) => void
}

export const Tags = (props: IThumbnailProps): JSX.Element => {
	return (
		<TagWrapper aria-hidden>
			{props.tags.map((tag, index) => (
				<Tag key={index} isLastTag={index === props.tags.length - 1} tag={tag} setQuery={props.setQuery} />
			))}
		</TagWrapper>
	)
}

export const TagWrapper = styled.div`
	&:before {
		content: '[ ';
	}

	&:after {
		content: ' ]';
	}
`
