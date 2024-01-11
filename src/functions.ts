import { OtpGeneratorProps } from './types';

export function generateOTP(options: OtpGeneratorProps={length: 4}): string {
    let length: number;

    if (typeof options === 'number') {
        length = options;
    } else if (typeof options === 'object' && typeof options.length === 'number') {
        length = options.length;
    } else {
        throw new Error('Invalid options provided. Please provide a number or an object with a length property.');
    }

    if (typeof length !== 'number') {
        throw new Error('Length should be of type number');
    }

    let num = '0123456789';
    let otp = '';

    for (let i = 0; i < length; i++) {
        otp += num[Math.floor(Math.random() * 10)];
    }

    return otp;
}
