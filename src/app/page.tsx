import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import MenuSection from "@/components/MenuSection";
import BottomInfo from "@/components/BottomInfo";
import Footer from "@/components/Footer";
import { menuCategories } from "@/data/menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full max-w-full overflow-x-hidden">
      <Header />
      <CategoryNav />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-4 pt-40 flex flex-col gap-10 overflow-x-hidden">
        {menuCategories.map((cat) => (
          <MenuSection key={cat.id} category={cat} />
        ))}
      </main>

      <BottomInfo />
      <Footer />
    </div>
  );
}
