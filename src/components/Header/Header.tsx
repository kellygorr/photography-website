import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

interface IHeaderProps {
	setIsSearchOpen: (isOpen: boolean) => void
}

export const Header = (props: IHeaderProps): JSX.Element => {
	const handleClick = () => {
		props.setIsSearchOpen(false)
	}
	return (
		<Container>
			<Logo>
				<StyledLink to="/" onClick={handleClick}>
					Kelly Gorr
				</StyledLink>
			</Logo>
			<H2>UX Engineer + Designer</H2>
		</Container>
	)
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	height: 100%;
	padding-top: 50px;

	*:focus {
		border-color: ${({ theme }) => theme.accent};
	}
`

const Logo = styled.h1``
const StyledLink = styled(Link)`
	font-size: 1em;
	font-family: 'montserrat';
	padding: 5px;
	border: 3px solid transparent;
	transition: color 100ms ease-in;

	&:hover {
		color: ${({ theme }) => theme.accent};
	}
`
const H2 = styled.h2`
	padding-top: 8px;
	font-size: 0.9em;
`
