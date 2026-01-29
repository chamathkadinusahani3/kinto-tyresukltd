// src/utils/seoSchemas.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KINTO TYRES UK LIMITED",
  "alternateName": "KINTO UK",
  "url": "https://kinto-tyres.co.uk",
  "logo": "https://kinto-tyres.co.uk/logo.png",
  "description": "Leading Japanese tyre brand providing high-quality tyres for passenger cars, trucks, and commercial vehicles across the UK.",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "132, Great North Road",
    "addressLocality": "Hatfield",
    "addressRegion": "Hertfordshire",
    "postalCode": "AL9 5JN",
    "addressCountry": "GB"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+44-7886-686142",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "GB"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+44-1707-912085",
      "contactType": "sales",
      "availableLanguage": "English",
      "areaServed": "GB"
    }
  ],
  "email": "info@kinto-tyres.co.uk",
  "sameAs": [
    // Add social media links when available
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "name": "KINTO TYRES UK LIMITED",
  "image": "https://kinto-tyres.co.uk/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "132, Great North Road",
    "addressLocality": "Hatfield",
    "addressRegion": "Hertfordshire",
    "postalCode": "AL9 5JN",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.7632,
    "longitude": -0.2217
  },
  "url": "https://kinto-tyres.co.uk",
  "telephone": "+44-7886-686142",
  "email": "info@kinto-tyres.co.uk",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
};

export function createProductSchema(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "KINTO"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "KINTO TYRES"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KINTO TYRES UK LIMITED"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});