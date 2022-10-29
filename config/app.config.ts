import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
	const environment = {
		port: Number(process.env.APP_PORT) || 3333
	};

	return {
		...environment
	};
});
