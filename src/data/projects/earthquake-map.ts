import { IProject, FileType, TagType, SkillType, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/17.jpg'
const thumbnail2 = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/21.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/earthquake-map/large17.jpg'
const pdf1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/earthquake-map/Kelly_Gorr_Code_Sample.pdf'
export const earthquakeMap: IProject = {
	details: {
		header: 'Earthquake Map',
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
					},
				],
			},
		},
		{
			header: 'Overview',
			body: 'A website that mapped worldwide seismic activity that occurred in the past hour, day, week, and month. It also included a rotating list of recent seismic activity, and a comment section for discussion.  The website recorded a lot of interesting information including the underground nuclear tests done in North Korea.',
		},
		{
			header: 'Role',
			body: 'I built and designed the website.  It was connected to a worldwide earthquake feed (no longer available) and I converted the latitude/longitude data I received for each earthquake to the corresponding x/y coordinates for the map I designed.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Skills',
					tags: [
						SkillType.PHP,
						SkillType.JSON,
						SkillType.JavaScript,
						SkillType.JQuery,
						SkillType.MySQL,
						SkillType.Ajax,
						SkillType.HTML,
						SkillType.CSS,
					],
				},
				{
					header: 'Tools',
					tags: [ToolType.Illustrator, ToolType.Photoshop],
				},
			],
		},
		{
			header: 'Code Sample',
			attachments: [
				{
					header: 'Code Sample PDF',
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
