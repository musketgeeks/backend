import {
	IsEnum,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString
} from 'class-validator';

import { Transportation } from '@common/enums/Transportation';

export class CreateTravelDto {
	//TODO need to add the user_id connection??

	@IsNotEmpty()
	@IsString()
	readonly name: string;

	@IsNumber()
	@IsNotEmpty()
	// TODO needs to be discussed due to being empty or not
	readonly duration: number;

	@IsString()
	@IsOptional()
	readonly begins: string;

	@IsString()
	@IsOptional()
	readonly city: string;

	@IsString()
	@IsNotEmpty()
	readonly country: string;

	@IsEnum(Transportation)
	@IsNotEmpty()
	readonly transportation: Transportation;
}
