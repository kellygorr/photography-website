export enum TagType {
	XboxOne = 'Xbox One',
	Poll = 'poll',
	Quiz = 'quiz',
	InteractiveVideo = 'interactive video',
	Plugin = 'plugin',
	UIUX = 'UI/UX',
	Tool = 'tool',
	Design = 'design',
	InterfaceDesign = 'interface design',
	Illustration = 'illustration',
	Infographic = 'infographic',
	Website = 'website',
	WebDesign = 'web design',
	MobileDesign = 'mobile design',
	EmailDesign = 'email design',
}

export enum SectionType {
	Header = 'header',
	Slideshow = 'slideshow',
	Body = 'body',
	attachments = 'attachments',
}

export enum FileType {
	Video,
	Image,
}

export interface IProject {
	title: string
	subtitle: string
	thumbnail: string
	content: ISection[] | any
	tags?: TagType[]
}

export interface ISection {
	header?: string
	slideshow?: ISlideshow[]
	body?: string
	attachments?: IAttachment[]
}

export interface ISlideshow {
	img: string
	caption?: string
}

export interface IAttachment {
	img: string
	caption?: string
	type: FileType
	source: string
}
