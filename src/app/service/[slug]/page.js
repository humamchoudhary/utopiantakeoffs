// app/service/[slug]/page.js
import { getServiceBySlug, getServices } from "@/lib/enhanced-notion";
import NotionContent from "@/components/NotionContent";
import BlurBackground from "@/components/GlowGlobs";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const services = await getServices(); // Fetch all services to generate static paths

  return services.map((service) => ({
    slug: service.slug, // Only return slug (Next.js uses this to generate pages)
  }));
}

// Generate static params
export default async function ServicePage({ params }) {
  // Fetch the service data dynamically
  const service = await getServiceBySlug(params.slug);

  if (!service) {
    return <div className="text-center text-red-500">Service not found</div>;
  }

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
