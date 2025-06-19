import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ui/customModal";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";


export default function Home() {
  return (
      <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
         <div className="max-w-6xl w-full">
           <Hero />
           <Grid />
           {/* <RecentProjects /> */}
           <Clients />
           <Experience/>
           <Approach />
           <Footer />
         </div>
      </main>
     
  );
}
