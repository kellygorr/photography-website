import * as React from 'react'
import styled from 'styled-components/macro'
interface IPageProps {
	children?: React.ReactNode
}

export const Heading: React.FC<IPageProps> = (props: IPageProps) => {
	if (!props.children) {
		return null
	}

	return <Container>{props.children}</Container>
}

const Container = styled.h2`
	display: flex;
	font-family: 'Museo_Slab_500_2';
	font-size: 1.5rem;
	line-height: initial;

	&:first-child {
		padding-top: 0;
	}

	/* The paragraph immediately after a header does not need to have padding-top (this is covered by the header) */
	+ p {
		padding-top: 0;
	}

	border-color: ${({ theme }) => theme.thumbnail};
`
