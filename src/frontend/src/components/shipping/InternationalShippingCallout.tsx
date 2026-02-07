import { Globe } from 'lucide-react';
import { COPY } from '../../constants/copy';

export function InternationalShippingCallout() {
  return (
    <div className="bg-accent/20 border border-accent/30 rounded-lg p-4 flex items-center space-x-3">
      <Globe className="h-5 w-5 text-accent-foreground flex-shrink-0" />
      <p className="text-sm font-medium text-accent-foreground">
        {COPY.shipping.available}
      </p>
    </div>
  );
}
