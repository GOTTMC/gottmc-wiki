import { notFound } from "next/navigation";
import SetPageTitle from "@/components/SetPageTitle";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;
  const pathname = slug.join('/');
  const rawPost = await getPostBySlug(pathname);

  async function getPostBySlug(slug: string) {
    try {
      const post = await import(`@/content/${slug}.mdx`);
  
      const { default: Post, ...metadata } = post;
      return { Post, metadata };
    } catch {
      return undefined;
    }
  }

  if (!rawPost) {
    notFound();
  }

  const { Post, metadata } = rawPost;

  return (
    <>
      { // set to the provided title if post has one
        metadata?.title && <SetPageTitle value={metadata?.title} />
      }
      <Post />
    </>
  );
}
 
export const dynamicParams = false;