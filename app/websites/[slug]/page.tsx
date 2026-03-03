import WebsiteHeader from "@/components/ui/WebsiteHeader";
import type { WebsiteType } from "@/types/Website";
import { redirect } from "next/navigation";

async function getWebsites(): Promise<WebsiteType[]> {
  const res = await fetch("http://localhost:3000/websites.json");
  if (!res.ok) {
    throw new Error("Impossible de charger les sites web");
  }
  return res.json();
}

type WebsitePageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const websites = await getWebsites();

  return websites.map((w) => ({
    slug: w.slug,
  }));
}

export default async function WebsitePage({ params }: WebsitePageProps) {
  const websites = await getWebsites();
  const website = websites.find((w) => w.slug === params.slug);

  if (!website) {
    redirect("/websites");
  }

  return <WebsiteHeader website={website} />;
}

