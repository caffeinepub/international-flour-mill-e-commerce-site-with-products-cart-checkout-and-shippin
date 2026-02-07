import { SiInstagram } from 'react-icons/si';
import { COPY } from '../../constants/copy';
import { CONTACT_INFO } from '../../constants/contact';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/assets/generated/logo-mark.dim_512x512.png"
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-lg font-semibold">
                Kerala Spice Mill
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Premium Kerala traditional food products and spices, exported worldwide.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <a href={`tel:${CONTACT_INFO.phone.tel}`} className="hover:text-primary">
                  {CONTACT_INFO.phone.display}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">{COPY.contact.followUs}</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            {COPY.footer.copyright} {COPY.footer.love} {COPY.footer.builtWith}{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
