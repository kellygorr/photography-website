import * as React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components/macro'
import { projects } from './data'
import { BOTTOM_GAP, GlobalStyles, LARGE_SCREEN, SIDE_GAP } from './styles/GlobalStyles'
import { Header as HeaderContent } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Page } from './components/Page'
import { SearchBar, SearchResults } from './components/Search'
import { themeLight, themeDark } from './styles/theme'
import { SanatizePath, GetPageName, useDarkMode } from './components/shared'
import { AnimatePresence, motion } from 'framer-motion'

const App = (): JSX.Element => {
	const location = useLocation()
	const searchQuery = new URLSearchParams(location.search).get('q')

	const [isDarkMode, toggleDarkMode] = useDarkMode()
	const [isSearchOpen, setIsSearchOpen] = React.useState(false)
	// Let's not use a search page.  Google is indexing search pages, which is not a place I want people to land for the first time
	const [query, setQuery] = React.useState(searchQuery)

	React.useEffect(() => {
		if (query) {
			setIsSearchOpen(true)
		}
	}, [query])

	const thumbnailClick = () => {
		setIsSearchOpen(false)
		setQuery(null)
	}

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
			<AnimatePresence>
				<AppContainer>
					<GlobalStyles />

					<Header>
						<HeaderContent setIsSearchOpen={setIsSearchOpen} />
					</Header>

					<SearchBar
						isOpen={isSearchOpen}
						setIsOpen={setIsSearchOpen}
						query={query}
						setQuery={setQuery}
						pathname={location.pathname}
					/>

					<Canvas>
						<AnimateContent
							key={location.pathname + isSearchOpen}
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									delay: 0.25,
								},
							}}
							exit={{ opacity: 0 }}
						>
							{
								// Search results occur ontop of the current page
								isSearchOpen && (
									<ResultsWrapper>
										<SearchResults query={query} thumbnailClick={thumbnailClick} setQuery={setQuery} />
									</ResultsWrapper>
								)
							}

							{!isSearchOpen && (
								<Switch>
									<Route
										path="/page/:title?"
										render={({ match }) => {
											const projectName = SanatizePath(match.params.title)
											const project = projects.find((project) => projectName === GetPageName(project.details.header))
											return project ? <Page data={project} setQuery={setQuery} /> : <Redirect to="/" />
										}}
									/>
									<Route
										path="/"
										render={() => (
											<HomeWrapper>
												<Home isDarkMode={isDarkMode} setQuery={setQuery} />
											</HomeWrapper>
										)}
									/>
								</Switch>
							)}
						</AnimateContent>
					</Canvas>

					<Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} setQuery={setQuery} />
				</AppContainer>
			</AnimatePresence>
		</ThemeProvider>
	)
}

export default App

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	min-width: 300px;
	background: ${({ theme }) => theme.background};

	transition: background 0.5s ease-in;
`
const Header = styled.header`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
`
const Canvas = styled.main`
	flex: 1;
	min-height: 250px; // This prevents footer from crowding search when it is empty and window is height is small
`

const HomeWrapper = styled.div`
	padding: 70px ${SIDE_GAP} 8% ${SIDE_GAP};
	transition: padding 0.5s ease-out;

	@media (min-width: ${LARGE_SCREEN}px) {
		padding: 20px 8% 8% 8%;
	}
`
const ResultsWrapper = styled.div`
	width: 100%;
	padding: 150px ${SIDE_GAP} ${BOTTOM_GAP} ${SIDE_GAP};
`
const AnimateContent = styled(motion.div)``
