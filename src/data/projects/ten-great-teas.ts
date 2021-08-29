import { HighlightName, IProject, SectionName, TagType, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/2.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/ten-great-teas/large2a.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/ten-great-teas/large2b.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/ten-great-teas/large2c.jpg'

export const tenGreatTeas: IProject = {
	details: {
		header: 'Ten Great Teas',
		thumbnail: thumbnail,
		tags: [TagType.Infographic],
	},
	content: [
		{
			slideshow: {
				width: 1250,
				neutralBorder: true,
				slides: [
					{
						img: img1,
						caption: 'Main screen',
					},
					{
						img: img2,
						caption: 'Main screen with selected state',
					},
					{
						img: img3,
						caption: 'Tea details screen',
					},
				],
			},
		},
		{
			header: SectionName.Overview,
			body: 'Interface design for an interactive tea map for Tazo tea.',
		},
		{
			header: SectionName.Details,
			highlight: [
				{
					header: HighlightName.Tools,
					tags: [ToolType.Illustrator],
				},
			],
		},
	],
}
