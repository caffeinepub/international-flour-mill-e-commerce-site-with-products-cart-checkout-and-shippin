import { Phone } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { COPY } from '../constants/copy';
import { CONTACT_INFO } from '../constants/contact';
import { WhatsAppButton } from '../components/contact/WhatsAppButton';

export function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{COPY.contact.title}</h1>
        <p className="text-xl text-muted-foreground mb-12">
          We'd love to hear from you. Get in touch with us for orders, inquiries, or just to say hello.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{COPY.contact.phone}</h3>
                    <a
                      href={`tel:${CONTACT_INFO.phone.tel}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {CONTACT_INFO.phone.display}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <WhatsAppButton />
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">{COPY.contact.followUs}</h2>
            <p className="text-muted-foreground mb-6">
              Stay connected with us on social media for updates, recipes, and special offers.
            </p>
            
            <div className="space-y-4">
              <a
                href={CONTACT_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <SiInstagram className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <h3 className="font-medium">Instagram</h3>
                  <p className="text-sm text-muted-foreground">{CONTACT_INFO.instagram.handle}</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
          <p className="text-muted-foreground mb-4">
            We typically respond to inquiries within 24 hours during business days.
          </p>
          <p className="text-sm text-muted-foreground">
            For urgent orders or shipping questions, please contact us via WhatsApp for the fastest response.
          </p>
        </div>
      </div>
    </div>
  );
}
