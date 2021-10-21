import { IProject, FileType, TagType, ToolType, SectionName, HighlightName } from '../IProject'

const thumbnail = 'malaria.jpg'
const thumbnail2 = '19.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/malaria-infographic/large4a.jpg'
const pdf = process.env.REACT_APP_IMAGE_URL + 'assets/images/malaria-infographic/research_based_design.pdf'

export const malariaInfographic: IProject = {
	details: {
		header: 'Malaria Infographic',
		thumbnail: thumbnail,
		tags: [TagType.Infographic],
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
			body: 'Malaria infographic design.',
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
		{
			header: 'Project Statement',
			attachments: [
				{
					header: 'Research Based Design PDF',
					thumbnail: thumbnail2,
					file: {
						type: FileType.Pdf,
						source: pdf,
					},
				},
			],
		},
	],
}
