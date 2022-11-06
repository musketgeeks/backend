import { OmitType } from '@nestjs/mapped-types';

import { CreateUserDto } from '@modules/users/dtos/create-user.dto';

export class RegisterDto extends OmitType(CreateUserDto, ['avatar']) {}
