import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import AbstractVisual from "@/components/ui/AbstractVisual";
import { blogPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line py-16">
          <Container>
            <Link
              href="/blog"
              className="text-sm text-graphite transition-colors hover:text-ink"
            >
              ← Todos los artículos
            </Link>

            <div className="mt-8 max-w-2xl">
              <div className="flex items-center gap-3 text-xs text-graphite">
                <span className="font-medium text-violet">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{formatDate(post.date)}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-balance mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
                {post.title}
              </h1>
            </div>
          </Container>
        </section>

        <section className="py-16">
          <Container>
            <div className="mx-auto aspect-[16/7] max-w-3xl overflow-hidden rounded-2xl">
              <AbstractVisual variant={post.variant} />
            </div>

            <div className="mx-auto mt-12 max-w-2xl space-y-6">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-[1.05rem] leading-relaxed text-ink">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-line bg-violet-soft/60 p-8">
              <h2 className="font-display text-lg font-semibold">
                ¿Quieres que lo trabajemos en tu marca?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-graphite">
                Hablemos de tu caso específico y te decimos qué tendría
                sentido aplicar primero.
              </p>
              <Link
                href="/contacto"
                className="mt-5 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-violet"
              >
                Escríbenos
              </Link>
            </div>
          </Container>
        </section>

        <section className="border-t border-line py-20">
          <Container>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              Sigue leyendo
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <AbstractVisual variant={p.variant} />
                    </div>
                  </div>
                  <span className="mt-4 inline-block text-xs font-medium text-violet">
                    {p.category}
                  </span>
                  <h3 className="mt-1 font-display text-base font-semibold leading-snug">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
