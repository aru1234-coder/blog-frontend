import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestBlogs from "@/components/LatestBlogs";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Hero />
      <Categories />
      <LatestBlogs />
      <Footer />
    </div>
  );
}
