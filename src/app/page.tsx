import CommomSearch from "@/components/comp/CommonSearch";
import Footer from "@/components/comp/Footer";
import MainSection from "@/components/comp/MainSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased ">
   <MainSection/>
   <CommomSearch/>
  <Footer/>
   
   </main>
  );
}
