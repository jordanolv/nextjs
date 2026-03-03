import Title from "@/components/ui/Title";
import Website from "@/components/ui/Website";
import WebsiteHeader from "@/components/ui/WebsiteHeader";
import type { WebsiteType } from "@/types/Website";

async function getWebsites(): Promise<WebsiteType[]> {
  const res = await fetch("http://localhost:3000/websites.json");
  if (!res.ok) {
    throw new Error("Impossible de charger les sites web");
  }
  return res.json();
}

export default async function HomePage() {
  const websites = await getWebsites();

  return (
    <>
      <WebsiteHeader website={websites[0]} />

      <div className="bg-white px-6 py-12">
        <Title
          tag="h2"
          topLine="Voir les derniers"
          bottomLine="et ajoute tes propres reviews"
        >
          Sites web
        </Title>
        <div className="grid md:grid-cols-3 gap-4 pt-12">
          {websites
            .filter((_, i) => i > 0 && i <= 3)
            .map((w, i) => (
              <Website key={`website-${i}`} website={w} />
            ))}
        </div>
        <footer className="pt-12 flex justify-center">
          <a href="/websites" className="underline">
            Voir tous les sites
          </a>
        </footer>
      </div>

      <div className="bg-white px-6 py-12">
        <Title tag="h2" topLine="découvrez notre dernier">
          Highlight
        </Title>

        <figure className="rounded-lg overflow-hidden w-full max-w-280 mt-12">
          <video controls className="w-full">
            <source src="/highlight.mp4" type="video/mp4" />
          </video>
        </figure>
      </div>
    </>
  );
}

