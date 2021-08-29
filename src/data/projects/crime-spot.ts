import { IProject, FileType, TagType, ToolType, SectionName, HighlightName } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/22.jpg'
const thumbnail2 = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/19.png'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/crime-spot/crimespot_1.png'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/crime-spot/crimespot_2.png'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/crime-spot/crimespot_3.png'

const pdf1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/crime-spot/kelly_gorr_web_integration.pdf'
export const crimeSpot: IProject = {
	details: {
		header: 'Crime Spot',
		thumbnail: thumbnail,
		tags: [TagType.Website, TagType.Mobile],
	},
	content: [
		{
			slideshow: {
				width: 1250,
				slides: [
					{
						img: img1,
						caption: 'Mobile and web',
					},
					{
						img: img2,
						caption: 'Start, settings, and map screens',
					},
					{
						img: img3,
						caption: "Map filtered by 'assualt' and 'homicide', map with selection, and news details",
					},
				],
			},
		},
		{
			header: SectionName.Overview,
			body: 'Mobile/web design for an entertainment app that allows people to track real life homicides and other violent crime in their city.',
		},
		{
			header: SectionName.Details,
			highlight: [
				{
					header: HighlightName.Tools,
					tags: [ToolType.Illustrator, ToolType.Photoshop, ToolType.InDesign],
				},
			],
		},
		{
			header: 'Project Statement',
			attachments: [
				{
					header: 'Web/Mobile Integration PDF',
					thumbnail: thumbnail2,
					file: {
						type: FileType.Pdf,
						source: pdf1,
					},
				},
			],
		},
	],
}
