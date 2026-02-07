import { CONTACT_INFO } from '../constants/contact';

export function getWhatsAppUrl(customMessage?: string): string {
  const whatsappNumber = CONTACT_INFO.phone.whatsapp;
  const defaultMessage = 'Hello! I would like to inquire about your products.';
  const message = customMessage || defaultMessage;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
