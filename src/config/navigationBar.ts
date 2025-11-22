// Navigation Bar
// ------------
// Description: The navigation bar data for the website.

export interface Logo {
	src: string
	srcDark: string
	alt: string
	text: string
}

export interface NavSubLink {
	name: string
	link: string
	badge?: string
}

export interface NavSubItem {
	name?: string
	icon?: string
	links: NavSubLink[]
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
	align?: string
	badge?: string
}

export interface NavAction {
	name: string
	link?: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export async function getNavigationBarData(locale: string = 'en') {
	const localePath = locale === 'fr' ? 'fr' : 'en'
	const { default: data } = await import(`../data/json-files/${localePath}/navigationBarData.json`)
	return data as NavData
}
