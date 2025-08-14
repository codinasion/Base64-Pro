import Base64Converter from '@/components/Base64Converter'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import UseCases from '@/components/UseCases'
import Reviews from '@/components/Reviews'
import CTA from '@/components/CTA'


export const metadata = {
  title: "Base64 Pro - Free Online Base64 Converter Tool",
  description:
    "Convert text to Base64 and decode Base64 back to text. Fast, secure, and free Base64 encoder/decoder tool with real-time conversion and file support.",
  keywords:
    "base64 encoder, base64 decoder, base64 converter, encode decode base64, text to base64, base64 to text, online base64 tool",
  authors: [{ name: "Codinasion", url: "https://www.codinasion.com" }],
  creator: "Codinasion",
  publisher: "Codinasion",
  metadataBase: new URL("https://base64-pro.codinasion.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Base64 Pro - Free Online Converter",
    description:
      "The most reliable Base64 encoder/decoder tool. Convert text and files instantly with our secure online tool.",
    images: [
      {
        url: "/demo.png",
        alt: "Base64 Pro OG",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Pro - Free Online Converter",
    description:
      "The most reliable Base64 encoder/decoder tool. Convert text and files instantly with our secure online tool.",
    images: ["/demo.png"],
    creator: "@codinasion",
    siteId: "1527970903367135232",
    creatorId: "1527970903367135232",
  },
  alternates: {
    canonical: "https://www.codinasion.com/en/tools/base64",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <Hero />
      {/* Converter Section */}
      <Base64Converter />
      {/* Features Section */}
      <Features />
      {/* Use Cases Section */}
      <UseCases />
      {/* Reviews Section */}
      <Reviews />
      {/* CTA Section */}
      <CTA />  
    </div>
  )
}
