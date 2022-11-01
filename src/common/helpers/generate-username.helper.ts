import { generateSlug } from '@common/helpers/generate-slug.helper';

export const generateUsername = (name: string) => {
	const slugFromName = generateSlug(name);
	const slugParts = slugFromName.split('-');

	/**
	 * Get the first letter and the last part of the slug
	 *
	 * Ex.: Daniel Sousa -> dsousa
	 */
	return `${slugParts[0].charAt(0)}${slugParts[slugParts.length - 1]}`;
};
