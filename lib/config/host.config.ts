import { isProduction } from './env.config';

if (isProduction) throw new Error('No production host URLs configured');

export const webBaseUrl = 'localhost:3000';
export const apiBaseUrl = 'http://localhost:1337';