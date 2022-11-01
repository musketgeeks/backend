const REPLACEMENTS = [
	{
		from: /[àáäâã]/,
		replace: 'a'
	},
	{
		from: /[èéëê]/,
		replace: 'e'
	},
	{
		from: /[ìíïî]/,
		replace: 'i'
	},
	{
		from: /[òóöôõ]/,
		replace: 'o'
	},
	{
		from: /[ùúüû]/,
		replace: 'u'
	},
	{
		from: /ç/,
		replace: 'c'
	},
	{
		from: /ñ/,
		replace: 'n'
	},
	{
		from: /[·\/._:;]/,
		replace: '-'
	},
	{
		from: /[,!?#$"'%()[]*/,
		replace: ''
	}
];

export const generateSlugFromTitle = (title: string) => {
	let slug = title.toLocaleLowerCase().trim();

	// Replaces
	slug = slug
		.replace(/\s+/g, '-') // collapse whitespace and replace by -
		.replace(/-+/g, '-'); // collapse dashes

	// Handle special characters
	REPLACEMENTS.forEach(({ from, replace }) => {
		slug = slug.replace(new RegExp(from, 'g'), replace);
	});

	// Remove other invalid characters
	slug.replace(/[^a-z0-9 -]/g, '');

	return slug;
};
