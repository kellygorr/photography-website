import { HighlightName, IProject, SectionName, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/3.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/k-monogram/large6.jpg'

export const kMonogram: IProject = {
	details: {
		header: 'K Monogram',
		thumbnail: thumbnail,
	},
	content: [
		{
			slideshow: {
				width: 1250,
				slides: [
					{
						img: img1,
					},
				],
			},
		},
		{
			header: SectionName.Overview,
			body: 'K monogram design.',
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
