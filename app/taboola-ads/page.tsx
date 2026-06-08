import { notFound } from "next/navigation";
import { AdPlatformHub } from "@/components/templates/AdPlatformHub";
import { getAdPlatform } from "@/lib/data/ad-platforms";

export default function Page() {
	const platform = getAdPlatform("taboola-ads");
	if (!platform) notFound();
	return <AdPlatformHub platform={platform} url="https://frameleads.com/taboola-ads" />;
}
