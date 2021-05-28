import { IProject, FileType, SkillType } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/28.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/billboard3.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/billboard1.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/billboard2.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/ffSweepstakes.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/X1-COMP-Billboard-GoldGameE3Promo-ES-MX-v2.jpg'
const img6 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/X1-FUT-Anniversary-billboard-MX-v2-COMP.jpg'
const img7 = process.env.REACT_APP_IMAGE_URL + 'assets/images/xbox-billboards/billboard5.jpg'

const video1 = process.env.REACT_APP_IMAGE_URL + 'assets/videos/iggyazalea.mp4'

export const xboxBillboards: IProject = {
	details: {
		header: 'Xbox Promotional Billboards',
		thumbnail: thumbnail,
		tags: [TagType.Xbox],
	},
	content: [
		{
			slideshow: {
				width: 1250,
				slides: [
					{
						img: img7,
						caption: 'Iggy Azalea Billboard',
						file: {
							type: FileType.Video,
							source: video1,
						},
					},
					{
						img: img2,
						caption: 'Stacked buttons',
					},
					{
						img: img1,
						caption: 'Two buttons with left aligned T&C button',
					},
					{
						img: img3,
						caption: 'One button template launches video',
					},
					{
						img: img4,
						caption: 'Sweepstakes billboard',
					},
					{
						img: img5,
						caption: 'Billboard with countdown clock',
					},
					{
						img: img6,
						caption: 'Fifa Points billboard',
					},
				],
			},
		},
		{
			header: 'Overview',
			body: 'Billboards are single page Xbox One promotions for games, TV, and more.  Hundreds of billboards have been published on the Xbox One since 2013.  They are completely customizable (buttons, text, background video/audio) and can integrate team plugins (preroll videos, slideshows, quizzes, etc.).  Billboard templates and the billboard generator were created to allow team designers to make billboards quickly on their own.',
		},
		{
			header: 'Billboard Templates',
			body: 'The templates for the billboards were continuously evolving and being updated by myself and other members of my team.  I greatly expanded the available customization options adding:   Text customizations, stackable buttons, data tracking, and a scrollable terms and conditions overlay.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform and Accessories',
					tags: [TagType.Xbox, TagType.Kinect],
				},
				{
					header: 'Skills',
					tags: [SkillType.JQuery, SkillType.JSON, SkillType.HTML, SkillType.CSS],
				},
				{
					header: 'Designer(s)',
					body: 'Xbox Programing Team designers',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr & Jana Sheehan',
				},
			],
		},
	],
}
