# Simple OTP Generator

Generate one-time passwords (OTPs) with ease.

## Installation

```
npm install simple-otp-generator
```

## Usage
```
import { generateOTP } from 'simple-otp-generator';

// Default length is 4
const otp1 = generateOTP();
console.log('Generated OTP (default length):', otp1);

// Specify length as an option
const otp2 = generateOTP({ length: 6 });
console.log('Generated OTP (length 6):', otp2);

// Provide length directly (backward compatible)
const otp3 = generateOTP(8);
console.log('Generated OTP (length 8):', otp3);
```

## Options

```
length (optional)
Type: number
Default: 4
Description: The length of the generated OTP.
```
