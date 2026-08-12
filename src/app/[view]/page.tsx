import { notFound } from "next/navigation";
import Dashboard from "@/components/dashboard";

const views = new Set(["workflows", "tools", "people", "recommendations", "data", "settings"]);

export default async function WorkspacePage({ params }: { params: Promise<{ view: string }> }) {
  const { view } = await params;
  if (!views.has(view)) notFound();
  return <Dashboard view={view} />;
}
