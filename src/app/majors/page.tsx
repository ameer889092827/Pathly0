import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import MajorsClient from "@/app/majors/MajorsClient";
import { majors } from "@/data/majors";

export default function MajorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Navbar />
      <MajorsClient majors={majors} />
      <Footer />
    </div>
  );
}
