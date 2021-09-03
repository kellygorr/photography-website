export const Sanatize = (text: string): string => text.replace(/[^-,^/,a-zA-Z0-9]/g, '').toLowerCase()

export const SanatizePath = (text: string): string => {
	// Remove extra params.  Params start with ?
	const path = text.split('?')[0]
	return Sanatize(path)
}

export const GetPageName = (text: string): string => {
	const path = text.replaceAll(' ', '-')
	return Sanatize(path)
}
