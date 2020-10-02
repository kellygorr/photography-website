import { IProject, TagType, SkillType, FileType } from '../IProject'
import { LoadingColor } from '../../../GlobalStyles'

const thumbnail = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/71.jpg'
const thumbnail2 = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/72.jpg'
const thumbnail3 = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/73.jpg'
const thumbnail4 = process.env.REACT_APP_IMAGE_URL + 'assets/thumbnails/74.jpg'

const img1 = process.env.REACT_APP_IMAGE_URL + 'assets/images/owa-calendar/calendar5.jpg'
const img2 = process.env.REACT_APP_IMAGE_URL + 'assets/images/owa-calendar/calendar3.jpg'
const img3 = process.env.REACT_APP_IMAGE_URL + 'assets/images/owa-calendar/calendar1.jpg'
const img4 = process.env.REACT_APP_IMAGE_URL + 'assets/images/owa-calendar/calendar2.jpg'
const img5 = process.env.REACT_APP_IMAGE_URL + 'assets/images/owa-calendar/calendar4.jpg'

export const owaCalendar: IProject = {
	details: {
		header: 'Outlook Calendar',
		thumbnail: thumbnail,
		tags: [TagType.Microsoft, TagType.Web],
	},
	content: [
		{
			slideshow: {
				activeColor: LoadingColor,
				width: 1735,
				slides: [
					{
						img: img1,
						caption: 'Outlook calendar refresh.  Fabric calendar component (upper left corner)',
					},

					{
						img: img3,
						caption: 'Quick compose',
					},
					{
						img: img4,
						caption: 'Quick compose expanded',
					},
					{
						img: img5,
						caption: 'First run experience (FRE)',
					},
					{
						img: img2,
						caption: 'Previous design',
					},
				],
			},
		},
		{
			header: 'URLs',

			body:
				'Outlook Calendar (subscription required) <br /> <a href="https://outlook-sdf.office.com/calendar/">https://outlook-sdf.office.com/calendar/</a>',
		},
		{
			body:
				'Fabric calendar component (Rebranded to Fluent)<br /> <a href="https://developer.microsoft.com/en-us/fluentui#/controls/web/calendar">https://developer.microsoft.com/en-us/fluentui#/controls/web/calendar</a>',
		},

		{
			header: 'Overview',
			highlight: [
				{
					header: 'Skills',
					tags: [SkillType.TypeScript, SkillType.React, SkillType.Fabric, SkillType.HTML, SkillType.CSS, SkillType.Prototyping],
				},
			],
			body:
				'In 2018 Outlook launched a new Outlook.com that redesigned and added new features to Outlook Mail and Calendar and was built in React.  I partnered with the Calendar and Calendar Capture team as a UX engineer to implement the new Outlook calendar design and features.',
		},
		{
			header: 'Fabric calendar component',
			body:
				'The main feature I worked on for the Calendar team was an updated Fabric calendar component.  It was being used in the project in various places to select a date.  I expanded the functionality of the component by: creating a side by side calendar and year view, adding additional date math to highlight the current week, style refresh, and more.',
		},
		{
			header: 'Quick Compose',
			body: `For the Calendar Capture team I helped to build the new Quick Compose calendar feature.  This feature allows a user to quickly create a calendar event by adding a note to their calendar.  The user can type a note like "Dinner at 7pm McDonalds", and it auto fills an event form with the information.  The user can then make adjustments and save the event.  I built the highlighting UI that occurs on the keywords as the user types a note, along with updating some of the functionality and design of the fabric components used in quick compose.`,
		},
		{
			body: `In the previous year I had created a prototype of this functionality for the Calendar Capture team and I had participated in the user research that used it.  Throughout the research I built different scenarious to test and made improvements to the prototype. Later I was invited back to help the team build it in-product.`,
		},
		{
			header: 'First Run Experience (FRE)',
			body: `To introduce users to the new Quick Compose feature I built the Lightning component that was displayed the first time the user enters their calendar after the feature was launched.`,
		},
		{
			header: 'Details',
			highlight: [
				{
					header: 'Platform',
					tags: [TagType.Web],
				},
				{
					header: 'Featured In',
					body: 'Outlook Calendar (OWA)',
				},
				{
					header: 'Countries',
					list: ['Worldwide'],
				},
				{
					header: 'Dates',
					body: '2018',
				},
				{
					header: 'Designer(s)',
					body: 'Suz Tocco, Justin Pae',
				},
				{
					header: 'Engineering',
					body: 'Kelly Gorr, Calendar Team, Calendar Capture Team',
				},
			],
		},
		{
			header: 'Hype',
			attachments: [
				{
					header: 'The Verge',
					thumbnail: thumbnail2,
					file: {
						type: FileType.Link,
						source: 'https://www.theverge.com/2018/3/14/17121032/microsoft-outlook-web-redesign-features',
					},
				},
				{
					header: 'Microsoft',
					thumbnail: thumbnail3,
					file: {
						type: FileType.Link,
						source:
							'https://www.microsoft.com/en-us/microsoft-365/blog/2018/03/14/new-mail-calendar-and-people-experiences-coming-to-outlook-com/',
					},
				},
				{
					header: 'Microsoft',
					thumbnail: thumbnail4,
					file: {
						type: FileType.Link,
						source:
							'https://techcommunity.microsoft.com/t5/outlook-blog/faster-with-a-modern-design-and-new-features-the-new-outlook-on/ba-p/735222',
					},
				},
			],
		},
	],
}
