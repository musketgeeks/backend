import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
	secret: process.env.JWT_SECRET ?? '',
	expires_in_ms: Number(process.env.JWT_EXPIRES_MS) ?? 2 * 60 * 60 * 60 // fallback of 2h
}));
