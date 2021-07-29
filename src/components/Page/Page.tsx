import * as React from 'react'
import styled from 'styled-components/macro'
import { IProject, ISection } from '../../data/IProject'
import { Heading } from './Heading'
import { Section } from './Section'
interface IPageProps {
	data: IProject | null
	setQuery: (query: string) => void
}

export const Page: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.data) {
		return null
	}

	return (
		<Container>
			<Heading>{props.data.details.header}</Heading>
			{props.data.content &&
				props.data.content.map((data: ISection) => {
					const items = Object.entries(data)
					return items.map((item, index) => <Section key={index} type={item[0]} data={item[1]} setQuery={props.setQuery} />)
				})}
		</Container>
	)
}

const Container = styled.div`
	height: 100%;
	width: 100%;
`
