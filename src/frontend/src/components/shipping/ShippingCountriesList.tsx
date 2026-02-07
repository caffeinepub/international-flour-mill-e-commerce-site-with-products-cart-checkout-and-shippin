import { MapPin } from 'lucide-react';
import { COPY } from '../../constants/copy';

export function ShippingCountriesList() {
  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center space-x-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">{COPY.shipping.weShipTo}</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {COPY.shipping.countries.map((country) => (
          <div
            key={country}
            className="flex items-center space-x-2 text-sm bg-muted/50 rounded-md px-3 py-2"
          >
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
