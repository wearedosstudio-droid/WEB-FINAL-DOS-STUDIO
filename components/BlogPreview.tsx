import Link from "next/link";
import Container from "./ui/Container";
import AbstractVisual from "./ui/AbstractVisual";
import Reveal from "./ui/Reveal";
import { blogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#F7F5FF] py-24 md:py-32">
      <Container>
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Blog</span>
            <h2 className="section-title mt-6">
              Ideas sobre marketing digital, sin relleno
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet hover:underline hover:underline-offset-4"
          >
            Ver todos los artículos <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-paper transition-shadow duration-500 hover:shadow-[0_30px_70px_-40px_rgba(27,14,102,0.6)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                    <AbstractVisual variant={post.variant} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="self-start rounded-full bg-violet-soft px-3 py-1 text-xs font-semibold text-violet">
                    {post.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-6 text-sm font-semibold text-violet">
                    Leer artículo{" "}
                    <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
