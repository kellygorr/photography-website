import * as React from 'react'
import styled from 'styled-components/macro'
import { SkillType, TagType, ToolType } from '../../../data/IProject'

import { Tag } from './Tag'

interface IThumbnailProps {
	tags: (TagType | SkillType | ToolType | string)[]
}

export const Tags: React.FC<IThumbnailProps> = (props: IThumbnailProps) => {
	return (
		<TagWrapper aria-hidden>
			{props.tags.map((tag, index) => (
				<Tag key={index} isLastTag={index === props.tags.length - 1} tag={tag} />
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
