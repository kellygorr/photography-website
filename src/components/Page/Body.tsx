import styled from 'styled-components/macro'

export const Body = (props: { data: string }): JSX.Element => {
	return <Paragraph dangerouslySetInnerHTML={{ __html: props.data }} />
}

export const Paragraph = styled.p`
	font-size: 16px;
	padding: 10px 8% 0px 8%;

	@media (min-width: 1200px) {
		padding: 10px 15% 0px 15%;
	}

	a {
		&:hover {
			cursor: pointer;
			text-decoration: underline;
		}
	}
`
