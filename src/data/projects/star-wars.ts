import { IProject, FileType, SkillType, SectionName, HighlightName } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/49.jpg'

const video1 = process.env.REACT_APP_IMAGE_URL + 'assets/videos/starWars.mp4'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/star-wars/starwars1.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/star-wars/starwars2.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/star-wars/starwars3.png'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/star-wars/starwars5.png'

export const starWars: IProject = {
	details: {
		header: 'Star Wars Xbox Promotion',
		thumbnail: thumbnail,
		tags: [TagType.Xbox],
	},
	content: [
		{
			slideshow: {
				width: 1920,
				slides: [
					{
						img: img1,
						file: {
							type: FileType.Video,
							source: video1,
						},
					},
					{
						img: img2,
						caption: 'Slideshow',
					},
					{
						img: img3,
						caption: 'Billboard promotion',
					},
					{
						img: img5,
						caption: 'Placement on the Xbox Dashboard',
					},
				],
			},
		},
		{
			header: SectionName.Role,
			body: 'I built a promotion for Star Wars that included a home page, slideshow, and promotional offer billboard. I also added all the assets and localized text.',
		},
		{
			header: SectionName.Details,
			highlight: [
				{
					header: HighlightName.Skills,
					tags: [SkillType.JavaScript, SkillType.JQuery, SkillType.HTML, SkillType.CSS],
				},
				{
					header: HighlightName.Platform_Accessories,
					tags: [TagType.Xbox, TagType.Kinect],
				},
				{
					header: HighlightName.Featured_On,
					body: 'Xbox One dashboard: home page, Movie & TV, and Gold Lounge',
				},
				{
					header: HighlightName.Localization,
					tags: ['United States', 'Canada (EN-CA & FR-CA)', 'United Kingdom', 'Mexico', 'Brazil', 'France', 'Spain', 'Germany'],
				},
				{
					header: HighlightName.Dates,
					body: 'April 2016',
				},
				{
					header: HighlightName.Designer,
					body: 'Eric Embry',
				},
				{
					header: HighlightName.Engineer,
					body: 'Kelly Gorr & Jana Sheehan',
				},
			],
		},
		{
			header: SectionName.Hype,
			attachments: [
				{
					header: 'Kotaku article',
					thumbnail: thumbnail,
					file: {
						type: FileType.Link,
						source: 'http://kotaku.com/the-force-awakens-on-game-consoles-1768991827#',
					},
				},
			],
		},
	],
}
