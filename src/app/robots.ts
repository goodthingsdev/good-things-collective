import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
  // Check if the current domain is a TLD without subdomain
  const isTLDWithoutSubdomain = () => {
    try {
      const url = new URL(baseUrl);
      const hostname = url.hostname;
      // A TLD without subdomain will have exactly one dot (e.g., example.com)
      return hostname.split('.').length === 2;
    } catch {
      return false;
    }
  };

  // If not a TLD without subdomain, disallow all indexing
  if (!isTLDWithoutSubdomain()) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: ["/"],
        },
      ],
      sitemap: `${baseUrl}/sitemap.xml`,
      host: baseUrl,
    };
  }

  // For TLD without subdomain, use the original rules
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/about", "/services", "/case-studies", "/contact"],
        disallow: [
          "/api/*",
          "/admin/*",
          "/_next/*",
          "/*.json$",
          "/*.xml$",
          "/*.txt$",
          "/private/*",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
