import { IProject, FileType } from '../IProject'
import { TagType } from '../IProject'
const thumbnail = 'https://www.kellygorr.com/assets/thumbnails/66.jpg'

const video1 = 'https://www.kellygorr.com/assets/videos/summerME.mp4'
const video2 = 'https://www.kellygorr.com/assets/videos/slipknotXboxI.mp4'

const img1 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer5.png'
const img2 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer8.png'
const img3 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer1.png'
const img4 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer6.png'
const img5 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer3.png'
const img6 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer4.png'
const img7 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer7.png'
const img8 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer14.png'
const img9 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer11.png'
const img10 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer15.png'
const img11 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/summer12.png'

const img12 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/itv6.jpg'
const img13 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/itv3.jpg'
const img14 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/itv4.jpg'
const img15 = 'https://www.kellygorr.com/assets/images/interactive-video-playlist/itv5.jpg'

export const interactiveVideoPlaylist: IProject = {
	details: {
		header: 'Interactive Video Playlist',
		thumbnail: thumbnail,
		tags: [TagType.Xbox, TagType.Quiz, TagType.Poll],
	},
	content: [
		{
			slideshow: [
				{
					img: img1,
					file: {
						type: FileType.Video,
						source: video1,
					},
				},
				{
					img: img2,
					caption: 'Polls and quizzes are added dynamically over the video',
				},
				{
					img: img3,
				},
				{
					img: img4,
					caption: 'Buttons can link to full length videos or purchasable content',
				},
				{
					img: img5,
					caption: 'The dynamic content is customizable',
				},
				{
					img: img6,
				},
				{
					img: img7,
					caption: 'Joke xbox achievement image',
				},
				{
					img: img8,
					caption: 'A fallback quiz can be inserted if the polling database is unavailable',
				},
				{
					img: img9,
				},
				{
					img: img10,
				},
				{
					img: img11,
				},
			],
		},
		{
			header: 'Overview',
			body:
				'Xbox Interactive is a JavaScript app that creates an interactive video playlist. It plays through videos that are customized with interactive pop-in content that have timed appearances throughout the video. The content can be trivia, quizzes, polls, and more. One use for this plugin could be timing pop-in content over a single video, or it could be used to create a video playlist.',
		},
		{
			header: 'Role',
			body:
				'Before building the app I created prototypes that broke down some of the key functionality.  Afterwards I started making the app while working with team designers to put together a large-scale project that would show off all the capabilities of the new technology.  The idea was to have a monthly show on the Xbox where users could watch music videos and viral content that were popular during the month.  The users could purchase the videos, learn interesting facts about them, and play along with polls and quizzes.  For the first show we created a playlists of summer videos.  With the finished app I organized the videos, created the pop-in content (each with custom effects and styles), and added a timestamp to each piece of pop-in content to mark where each would appear over the videos (I built the app to also allow for the timing of the content to be automated).  The project was completed but never launched on the Xbox.',
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform and Accessories',
					tags: [TagType.Xbox, TagType.Kinect],
				},
				{
					header: 'Designer(s)',
					body: 'Bruce Warren & Jacqueline Montplaisir',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr',
				},
			],
		},
		{
			header: 'Interactive Slipknot Music Video',
			slideshow: [
				{
					img: img12,
					file: {
						type: FileType.Video,
						source: video2,
					},
				},
				{
					img: img13,
					caption: 'Fact/trivia',
				},
				{
					img: img14,
					caption: 'Poll',
				},
				{
					img: img15,
					caption: 'Two button billboard with T&C button',
				},
			],
		},
		{
			header: 'Overview',
			body:
				"For the premiere of Slipknot's music video, for ‘The Devil In I’, Xbox wanted to give fans a unique experience.  Our team decided to use the interactive video playlist app that I built to add facts, quizzes, and polls, over the music video.  The team had five days to come up with questions, design the project, and decide how the content should be spaced over the video.  I used the app to organize the videos, and create and style the content (polls/quizzes/facts).",
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform',
					tags: [TagType.Xbox],
				},
				{
					header: 'Accessories',
					tags: [TagType.Kinect],
				},
				{
					header: 'Featured On',
					body: 'Xbox One dashboard home page and music section',
				},
				{
					header: 'Countries',
					list: ['United States', 'Canada (EN-CA)'],
				},
				{
					header: 'Dates',
					body: 'Sept. 2014',
				},
				{
					header: 'Designer(s)',
					body: 'James Aparis',
				},
				{
					header: 'Interaction Design',
					body: 'Kelly Gorr',
				},
			],
		},
	],
}
