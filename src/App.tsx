import * as React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components/macro'
import { allProjects } from './data'
import { BOTTOM_GAP, GlobalStyles, LARGE_SCREEN, SIDE_GAP, SMALL_SCREEN } from './styles/GlobalStyles'
import { Header as HeaderContent } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Page } from './components/Page'
import { SearchBar, SearchResults } from './components/Search'
import { themeLight, themeDark } from './styles/theme'
import { SanatizePath, GetPageName, useDarkMode } from './components/shared'
import { AnimatePresence, motion } from 'framer-motion'
import { HighlightName, IHighlight, IProject } from './data/IProject'
import { useMediaQuery } from './components/shared/hooks/useMediaQuery'

const App = (): JSX.Element => {
	const location = useLocation()
	const searchQuery = new URLSearchParams(location.search).get('q')
	const projects: IProject[] = configureProjects(allProjects)
	const [isDarkMode, toggleDarkMode] = useDarkMode()
	const [isSearching, setIsSearching] = React.useState(false)
	// Let's not use a search page.  Google is indexing search pages, which is not a place I want people to land for the first time
	const [query, setQuery] = React.useState(searchQuery)

	const isSmallScreen = useMediaQuery(`(max-width: ${SMALL_SCREEN}px)`)
	React.useEffect(() => {
		if (query) {
			setIsSearching(true)
		}
	}, [query])

	const thumbnailClick = () => {
		setIsSearching(false)
		setQuery(null)
	}

	return (
		<ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
			<AnimatePresence>
				<AppContainer>
					<GlobalStyles />

					<Header>
						{/* ToDo Do not handle closing search from header, use location/route */}
						<HeaderContent setIsSearchOpen={setIsSearching} />
					</Header>

					<SearchBar
						isSearching={isSearching}
						isSmallScreen={isSmallScreen}
						setIsSearching={setIsSearching}
						query={query}
						setQuery={setQuery}
						pathname={location.pathname}
					/>

					<Canvas>
						<AnimateContent
							key={location.pathname + isSearching}
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
								isSearching && (
									<ResultsWrapper>
										<SearchResults
											projects={projects}
											query={query}
											thumbnailClick={thumbnailClick}
											setQuery={setQuery}
										/>
									</ResultsWrapper>
								)
							}

							{!isSearching && (
								<Switch>
									<Route
										path="/page/:title?"
										render={({ match }) => {
											const projectName = SanatizePath(match.params.title)
											const project = projects.find((project) => projectName === GetPageName(project.details.header))
											return project ? (
												<PageWrapper>
													<Page header={project.details.header} content={project.content} setQuery={setQuery} />
												</PageWrapper>
											) : (
												<Redirect to="/" />
											)
										}}
									/>
									<Route
										path="/"
										render={() => (
											<HomeWrapper>
												<Home projects={projects} isDarkMode={isDarkMode} setQuery={setQuery} />
											</HomeWrapper>
										)}
									/>
								</Switch>
							)}
						</AnimateContent>
					</Canvas>

					<Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isSmallScreen={isSmallScreen} />
				</AppContainer>
			</AnimatePresence>
		</ThemeProvider>
	)
}

export default App

const configureProjects = (projects: IProject[]): IProject[] => {
	projects?.forEach((project, index) => {
		const highlights: IHighlight[] = []

		project?.content?.forEach((section) => {
			section?.highlight?.forEach((highlight) => {
				if (highlight.tags && highlight.header !== HighlightName.Localization) {
					highlights.push(highlight)
				}
			})
		})

		if (highlights) {
			project.details.highlights = highlights
		}

		console.log(project.details.header)

		if (index === projects.length - 1) {
			const result: IHighlight[] = Object.values(
				project.details.highlights.reduce((c, { header, tags }) => {
					c[header] = c[header] || { header, tags: [] }
					c[header].tags = c[header].tags.concat(Array.isArray(tags) ? tags : [tags])
					return c
				}, {})
			)

			if (result) {
				project.details.highlights = result
			}

			console.log('result', result)
		}
	})

	return projects
}

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
	display: flex;
	flex-direction: column;
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
const PageWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: ${BOTTOM_GAP};
`
const ResultsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	padding: 150px ${SIDE_GAP} ${BOTTOM_GAP} ${SIDE_GAP};
`
const AnimateContent = styled(motion.div)`
	display: flex;
	flex-direction: column;
	flex: 1;
`
