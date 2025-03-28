// app/service/[slug]/page.js
import { getTradeBySlug, getTrades } from "@/lib/enhanced-notion";
import NotionContent from "@/components/NotionContent";
import BlurBackground from "@/components/GlowGlobs";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const trades = await getTrades(); // Fetch all trades to generate static paths

  return trades.map((trade) => ({
    slug: trade.slug, // Only return slug (Next.js uses this to generate pages)
  }));
}

// Generate static params
export default async function TradesPage({ params }) {
  // Fetch the trade data dynamically
  const trade = await getTradeBySlug(params.slug);

  if (!trade) {
    return <div className="text-center text-red-500">Trade not found</div>;
  }

  return (
    <div className="container mx-auto pt-24 py-8">
      <BlurBackground blurCount={4} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{trade.title}</h1>

        <div className="prose prose-lg max-w-none">
          <NotionContent blocks={trade.rawBlocks} />
        </div>
      </div>
    </div>
  );
}
