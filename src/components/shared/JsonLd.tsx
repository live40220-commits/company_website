import React from "react";

export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "100Solutionz",
    "alternateName": "100 Solutionz",
    "url": "https://100solutionz.com",
    "logo": "https://100solutionz.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-019-9100",
      "contactType": "customer support",
      "email": "live40220@gmail.com",
      "areaServed": ["US", "PK", "GB"],
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://linkedin.com",
      "https://twitter.com",
      "https://github.com"
    ],
    "description": "Premium AI & Software Development company shaping complex ideas into production-ready SaaS platforms, AI Agents, and mobile apps."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
