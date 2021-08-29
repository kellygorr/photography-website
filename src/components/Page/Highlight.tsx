import * as React from 'react'
import styled from 'styled-components/macro'
import { IHighlight } from '../../data/IProject'
import { Tags } from '../shared'
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
			{data?.tags?.length > 0 && <Tags tags={data.tags} setQuery={props.setQuery} />}
			{data.link && <Link href={data.link as string}>{data.link}</Link>}
			{data.body && <Body>{data.body}</Body>}
		</HighlightSection>
	)
}

const HighlightSection = styled.div`
	display: flex;
`

const Header = styled.h4`
	padding-right: 10px;
	white-space: nowrap;
	&::after {
		content: ': ';
	}
`

const Body = styled.p``
