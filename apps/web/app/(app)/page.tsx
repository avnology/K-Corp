import { HomePage } from "@/modules/home/template/HomePage";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Home as HomeType } from "@/payload-types";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const homeData: HomeType = await payload.findGlobal({
    slug: "home",
  });

  const seo = homeData.seo;
  
  return {
    title: seo?.metaTitle || "K-Corp",
    description: seo?.metaDescription || "",
    keywords: seo?.keywords || "",
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || "K-Corp",
      description: seo?.ogDescription || seo?.metaDescription || "",
      url: seo?.ogURL || "",
      type: (seo?.ogType as "website") || "website",
      images: seo?.ogImage && typeof seo.ogImage === 'object' && 'url' in seo.ogImage
        ? [{ url: seo.ogImage.url as string }]
        : [],
    },
    robots: seo?.robots || "index,follow",
    alternates: {
      canonical: seo?.canonicalURL || "",
    },
  };
}

export default async function Home() {
  const payload = await getPayload({ config });
  
  const homeData: HomeType = await payload.findGlobal({
    slug: "home",
  });

  return (
    <HomePage 
      heroData={homeData.hero} 
      titleContainerData={homeData.titleContainer} 
      aboutData={homeData.about}
      rotatingLinksData={homeData.rotatingLinks}
      companiesData={homeData.companies}
      partnersData={homeData.partners}
      contactData={homeData.contact}
    />
  );
}
