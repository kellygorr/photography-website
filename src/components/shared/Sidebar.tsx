import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { SIDE_GAP } from '../../styles/GlobalStyles'

interface ISidebarProps {
	ariaLabel: string
	isOpen: boolean
	isSmallScreen: boolean
	style?: React.CSSProperties
	onClick: () => void
	setIsOpen: (isOpen: boolean) => void
	onAnimationComplete?: (x: string) => void
	children?: React.ReactNode
}

const sidebar = {
	open: { width: '100%', marginRight: SIDE_GAP },
	closed: {
		marginRight: 0,
		width: 'auto',
		paddingRight: SIDE_GAP,
		transition: {
			delay: 0.1,
		},
	},
}

export const Sidebar = (props: ISidebarProps): JSX.Element => {
	const isCentered = props.isSmallScreen || props.isOpen
	const sidebarStyles: React.CSSProperties = {
		borderRadius: isCentered ? '5px' : '5px 0 0 5px',
		...props.style,
	}

	return (
		<Container>
			<AnimateSidebar
				onClick={props.onClick}
				variants={sidebar}
				initial={false}
				animate={props.isOpen || props.isSmallScreen ? 'open' : 'closed'}
				onAnimationComplete={(x) => props.onAnimationComplete && props.onAnimationComplete(x.toString())}
				style={sidebarStyles}
				aria-label={props.ariaLabel}
			>
				{props.children}
			</AnimateSidebar>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-left: ${SIDE_GAP};
`
const AnimateSidebar = styled(motion.button)`
	display: flex;
	justify-content: center;
	height: 40px;
	padding-left: 10px;
	border-radius: 5px;
	color: ${({ theme }) => theme.sidebarText};
	background-color: ${({ theme }) => theme.sidebarBackground};

	svg {
		path {
			fill: ${({ theme }) => theme.sidebarText};
		}
	}

	input {
		color: ${({ theme }) => theme.sidebarText};
	}
	transition: border-radius 200ms ease-out;

	&:focus {
		outline: 2px solid ${({ theme }) => theme.accent};
	}
`
