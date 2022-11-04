import { Injectable } from '@nestjs/common';

import { GetUserService } from '@modules/users/services/get-user.service';

@Injectable()
export class VerifyService {
	constructor(private getUserService: GetUserService) {}
}
