import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getMajorBySlug } from "@/data/majors";
import MajorDetailClient from "./MajorDetailClient";

export default function MajorDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const major = getMajorBySlug(params.slug);
  if (!major) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
        <Navbar />
        <div className="container mx-auto px-4 py-24">Major not found</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <MajorDetailClient slug={params.slug} />
      <Footer />
    </div>
  );
}
