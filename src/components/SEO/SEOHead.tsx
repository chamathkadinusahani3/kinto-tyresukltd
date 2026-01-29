// src/components/SEO/SEOHead.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

export function SEOHead({
  title = "KINTO TYRES UK - Leading Japanese Tyre Brand | Premium Quality Tyres",
  description = "KINTO TYRES UK LIMITED provides high-quality Japanese tyres for passenger cars, trucks, and commercial vehicles. Professional fitting, 2-year warranty, and nationwide delivery across the UK.",
  keywords = "kinto tyres uk, japanese tyres uk, passenger car tyres, truck tyres uk, premium tyres london, tyre fitting uk, affordable car tyres, commercial vehicle tyres, winter tyres uk, performance tyres uk",
  image = "https://kinto-tyres.co.uk/og-image.jpg",
  url = "https://kinto-tyres.co.uk",
  type = "website",
  schema
}: SEOProps) {
  
  const siteName = "KINTO TYRES UK";
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="KINTO TYRES UK LIMITED" />
      <meta name="geo.region" content="GB" />
      <meta name="geo.placename" content="United Kingdom" />
      
      {/* Schema.org Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}