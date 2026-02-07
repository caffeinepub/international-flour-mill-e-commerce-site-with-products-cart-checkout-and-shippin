import { Award, Globe, Heart } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground mb-12">
          A heritage of authentic Kerala flavors, shared with the world.
        </p>

        <div className="space-y-12">
          {/* Heritage Section */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Heart className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold">Our Heritage</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Rooted in the rich traditions of Kerala, our flour mill has been a cornerstone of authentic spice processing and traditional food production. We honor time-tested methods passed down through generations, ensuring every product carries the genuine taste and aroma of Kerala's culinary heritage.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From the lush coconut groves to the vibrant spice gardens of Kerala, we source the finest ingredients to bring you products that embody the essence of South Indian tradition. Our commitment to authenticity means preserving the natural goodness in every grain, every powder, and every sweet.
            </p>
          </section>

          {/* Quality Section */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold">Craft & Quality</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Quality is at the heart of everything we do. Our traditional processing methods ensure that the natural flavors, colors, and nutritional values are preserved. We carefully select premium raw materials and process them with meticulous attention to detail.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether it's our cold-pressed coconut oil, finely ground spice powders, or handcrafted traditional sweets, each product reflects our dedication to excellence. We believe in delivering not just products, but an authentic experience of Kerala's culinary richness.
            </p>
          </section>

          {/* International Reach Section */}
          <section className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                <Globe className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-semibold">International Reach</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              While our roots are firmly planted in Kerala's soil, our vision extends across borders. We proudly export our authentic products to discerning customers worldwide, bringing the taste of Kerala to kitchens in Germany, USA, UK, Dubai, and Malta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our international shipping ensures that no matter where you are, you can enjoy the same premium quality and authentic flavors that have made Kerala cuisine renowned globally. We handle every order with care, ensuring your products arrive fresh and ready to enhance your culinary creations.
            </p>
          </section>

          {/* Closing Statement */}
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <p className="text-lg text-muted-foreground italic">
              "From our traditional mill to your table, we bring you the authentic taste of Kerala with every product."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
