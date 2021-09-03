import * as React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { SearchIcon } from '../../assets/svg/SearchIcon'
import { SkillType, TagType, ToolType } from '../../data/IProject'
import { useHistory } from 'react-router-dom'
import { SanatizePath, Sanatize, Sidebar } from '../shared'
import { SIDE_GAP } from '../../styles/GlobalStyles'

interface ISearchProps {
	query: string
	setQuery: (query: string) => void
	isSearching: boolean
	isSmallScreen: boolean
	setIsSearching: (isOpen: boolean) => void
	pathname: string
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
		if (props.isSearching) {
			ref.current.focus()
		} else {
			setTriggerContent('closed')
			props.setQuery(null)
		}
	}, [props])

	const handleSearchClick = () => {
		props.setIsSearching(!props.isSearching)
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
			<Sidebar
				isOpen={props.isSearching || props.isSmallScreen}
				setIsOpen={props.setIsSearching}
				isSmallScreen={props.isSmallScreen}
				onClick={handleSearchClick}
				onAnimationComplete={(x) => setTriggerContent(x)}
				ariaLabel={props.isSearching ? 'Close search' : 'Open search'}
			>
				<SearchButton>
					<SearchIcon />
				</SearchButton>
				{props.isSearching && <Input ref={ref} onKeyDown={handleKeyDown} aria-label={'Search field'} defaultValue={props.query} />}
			</Sidebar>
			{props.isSearching && (
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

const Container = styled.div`
	position: absolute;
	top: 135px;
	display: flex;
	flex-direction: column;
	width: 100%;
	z-index: 1000;
`

const SearchButton = styled.div`
	cursor: pointer;
	pointer-events: none;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	svg {
		width: 23px;
		height: 23px;
	}
`

const Input = styled.input`
	height: 100%;
	width: 100%;
	background-color: transparent;
	border: 0;
	text-align: center;
	margin-left: calc(${SIDE_GAP} - 23px - 10px);
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

	color: ${({ theme }) => theme.sidebarText};
	background-color: ${({ theme }) => theme.sidebarBackground};
`
