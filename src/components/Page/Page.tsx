import * as React from 'react'
import styled from 'styled-components/macro'
import { ISection } from '../../data/IProject'
import { Heading } from './Heading'
import { Section } from './Section'
interface IPageProps {
	header: string
	content: ISection[]
	setQuery: (query: string) => void
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => (
	<Container>
		<Heading>{props.header}</Heading>
		{props.content &&
			props.content.map((data: ISection) => {
				const items = Object.entries(data)
				return items.map((item, index) => <Section key={index} type={item[0]} data={item[1]} setQuery={props.setQuery} />)
			})}
	</Container>
)

const Container = styled.div`
	font-size: 1.2rem;
	line-height: 1.9rem;
`
