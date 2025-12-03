import type { NextConfig } from "next";
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      'remark-gfm',
      'remark-frontmatter',
      'remark-mdx-frontmatter',
    ],
    rehypePlugins: [
      'rehype-slug',
      'rehype-prism-plus',
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)