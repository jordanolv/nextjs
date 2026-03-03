import { ButtonLink } from "@/components/ui/ButtonLink";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-12 text-center">
      <h1 className="text-8xl font-bold text-dark mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Oups ! Cette page n'existe pas.
      </p>
      <ButtonLink href="/" variant="filled">
        Retour à l'accueil
      </ButtonLink>
    </main>
  );
}
