
import Link from "next/link"
import Image from "next/image"

export const post = {
    slug: "meta-conversions-api-capi-setup-guide-2025",
    title: "Meta Conversions API (CAPI) 2025: The \"No-Data-Loss\" Setup Guide",
    summary:
        "Don't let ad-blockers kill your ROAS. Learn how to set up Meta CAPI for 100% data accuracy in 2025.",
    tag: "Meta Ads",
    categorySlug: "performance-marketing",
    readTime: "6 min read",
    banner: "/blogs/meta-capi-setup-guide.jpg",
}

export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does Meta CAPI bypass user consent?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. CAPI should only send data for users who have given consent through your website’s cookie banner. At FrameLeads, we integrate Google Consent Mode v2 with CAPI to ensure 100% legal compliance in India.",
            },
        },
        {
            "@type": "Question",
            name: "What is a \"Good\" Event Match Quality (EMQ) score?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Aim for an EMQ of 6.0 or higher. A higher score means Meta can more accurately link your server data to a specific user profile, which directly lowers your Cost Per Lead (CPL).",
            },
        },
    ],
}

export const Content = () => (
    <>
        {/* Summary (TL;DR) */}
        <div className="bg-[#FFF6F2] border-2 border-[#FF6B35]/20 p-6 rounded-2xl mb-8">
            <h3 className="text-[#FF6B35] font-bold text-lg mb-2">The "No-Data-Loss" Reality</h3>
            <p className="text-[#2D2D2D] font-medium leading-relaxed">
                In 2025, the standard Meta Pixel is no longer enough. Between iOS 18+ privacy updates, ad-blockers, and the phase-out of third-party cookies, up to 30-40% of your customer actions never reach Meta’s servers.
            </p>
        </div>

        <p className="text-lg leading-relaxed text-[#5A5A5A]">
            The result? Your CPA (Cost Per Acquisition) looks higher than it actually is, and Meta’s AI is optimizing based on incomplete data. Meta Conversions API (CAPI) fixes this by sending events directly from your server to Meta.
        </p>

        {/* Founder's Insight Box */}
        <div className="flex gap-4 bg-white border border-[#FFE4D6] p-6 rounded-2xl my-8 shadow-sm">
            <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl">
                💡
            </div>
            <div>
                <h4 className="text-[#2D2D2D] font-bold mb-1">Founder's Core Strategy</h4>
                <p className="text-[#5A5A5A] text-sm italic">
                    "If you aren't feeding Meta's AI with high-quality server data, you're essentially marketing with one eye closed. CAPI isn't optional anymore; it's the baseline for performance."
                </p>
            </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-[#FAF9F6] p-6 rounded-xl my-8 border border-gray-100">
            <h3 className="text-[#2D2D2D] font-bold mb-4">Table of Contents</h3>
            <nav className="space-y-2">
                <a href="#browser-vs-server" className="block text-[#FF6B35] hover:underline">1. Browser vs. Server: Why You Need Both</a>
                <a href="#implementation-path" className="block text-[#FF6B35] hover:underline">2. Implementation Path: Which One is Right for You?</a>
                <a href="#deduplication" className="block text-[#FF6B35] hover:underline">3. The "Silent Killer": Event Deduplication</a>
                <a href="#setup-steps" className="block text-[#FF6B35] hover:underline">4. Step-by-Step CAPI Setup (Manual/GTM Method)</a>
                <a href="#faq" className="block text-[#FF6B35] hover:underline">5. FAQ: CAPI & Privacy</a>
            </nav>
        </div>

        <h2 id="browser-vs-server" className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D] scroll-mt-24">
            1. Browser vs. Server: Why You Need Both
        </h2>
        <p className="mb-4 text-[#5A5A5A]">
            The most effective 2025 strategy is a Redundant "Hybrid" Setup. You use the Pixel for real-time browser behavior and CAPI for secure, server-verified data.
        </p>

        <div className="overflow-x-auto my-8 border border-[#FFE4D6] rounded-xl shadow-sm">
            <table className="w-full text-left bg-white text-sm">
                <thead className="bg-[#FFF6F2] border-b border-[#FFE4D6]">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-[#2D2D2D]">Feature</th>
                        <th className="px-6 py-4 font-semibold text-[#2D2D2D]">Meta Pixel (Browser)</th>
                        <th className="px-6 py-4 font-semibold text-[#2D2D2D]">Conversions API (Server)</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-[#FFE4D6]/50">
                    <tr>
                        <td className="px-6 py-4 font-medium text-[#2D2D2D]">Data Source</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">User's Web Browser</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">Your Website Server / CRM</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-[#2D2D2D]">Reliability</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">Affected by Ad-Blockers/VPNs</td>
                        <td className="px-6 py-4 text-[#5A5A5A] font-bold text-[#FF6B35]">100% Signal Delivery</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-[#2D2D2D]">Privacy Compliance</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">Harder to control (Cookies)</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">High Control (Data Hashing)</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 font-medium text-[#2D2D2D]">Best For</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">Real-time Engagement/Clicks</td>
                        <td className="px-6 py-4 text-[#5A5A5A]">Final Sales, Leads, & Offline Events</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 id="implementation-path" className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D] scroll-mt-24">
            2. Implementation Path: Which One is Right for You?
        </h2>
        <p className="mb-6 text-[#5A5A5A]">
            Depending on your tech stack in Bangalore, we recommend one of these three paths:
        </p>

        <div className="space-y-6">
            <div className="border border-[#FFE4D6] rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#4CAF50] text-white text-sm font-bold px-3 py-1 rounded-full">Path A</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">The "Shopify/WooCommerce" Partner Path (E-commerce)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <strong className="block text-[#2D2D2D] mb-1">Difficulty:</strong>
                        <p className="text-[#5A5A5A] text-sm">Easy (No-code)</p>
                    </div>
                    <div>
                        <strong className="block text-[#2D2D2D] mb-1">How:</strong>
                        <p className="text-[#5A5A5A] text-sm">Use the native "Facebook & Instagram" app. Set Data Sharing to "Maximum". This automatically enables CAPI with built-in deduplication.</p>
                    </div>
                </div>
            </div>

            <div className="border border-[#2D2D2D] rounded-xl p-6 bg-[#FAFAFA] hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">FrameLeads Choice</div>
                <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#FF6B35] text-white text-sm font-bold px-3 py-1 rounded-full">Path B</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">The "Server-Side GTM" Path (SaaS & Custom Web)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <strong className="block text-[#2D2D2D] mb-1">Difficulty:</strong>
                        <p className="text-[#5A5A5A] text-sm">Medium-High</p>
                    </div>
                    <div>
                        <strong className="block text-[#2D2D2D] mb-1">How:</strong>
                        <p className="text-[#5A5A5A] text-sm">Use a Google Tag Manager (GTM) Server Container. Data is sent to your server first, then forwarded to Meta. This is the <span className="font-bold text-[#FF6B35]">FrameLeads Gold Standard</span> because it also speeds up your website by removing heavy browser scripts.</p>
                    </div>
                </div>
            </div>

            <div className="border border-[#FFE4D6] rounded-xl p-6 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#2D2D2D] text-white text-sm font-bold px-3 py-1 rounded-full">Path C</span>
                    <h3 className="text-xl font-bold text-[#2D2D2D]">The "Direct API" Path (High-Scale Tech)</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <strong className="block text-[#2D2D2D] mb-1">Difficulty:</strong>
                        <p className="text-[#5A5A5A] text-sm">Expert (Requires Developer)</p>
                    </div>
                    <div>
                        <strong className="block text-[#2D2D2D] mb-1">How:</strong>
                        <p className="text-[#5A5A5A] text-sm">Your backend developers send POST requests directly to Meta’s Graph API. Best for high-security FinTech or custom-built apps.</p>
                    </div>
                </div>
            </div>
        </div>

        <h2 id="deduplication" className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D] scroll-mt-24">
            3. The "Silent Killer": Event Deduplication
        </h2>
        <p className="mb-4 text-[#5A5A5A]">
            If you send a "Purchase" event via the Pixel AND CAPI, Meta might count it twice—faking your ROI. To prevent this, every event must have a matching Event ID. Learn more about advanced pixel management in our <Link href="/Meta-ads" className="text-[#FF6B35] underline font-bold">Meta Ads Mastery</Link> guide.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6">
            <strong className="block text-red-700">The Golden Rule:</strong>
            <p className="text-red-600">
                If <code>Event_ID (Browser) == Event_ID (Server)</code>, Meta merges them into one record.
            </p>
        </div>

        <p className="text-[#5A5A5A]">
            <strong>Benefit:</strong> You get the speed of the browser and the accuracy of the server without inflated numbers.
        </p>

        <h2 id="setup-steps" className="text-2xl font-bold mt-12 mb-6 text-[#2D2D2D] scroll-mt-24">
            4. Step-by-Step CAPI Setup (Manual/GTM Method)
        </h2>

        <ul className="list-none space-y-6 mt-4">
            <li className="flex gap-4 items-start">
                <div className="min-w-[32px] h-[32px] bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold mt-1">1</div>
                <div>
                    <strong className="text-[#2D2D2D] block mb-1 text-lg">Generate Access Token</strong>
                    <p className="text-[#5A5A5A]">
                        Go to Meta Events Manager &gt; Settings &gt; Conversions API &gt; Generate Access Token. Store this securely.
                    </p>
                </div>
            </li>
            <li className="flex gap-4 items-start">
                <div className="min-w-[32px] h-[32px] bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold mt-1">2</div>
                <div>
                    <strong className="text-[#2D2D2D] block mb-1 text-lg">Configure Server Endpoint</strong>
                    <p className="text-[#5A5A5A]">
                        Set up a cloud server (Google Cloud or AWS) to host your GTM server container.
                    </p>
                </div>
            </li>
            <li className="flex gap-4 items-start">
                <div className="min-w-[32px] h-[32px] bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold mt-1">3</div>
                <div>
                    <strong className="text-[#2D2D2D] block mb-1 text-lg">Map Event Parameters</strong>
                    <p className="text-[#5A5A5A]">
                        Ensure you are sending "Hashed" identifiers (email, phone, city) to increase your Event Match Quality (EMQ) score.
                    </p>
                </div>
            </li>
            <li className="flex gap-4 items-start">
                <div className="min-w-[32px] h-[32px] bg-[#FF6B35] text-white rounded-full flex items-center justify-center font-bold mt-1">4</div>
                <div>
                    <strong className="text-[#2D2D2D] block mb-1 text-lg">Test & Verify</strong>
                    <p className="text-[#5A5A5A]">
                        Use the "Test Events" tab in Meta Events Manager. Look for the "Server" status icon next to your events.
                    </p>
                </div>
            </li>
        </ul>

        <h2 id="faq" className="text-2xl font-bold mt-16 mb-8 text-[#2D2D2D] scroll-mt-24 border-t pt-12">
            5. Voice-Optimized FAQ: CAPI & Privacy
        </h2>
        <p className="mb-8 text-[#5A5A5A]">
            Phrased for CMOs asking: "Is CAPI legal under India's DPDP Act?"
        </p>

        <div className="space-y-10">
            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Q: Does Meta CAPI bypass user consent?</h3>
                <p className="text-[#5A5A5A] leading-relaxed">
                    A: No. CAPI should only send data for users who have given consent through your website’s cookie banner. At FrameLeads, we integrate Google Consent Mode v2 with CAPI to ensure 100% legal compliance in India.
                </p>
            </div>

            <div className="bg-[#FAFAFA] p-6 rounded-2xl border border-[#E5E5E5]">
                <h3 className="text-xl font-bold text-[#2D2D2D] mb-4">Q: What is a "Good" Event Match Quality (EMQ) score?</h3>
                <p className="text-[#5A5A5A] leading-relaxed">
                    A: Aim for an EMQ of 6.0 or higher. A higher score means Meta can more accurately link your server data to a specific user profile, which directly lowers your Cost Per Lead (CPL).
                </p>
            </div>
        </div>

        <div className="bg-gradient-to-br from-[#FF6B35] to-[#FF8A50] p-8 rounded-2xl text-center text-white my-16 relative overflow-hidden group">
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Fix Your Tracking Data Today</h3>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">
                    Don't let value slip through the cracks. Get a precise, privacy-compliant tracking setup with our CAPI solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF6B35] font-bold rounded-xl transition-all hover:scale-105 shadow-xl"
                    >
                        Schedule an Audit
                    </Link>
                </div>
            </div>
        </div>
    </>
)
