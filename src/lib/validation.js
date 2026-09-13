const INDIAN_MOBILE = /^(?:\+91|91|0)?([6-9]\d{9})$/;

export function validateRequired(value, fieldLabel) {
  if (!value || !String(value).trim()) {
    return `${fieldLabel} is required.`;
  }
  return "";
}

export function validateIndianMobile(value) {
  if (!value || !String(value).trim()) {
    return "Mobile number is required.";
  }
  const cleaned = String(value).replace(/[\s-]/g, "");
  if (!INDIAN_MOBILE.test(cleaned)) {
    return "Enter a valid 10-digit Indian mobile number.";
  }
  return "";
}

export function validateFutureDate(value) {
  if (!value) return "Pick a date.";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const picked = new Date(`${value}T00:00:00`);
  if (Number.isNaN(picked.getTime())) return "Enter a valid date.";
  if (picked < today) return "Pick a date that hasn't passed yet.";
  return "";
}

const MIN_MINUTES = 9 * 60;
const MAX_MINUTES = 20 * 60;

export function validatePlausibleTime(value) {
  if (!value) return "Pick a time.";
  const [hours, minutes] = value.split(":").map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes))
    return "Enter a valid time.";
  const total = hours * 60 + minutes;
  if (total < MIN_MINUTES || total > MAX_MINUTES) {
    return "Pick a time between 9:00 AM and 8:00 PM.";
  }
  return "";
}

export function validateBookingForm(values) {
  return {
    name: validateRequired(values.name, "Name"),
    phone: validateIndianMobile(values.phone),
    service: validateRequired(values.service, "Service"),
    date: validateFutureDate(values.date),
    time: validatePlausibleTime(values.time),
  };
}

export function hasErrors(errors) {
  return Object.values(errors).some(Boolean);
}
