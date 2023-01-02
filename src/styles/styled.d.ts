import 'styled-components';

interface padding {
	container: string;
	home_container: string;
}

interface spacing {
	sm: string;
	md: string;
	lg: string;
	xlg: string;
	xxlg: string;
}

interface transitions {
	sm: string;
	md: string;
	lg: string;
}

interface breakpoints {
	sm: string;
	md: string;
	lg: string;
	xl: string;
}

interface container_widths {
	sm: string;
	md: string;
	lg: string;
	full: string;
}

interface radiusses {
	sm: string;
	md: string;
	lg: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		white_primary: string;
		white_secundary: string;
		warning: string;
		tertiary: string;
		primary: string;
		secundary: string;
		spacing: spacing;
		container_spacing: padding;
		transitions: transitions;
		breakpoints: breakpoints;
		container_widths: container_widths;
		radiusses: radiusses;
		warning_background: string;
	}
}
