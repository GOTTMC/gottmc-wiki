import { redirect } from "next/navigation";

export default async function CatchAll({ params }: { params: { not_found: string[] } }) {
  const { not_found } = await params;

  redirect(`/wiki/${not_found.join('/')}`)
}