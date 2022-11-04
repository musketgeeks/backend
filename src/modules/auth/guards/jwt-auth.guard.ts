import {
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
	canActivate(context: ExecutionContext) {
		return super.canActivate(context);
	}

	handleRequest(err, user) {
		if (err || !user) {
			throw new UnauthorizedException(
				`Your session is invalid or already expired. Please login an try again.`
			);
		}

		return user;
	}
}
