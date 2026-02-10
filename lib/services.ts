import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked for synchronous rendering
marked.setOptions({
  breaks: true,
  gfm: true,
});

const servicesDirectory = path.join(process.cwd(), 'docs/02_КОНТЕНТ_УСЛУГИ');

export interface ServiceFrontmatter {
  slug: string;
  title: string;
  description?: string;
  category?: string;
  seo_title?: string;
  seo_description?: string;
  hero_image?: string;
  og_image?: string;
  status?: string;
  created?: string;
  updated?: string;
  cta_primary?: {
    text: string;
    cta_id: string;
    form_id: string;
  };
  cta_secondary?: {
    text: string;
    cta_id: string;
    form_id: string;
  };
}

export interface ServiceContent {
  frontmatter: ServiceFrontmatter;
  content: string;
  html: string;
}

/**
 * Get all service slugs from markdown files
 */
export function getAllServiceSlugs(): string[] {
  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(servicesDirectory);
  const slugs: string[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') || fileName.startsWith('INDAI_')) {
      continue;
    }

    const fullPath = path.join(servicesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    if (data.slug) {
      slugs.push(data.slug);
    }
  }

  return slugs;
}

/**
 * Get service content by slug
 */
export async function getServiceBySlug(slug: string): Promise<ServiceContent | null> {
  if (!fs.existsSync(servicesDirectory)) {
    return null;
  }

  const fileNames = fs.readdirSync(servicesDirectory);

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') || fileName.startsWith('INDAI_')) {
      continue;
    }

    const fullPath = path.join(servicesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    if (data.slug === slug) {
      const html = await marked.parse(content);
      return {
        frontmatter: data as ServiceFrontmatter,
        content,
        html: html as string,
      };
    }
  }

  return null;
}

/**
 * Get all services with frontmatter (for listing pages)
 */
export function getAllServices(): ServiceFrontmatter[] {
  if (!fs.existsSync(servicesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(servicesDirectory);
  const services: ServiceFrontmatter[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') || fileName.startsWith('INDAI_')) {
      continue;
    }

    const fullPath = path.join(servicesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    if (data.slug && data.status === 'published') {
      services.push(data as ServiceFrontmatter);
    }
  }

  return services;
}

