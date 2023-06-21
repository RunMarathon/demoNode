// export function that validates email format
export function validateEmail(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

// regex to match the phone numnber in the format +xx (xxx) xxxx-xxxx
const phoneRegex = /^\+\d{2}\s\(\d{3}\)\s\d{4}-\d{4}$/;

// export function that validates phone number format
export function validatePhone(phone: string): boolean {
    return phoneRegex.test(phone);
}
