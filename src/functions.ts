import { OtpGeneratorProps, PasswordGenertorProps } from './types';

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

export function generatePassword(options: PasswordGenertorProps={length: 6}): string {
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

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*_";
  
    const randomNumericChar = numericChars.charAt(Math.floor(Math.random() * numericChars.length));
    const randomSpecialChar = specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  
    const remainingLength = length - 2;
    const allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;
    let password = randomNumericChar + randomSpecialChar;
  
    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars.charAt(randomIndex);
    }
  
    // Shuffle the password characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');
  
    return password;
}

generatePassword();