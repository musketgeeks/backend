import {
	IsEmail,
	IsEnum,
	IsNotEmpty,
	IsOptional,
	IsString,
	MinLength
} from 'class-validator';

import { Role } from '@common/enums/Role';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsNotEmpty()
	@IsEmail({}, { message: 'Please enter a valid email' })
	readonly email: string;

	@IsOptional()
	@IsString()
	readonly username: string;

	@IsOptional()
	@IsEnum(Role)
	readonly role?: Role = Role.User;

	@IsNotEmpty()
	@IsString()
	@MinLength(6, {
		message: 'Please enter a password with, at least, 6' + ' characters'
	})
	readonly password: string;

	@IsOptional()
	@IsString()
	readonly avatar?: string;
}
