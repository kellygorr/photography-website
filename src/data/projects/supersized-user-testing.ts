import { IProject, FileType, ToolType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/23.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/supersized-user-testing/large22e.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/supersized-user-testing/large22a.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/supersized-user-testing/large22b.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'assets/images/supersized-user-testing/large22c.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/supersized-user-testing/large22d.jpg'

const pdf = process.env.REACT_APP_IMAGE_URL + 'assets/images/supersized-user-testing/kelly_gorr_user_testing_plan.pdf'

export const supersizedUserTesting: IProject = {
	details: {
		header: 'Supersized User Testing',
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
					{
						img: img2,
						caption: 'Part 1 tested a paper prototype of the interface',
					},
					{
						img: img3,
						caption: 'I experimented with graph visualizations',
					},
					{
						img: img4,
					},
					{
						img: img5,
					},
				],
			},
		},
		{
			header: 'Overview',
			body: 'I designed a CMS for the Supersized! slideshow plugin and conducted small-scale user testing to test the interface. The full document with methods and conclusions is available below.  In part 1, volunteers experience the interface through a paper prototype, and the results are used to create an updated digital prototype that is used for testing in part 2.<br/>View the PDF below to see the full methods and conclusions.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Tools',
					tags: [ToolType.InDesign],
				},
			],
		},
		{
			header: 'Methods and Results',
			attachments: [
				{
					header: 'Testing PDF',
					thumbnail: thumbnail,
					file: {
						type: FileType.Pdf,
						source: pdf,
					},
				},
			],
		},
	],
}
