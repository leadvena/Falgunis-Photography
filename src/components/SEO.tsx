import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    // Set Document Title
    document.title = "Falguni's Photography | Premier Fine-Art Newborn & Maternity Photographer in Lightsview, SA";

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      "Award-winning newborn, maternity, milestone, and family photography in Lightsview, South Australia. Certified safety & luxury organic styling. Book your session."
    );

    // Set Structured Schema Markup
    let schemaScript = document.getElementById('seo-schema-markup');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('id', 'seo-schema-markup');
      document.head.appendChild(schemaScript);
    }

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://falgunisphotography.com.au/#localbusiness",
          "name": "Falguni's Photography",
          "image": [
            "https://ais-dev-tiik3c6aryvlpc4ybhvgbv-257552207713.asia-southeast1.run.app/src/assets/images/hero_wedding_1779671234377.png"
          ],
          "telephone": "+61 469 753 238",
          "email": "mercuritesolutions@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "26 South Pkwy",
            "addressLocality": "Northfield",
            "addressRegion": "SA",
            "postalCode": "5085",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -34.855325,
            "longitude": 138.621742
          },
          "priceRange": "$$$",
          "areaServed": [
            "Lightsview",
            "Adelaide Hills",
            "McLaren Vale",
            "Barossa Valley",
            "Northfield"
          ],
          "sameAs": [
            "https://www.instagram.com",
            "https://www.facebook.com"
          ]
        },
        {
          "@type": "Photographer",
          "@id": "https://falgunisphotography.com.au/#photographer",
          "name": "Falguni",
          "description": "Premium fine-art newborn and maternity photographer in South Australia.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Newborn & Maternity Photography Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "The Baby Masterpiece Studio Session",
                  "description": "Premium baby safety-first newborn sessions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "The Divine Maternity",
                  "description": "Exquisite fine-art pregnancy silhouettes and gowns"
                }
              }
            ]
          }
        }
      ]
    };

    schemaScript.textContent = JSON.stringify(localBusinessSchema, null, 2);

    return () => {
      // Cleanup is optional, but we can keep it registered.
    };
  }, []);

  return null;
}
