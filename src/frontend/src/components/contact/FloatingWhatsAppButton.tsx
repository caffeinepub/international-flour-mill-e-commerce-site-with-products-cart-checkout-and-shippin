import { getWhatsAppUrl } from '../../utils/whatsapp';

export function FloatingWhatsAppButton() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-4 md:left-6 z-30 inline-flex items-center justify-center rounded-full bg-[oklch(0.55_0.15_145)] text-white shadow-lg hover:bg-[oklch(0.50_0.15_145)] transition-colors h-14 w-14"
      title="Chat on WhatsApp"
    >
      <img
        src="/assets/generated/icon-whatsapp-earthy.dim_128x128.png"
        alt="WhatsApp"
        className="h-7 w-7"
      />
    </a>
  );
}
