import { COPY } from '../../constants/copy';
import { getWhatsAppUrl } from '../../utils/whatsapp';

export function WhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-[oklch(0.55_0.15_145)] text-white hover:bg-[oklch(0.50_0.15_145)] h-10 px-6"
    >
      <img
        src="/assets/generated/icon-whatsapp-earthy.dim_128x128.png"
        alt="WhatsApp"
        className="h-5 w-5 mr-2"
      />
      {COPY.contact.whatsapp}
    </a>
  );
}
