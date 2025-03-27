// app/service/[slug]/page.js
import { getServiceBySlug, getServices } from "@/lib/enhanced-notion";
import NotionContent from "@/components/NotionContent";
import Image from "next/image";
import BlurBackground from "@/components/GlowGlobs";

export const revalidate = 3600; // Revalidate every hour

// Generate static params
export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const service = await getServiceBySlug(params.slug);

  return (
    <div className="container mx-auto pt-24 py-8">
      <BlurBackground blurCount={4} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

        <div className="prose prose-lg max-w-none">
          <NotionContent blocks={service.rawBlocks} />
        </div>
      </div>
    </div>
  );
}
