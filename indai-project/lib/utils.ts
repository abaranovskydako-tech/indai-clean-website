/**
 * Utility functions for INDAI Clean project
 * 
 * This file is required by ADDENDUM P0.2.
 * All conditional Tailwind class composition must use the `cn()` helper.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import sanitizeHtml from 'sanitize-html';

/**
 * Conditionally compose class names
 * 
 * Uses clsx for conditional classes and tailwind-merge to resolve Tailwind conflicts.
 * Required by ADDENDUM P0.2 §94.
 * 
 * @param inputs - Class names (strings, arrays, objects, or undefined/null)
 * @returns Composed class string with Tailwind conflicts resolved
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Sanitize HTML content to prevent XSS attacks
 * 
 * This function sanitizes HTML from markdown rendering before using dangerouslySetInnerHTML.
 * Required by MASTER_SPEC §15.2 and §24.
 * 
 * @param html - Raw HTML string to sanitize
 * @returns Sanitized HTML string safe for dangerouslySetInnerHTML
 */
export function sanitizeHtmlContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'br', 'strong', 'em', 'u', 's',
      'ul', 'ol', 'li',
      'blockquote', 'code', 'pre',
      'a', 'img',
      'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'hr', 'div', 'span'
    ],
    allowedAttributes: {
      'a': ['href', 'title', 'target', 'rel'],
      'img': ['src', 'alt', 'title', 'width', 'height'],
      '*': ['class']
    },
    allowedSchemes: ['http', 'https', 'mailto'],
    allowedSchemesByTag: {
      img: ['http', 'https', 'data']
    }
  });
}

