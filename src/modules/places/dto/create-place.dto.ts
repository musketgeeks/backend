import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePlaceDto {
	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@IsNotEmpty()
	@IsString()
	readonly slug: string;

	@IsString()
	readonly description: string;

	@IsString()
	readonly lat: string;

	@IsString()
	readonly log: string;

	@IsString()
	readonly city: string;

	@IsString()
	@IsNotEmpty()
	// TODO this is not empty needs to be discussed
	readonly country: string;
}
