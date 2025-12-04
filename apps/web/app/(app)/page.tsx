import { HomePage } from "@/modules/home/template/HomePage";
import { getPayload } from "payload";
import config from "@/payload.config";
import type { Home as HomeType } from "@/payload-types";

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
