import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { blogPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/portfolio", priority: 0.8 },
    { path: "/contacto", priority: 0.8 },
    { path: "/proceso", priority: 0.6 },
    { path: "/nosotros", priority: 0.6 },
    { path: "/blog", priority: 0.5 },
    { path: "/aviso-legal", priority: 0.1 },
    { path: "/politica-de-privacidad", priority: 0.1 },
    { path: "/politica-de-cookies", priority: 0.1 },
  ];

  return [
    ...staticRoutes.map((r) => ({ url: `${siteUrl}${r.path}`, lastModified: now, priority: r.priority })),
    ...services.map((s) => ({ url: `${siteUrl}/servicios/${s.slug}`, lastModified: now, priority: 0.7 })),
    ...blogPosts.map((p) => ({ url: `${siteUrl}/blog/${p.slug}`, lastModified: now, priority: 0.4 })),
  ];
}
