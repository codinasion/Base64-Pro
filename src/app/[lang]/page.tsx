import { getDictionary, langListData, langType } from "@/dictionaries";
import Navbar from "./navbar";
import Hero from "./hero";
import Base64EncoderDecoderComponent from "./component";
import BuyMeACoffee from "./bmc";
import Features from "./features";
import UseCases from "./use-cases";
import FunFacts from "./fun-facts";
import HistoricalContext from "./historical-context";
import Testimonials from "./testimonials";
import CTA from "./cta";
import Sponsor from "./sponsor";
import Footer from "./footer";

export async function generateStaticParams() {
  return langListData.map((lang) => ({
    lang: lang,
  }));
}

export default async function Page({ params }: { params: Promise<langType> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navbar />

      <Hero />

      <Base64EncoderDecoderComponent />

      <BuyMeACoffee />

      <Features />

      <UseCases />

      <FunFacts />

      <HistoricalContext />

      <Testimonials />

      <CTA />

      <Sponsor />

      <Footer />
    </div>
  );
}
