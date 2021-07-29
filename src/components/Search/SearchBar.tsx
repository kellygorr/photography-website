import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { SearchIcon } from '../../assets/svg/SearchIcon'
import { MEDIUM_SCREEN, SIDE_GAP } from '../../styles/GlobalStyles'
import { SkillType, TagType, ToolType } from '../../data/IProject'
import { useHistory } from 'react-router-dom'
import { SanatizePath, Sanatize } from '../shared'

interface ISearchProps {
	query: string
	setQuery: (query: string) => void
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	pathname: string
}

const searchBar = {
	open: { width: '100%' },
	closed: {
		width: 'auto',
		transition: {
			delay: 0.1,
		},
	},
}

const ideas = {
	open: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
	closed: {
		opacity: 0,
	},
}

const idea = {
	closed: { y: -50 },
	open: { y: 20 },
}

const ideasList = [SkillType.React, TagType.Tooling, ToolType.Photoshop]

export const SearchBar = (props: ISearchProps): JSX.Element => {
	const ref = React.useRef<HTMLInputElement>()
	const history = useHistory()

	const [triggerContent, setTriggerContent] = React.useState('closed')

	React.useEffect(() => {
		if (props.isOpen) {
			ref.current.focus()
		} else {
			setTriggerContent('closed')
			props.setQuery(null)
		}
	}, [props])

	const handleSearchClick = () => {
		props.setIsOpen(!props.isOpen)
	}

	const handleIdeaClick = (item: string) => {
		const query = Sanatize(item)
		const pathname = UpdatePathQuery(props.pathname, query)
		history.replace({ pathname })
		props.setQuery(query)

		ref.current.value = query
	}

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			const query = Sanatize((e.target as HTMLInputElement).value)
			const pathname = UpdatePathQuery(props.pathname, query)
			history.replace({ pathname })
			props.setQuery(query)
		}
	}

	return (
		<Container>
			<SearchBarWrapper>
				<AnimateSearchBar
					variants={searchBar}
					initial={false}
					animate={props.isOpen ? 'open' : 'closed'}
					onAnimationComplete={(x) => setTriggerContent(x.toString())}
				>
					<SearchButton onClick={handleSearchClick}>
						<SearchIcon />
					</SearchButton>
					{props.isOpen && <Input ref={ref} onKeyDown={handleKeyDown} defaultValue={props.query} />}
				</AnimateSearchBar>
			</SearchBarWrapper>
			{props.isOpen && (
				<AnimateIdeas variants={ideas} animate={triggerContent}>
					{ideasList.map((item) => (
						<AnimateIdea key={item} variants={idea} onClick={() => handleIdeaClick(item)}>
							{item}
						</AnimateIdea>
					))}
				</AnimateIdeas>
			)}
		</Container>
	)
}

const UpdatePathQuery = (path: string, query: string) => {
	return `${SanatizePath(path)}?q=${Sanatize(query)}`
}

const ICON_SIZE = 55

const Container = styled.div`
	position: absolute;
	top: 150px;
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-left: ${SIDE_GAP};
	padding-right: ${SIDE_GAP};
	z-index: 1000;
	color: ${({ theme }) => theme.footerText};

	transition: padding-right 200ms ease-out;

	@media (min-width: ${MEDIUM_SCREEN}px) {
		padding-right: 0;
	}
`
const SearchBarWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`
const AnimateSearchBar = styled(motion.div)`
	display: flex;
	height: 40px;
	border-radius: 5px;
	padding: 5px;

	background-color: ${({ theme }) => theme.footerBackground};

	transition: border-radius 200ms ease-out, padding 200ms ease-out;

	@media (min-width: ${MEDIUM_SCREEN}px) {
		padding-right: ${SIDE_GAP};
		border-radius: 5px 0 0 5px;
	}
`

const SearchButton = styled.button`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: ${ICON_SIZE}px;
	min-width: ${ICON_SIZE}px;
	svg {
		width: 23px;
		height: 23px;
		path {
			fill: ${({ theme }) => theme.footerText};
		}
	}
`

const Input = styled.input`
	width: 100%;
	background-color: transparent;
	border: 0;
	text-align: center;
	color: ${({ theme }) => theme.footerText};
	margin-right: ${ICON_SIZE}px;
`

const AnimateIdeas = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	height: 70px;
	min-height: 70px;
	opacity: 0;
	overflow: hidden;
`
const AnimateIdea = styled(motion.div)`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 10px;
	height: 40px;
	padding: 10px;
	width: 150px;
	border-radius: 5px;

	background-color: ${({ theme }) => theme.footerBackground};
`
