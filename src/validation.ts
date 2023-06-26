// export function that validates email format
export function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// regex to match the phone number in the format +xx (xxx) xxxx-xxxx
export function validatePhone(phone: string): boolean {
    return /^\+\d{2} \(\d{3}\) \d{4}-\d{4}$/.test(phone);
}















