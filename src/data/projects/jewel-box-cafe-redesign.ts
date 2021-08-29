import { IProject, FileType, TagType, SkillType, ToolType, SectionName, HighlightName } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/5.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/jewel-box-cafe-redesign/large5.jpg'

export const jewelBoxCafe: IProject = {
	details: {
		header: 'Jewel Box Cafe Redesign',
		thumbnail: thumbnail,
		tags: [TagType.Website],
	},
	content: [
		{
			slideshow: {
				width: 1250,
				slides: [
					{
						img: img1,
						file: {
							type: FileType.Link,
							source: 'sites/type_website/',
						},
					},
				],
			},
		},
		{
			header: SectionName.Overview,
			body: 'Website redesign and navigation demo.',
		},
		{
			header: SectionName.Details,
			highlight: [
				{
					header: HighlightName.Skills,
					tags: [SkillType.JavaScript, SkillType.HTML, SkillType.CSS],
				},
				{
					header: HighlightName.Tools,
					tags: [ToolType.Illustrator],
				},
			],
		},
	],
}
