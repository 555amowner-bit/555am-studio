import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://555am-studio.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work/maison-hair-studio`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work/noir-barber`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/work/aura-skin`,
      lastModified: new Date(),
    },
  ];
}