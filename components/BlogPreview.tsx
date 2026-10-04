import Link from "next/link";
import Container from "./ui/Container";
import AbstractVisual from "./ui/AbstractVisual";
import { blogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="border-t border-line py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight md:text-4xl">
              Ideas sobre marketing digital, sin relleno
            </h2>
            <p className="mt-4 text-graphite">
              Notas prácticas sobre estrategia, SEO, diseño y automatización,
              escritas por el mismo equipo que lleva las cuentas.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 hover:decoration-violet"
          >
            Ver todos los artículos
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <AbstractVisual variant={post.variant} />
                </div>
              </div>
              <span className="mt-4 inline-block text-xs font-medium text-violet">
                {post.category}
              </span>
              <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
