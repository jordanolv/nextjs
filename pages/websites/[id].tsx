import { useRouter } from "next/router";

export default function WebsiteDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Website detail</h1>
      <p>Website ID: {id}</p>
    </div>
  );
}
