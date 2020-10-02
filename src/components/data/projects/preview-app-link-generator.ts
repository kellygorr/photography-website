import { IProject, TagType, SkillType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/47.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/preview-app-link-generator/previewApp1.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/preview-app-link-generator/previewApp4.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/preview-app-link-generator/previewApp6.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'assets/images/preview-app-link-generator/previewApp3.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/preview-app-link-generator/previewApp2.jpg'

export const previewAppLinkGenerator: IProject = {
	details: {
		header: 'Video App Link Generator',
		thumbnail: thumbnail,
		tags: [TagType.Tooling],
	},
	content: [
		{
			slideshow: {
				width: 1000,
				slides: [
					{
						img: img1,
						caption: 'Starting screen',
					},
					{
						img: img2,
						caption: 'Error messages are included to help users include all the required information',
					},
					{
						img: img3,
						caption: 'Link generated successfully',
					},
					{
						img: img4,
						caption: 'Information section',
					},
					{
						img: img5,
						caption: 'Just for fun',
					},
				],
			},
		},
		{
			header: 'Overview',
			body:
				'This tool creates a link that is used on the Xbox One to launch and play videos with the Xbox’s video player (the Preview App).  The tool can string together multiple videos to play in a row and add video titles, CTA buttons, and redirect links.',
		},
		{
			header: 'Role',
			highlight: [
				{
					header: 'Skills',
					tags: [SkillType.AngularJS, SkillType.JQuery, SkillType.JSON, SkillType.HTML, SkillType.CSS],
				},
			],
			body:
				"I was in charge of designing and creating the tool.  In the original version I used AngularJS's two-way data binding so the user could live-edit and create the link (This version is available to test below). In the final version I removed the live-edit functionality and instead used a ‘generate link’ button, because I didn't want users to have access to an unfinished link.  Details from the original app have been altered or removed.",
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform',
					tags: [TagType.Web],
				},
				{
					header: 'Designer',
					body: 'Kelly Gorr',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr',
				},
			],
		},
	],
}
