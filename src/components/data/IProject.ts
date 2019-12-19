export enum TagType {
	Xbox = 'Xbox',
	Poll = 'poll',
	Quiz = 'quiz',
	Plugin = 'plugin',
	Tooling = 'tooling',
	Infographic = 'infographic',
	Website = 'website',
	Mobile = 'mobile',
	Web = 'web',
	Kinect = 'Xbox Kinect',
	Print = 'print',
}
export enum SkillType {
	UIUX = 'UI-UX',
	Design = 'design',
	Illustration = 'illustration',
	JQuery = 'jQuery',
	JavaScript = 'JavaScript',
	React = 'React',
	TypeScript = 'TypeScript',
	AngularJS = 'AngularJS',
	PHP = 'PHP',
	MySQL = 'MySQL',
	Ajax = 'Ajax',
	JSON = 'JSON',
	HTML = 'HTML',
	CSS = 'CSS',
}

export enum ToolType {
	Illustrator = 'Illustrator',
	Photoshop = 'Photoshop',
	InDesign = 'InDesign',
}

export const relatedTags: (TagType | SkillType | ToolType)[][] = [
	[SkillType.HTML, SkillType.CSS],
	[SkillType.Illustration, TagType.Infographic],
	[TagType.Poll, TagType.Quiz],
	[SkillType.Design, SkillType.UIUX],
	[TagType.Website, TagType.Mobile],
	[SkillType.JavaScript, SkillType.TypeScript, SkillType.React],
	[SkillType.JavaScript, SkillType.JQuery, SkillType.Ajax],
	[TagType.Website, SkillType.HTML, SkillType.CSS],
	[ToolType.Photoshop, SkillType.Illustration, ToolType.Illustrator],
	[SkillType.PHP, SkillType.MySQL],
	[TagType.Xbox, TagType.Kinect],
	[TagType.Tooling, TagType.Plugin],
]

export enum SectionType {
	Header = 'header',
	Slideshow = 'slideshow',
	Body = 'body',
	Highlight = 'highlight',
	Attachments = 'attachments',
}

export enum FileType {
	Video,
	Image,
	Pdf,
	Link,
}

export interface IProject {
	details: IThumbnail
	content?: ISection[]
}

export interface ISection {
	header?: string
	slideshow?: ISlideshow
	body?: string
	highlight?: IHighlight[]
	attachments?: IThumbnail[]
}

export interface ISlideshow {
	activeColor?: string
	slides: ISlide[]
}
export interface ISlide {
	img: string
	caption?: string
	file?: IFile
}

export interface IHighlight {
	header: string
	tags?: (TagType | SkillType | ToolType)[]
	list?: string[]
	body?: string
}

export interface IFile {
	type: FileType
	source: string
}

export interface IThumbnail {
	header: string
	thumbnail: string
	file?: IFile
	tags?: TagType[]
}
