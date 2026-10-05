import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import AbstractVisual from "@/components/ui/AbstractVisual";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de marketing digital",
  alternates: { canonical: "/blog" },
  description:
    "Notas prácticas sobre estrategia, SEO, diseño web y automatización, escritas por el equipo de Dos Studio.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="contenido">
        <PageHero
          eyebrow="Blog"
          title={
            <>
              Ideas sobre marketing digital, <span className="text-violet-light">sin relleno.</span>
            </>
          }
          intro="Notas prácticas sobre estrategia, SEO, diseño y automatización, escritas por el mismo equipo que lleva las cuentas."
        />

        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <AbstractVisual variant={post.variant} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-3 text-xs text-graphite">
                    <span className="font-medium text-violet">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-2 font-display text-lg font-semibold leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    {post.excerpt}
                  </p>
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
