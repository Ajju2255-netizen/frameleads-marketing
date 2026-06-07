import { notFound } from "next/navigation";
import { IndustryPillarPage } from "@/components/templates/IndustryPillarPage";
import { getIndustry } from "@/lib/data";

export default function Page() {
  const industry = getIndustry("manufacturing");
  if (!industry) notFound();
  return <IndustryPillarPage industry={industry} url="https://frameleads.com/manufacturing-and-industrial" />;
}
