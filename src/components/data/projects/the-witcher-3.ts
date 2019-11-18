import { IProject, FileType, SkillType } from '../IProject'
import { TagType } from '../IProject'

const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/60.jpg'
const thumbnail2 = 'https://www.kellygorr.com/assets/thumbnails/36.jpg'

const img1 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher2.jpg'
const img2 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher3.jpg'
const img3 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher5.jpg'
const img4 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher6.jpg'
const img5 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher7.jpg'
const img6 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher9.jpg'
const img7 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher10.jpg'
const img8 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher11.jpg'
const img9 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher12.jpg'
const img10 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witchera.jpg'
const img11 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher13.jpg'
const img12 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher14.jpg'
const img13 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher8.jpg'
const img14 = 'https://www.kellygorr.com/assets/images/the-witcher-3/witcher1.jpg'

const video1 = 'https://www.kellygorr.com/assets/videos/witcherPollOpt.mp4'

export const theWitcher3: IProject = {
	title: 'The Witcher 3 Xbox Launch',
	subtitle: 'subtitle',
	thumbnail: thumbnail,
	tags: [TagType.Xbox, TagType.Poll, TagType.Quiz],
	content: [
		{
			slideshow: [
				{
					img: img1,
					caption: 'Main menu with animated background (Pre-launch)',
				},
				{
					img: img2,
					caption: 'Watch section shows subnav with trailers and gameplay',
				},
				{
					img: img3,
					caption: 'Character gallery with center carousel navigation.',
				},
				{
					img: img4,
					caption: 'Character details page',
				},
				{
					img: img5,
					caption: 'Image slideshow',
				},
				{
					img: img6,
					caption: 'Quiz with animated background',
				},
				{
					img: img7,
					caption: 'Quiz question',
				},
				{
					img: img8,
					caption: 'Quiz incorrect answer message',
				},
				{
					img: img9,
					caption: 'Quiz results page with animated background',
				},
				{
					img: img10,
					caption: 'Post-launch experience with new content',
				},
				{
					img: img11,
					caption: 'Post-launch poll',
				},
				{
					img: img12,
					caption: 'Post-launch monster bestiary',
				},
				{
					img: img13,
					caption: 'Quiz featured as a stand-alone experience on the Xbox One',
				},
				{
					img: img14,
					caption: 'Xbox One games section feature',
				},
			],
		},
		{
			header: 'Overview',
			body:
				'This large promotion provided games and content for fans to explore including: trailers and gameplay videos, character/weapon/monster galleries, quizzes, and a poll.  A pre-launch version ran before The Witcher 3 was released and a post-launch version ran that added new videos, content and games.',
		},
		{
			header: 'Role',
			highlight: [
				{
					header: 'Skills',
					tags: [
						SkillType.UIUX,
						SkillType.JQuery,
						SkillType.JavaScript,
						SkillType.Ajax,
						SkillType.JSON,
						SkillType.HTML,
						SkillType.CSS,
					],
				},
			],
			body:
				'I was responsible for building the entire promotion, excluding the hunt section (built by a teammate).  This involved working through the UX of the main sections, galleries, and games with designers to ensure that the promotion would be easy to navigate on the Xbox, and to establish all the functionality I would need to code.  I built the promotion to be compatible with the Xbox controller and the Xbox Kinect (voice and gesture), and I also implemented custom user data tracking.  After building the promotion I added all the localized assets (videos, images, sound), and text for the other regions.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform',
					tags: [TagType.XboxKinect],
				},
				{
					header: 'Featured On',
					body: 'Xbox One dashboard home page and games section',
				},
				{
					header: 'Countries',
					list: ['United States', 'Canada (EN-CA & FR-CA)', 'United Kingdom', 'Mexico', 'Brazil', 'France', 'Spain', 'Germany'],
				},
				{
					header: 'Dates',
					body: 'May 2015 - June 2015',
				},
				{
					header: 'Design Lead',
					body: 'Karlo Reyes',
				},
				{
					header: 'Designer(s)',
					body: 'Annie Marten & Eric Embry',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr & Jana Sheehan',
				},
			],
		},
		{
			header: 'Xbox One Video Capture',
			attachments: [
				{
					img: thumbnail2,
					caption: 'Witcher 3 Poll',
					type: FileType.Video,
					source: video1,
				},
			],
		},
	],
}
