import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mafhhtechnologies.com";

  const routes = [
    "",
    "/erp-software",
    "/inventory-management-system",
    "/business-automation",
    "/dashboard-development",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2025-01-01"), // use stable date or dynamic from DB
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}