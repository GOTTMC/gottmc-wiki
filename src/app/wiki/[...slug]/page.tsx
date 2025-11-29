export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/content/${slug.join('/')}.mdx`);

  return (
    <>
      <h1 id="firstHeading">{ metadata.title }</h1>
      
      <div className="my-2">
        <Post />
      </div>
    </>
  );
}
 
export const dynamicParams = true;