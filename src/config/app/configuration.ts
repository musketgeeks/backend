import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
	port: Number(process.env.APP_PORT) ?? 3333
}));
