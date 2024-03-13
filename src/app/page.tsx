import CommomSearch from "@/components/CommonSearch";
import Footer from "@/components/Footer";
import MainSection from "@/components/MainSection";
import Search from "@/components/Search";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
   <MainSection/>
   <Search/>
   <CommomSearch/>
  <Footer/>
   
   </main>
  );
}
