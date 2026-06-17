export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function isValidBirthDate(date: string): boolean {
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!regex.test(date)) {
    return false;
  }

  const [day, month, year] = date.split('/').map(Number);

  const birthDate = new Date(year, month - 1, day);

  return (
    birthDate.getDate() === day &&
    birthDate.getMonth() === month - 1 &&
    birthDate.getFullYear() === year
  );
}

export function isFullName(name: string): boolean {
  const parts = name
    .trim()
    .split(' ')
    .filter(Boolean);

  return parts.length >= 2;
}