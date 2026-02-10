import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services';
import { sanitizeHtmlContent } from '@/lib/utils';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const { frontmatter } = service;

  return {
    title: frontmatter.seo_title || frontmatter.title,
    description: frontmatter.seo_description || frontmatter.description,
    openGraph: {
      title: frontmatter.seo_title || frontmatter.title,
      description: frontmatter.seo_description || frontmatter.description,
      images: frontmatter.og_image ? [frontmatter.og_image] : [],
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const sanitizedHtml = sanitizeHtmlContent(service.html);

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold leading-tight tracking-tight text-dark-500 mb-6">
        {service.frontmatter.title}
      </h1>
      <div
        className="prose prose-lg max-w-none text-base font-normal leading-6 text-dark-500"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </article>
  );
}

