'use client'

export default function ThankYouPage() {
  // Extract just the file ID from the Google Drive URL
  const fileId = "1slt7gfooa2y6J1CgriBd32AuWzU4XHy_"; // Just the ID part
  const driveLink = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="max-w-2xl mx-auto text-center py-20">
      <h1 className="text-3xl font-bold text-emerald-600 mb-4">🎉 Payment Successful</h1>
      <p className="mb-6">Thank you for buying the <strong>Meta Ads Playbook</strong>.</p>

      <a href={driveLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-500 text-white px-6 py-3 rounded">
        ⬇️ Download Playbook
      </a>

      <p className="mt-4 text-sm text-gray-500">If you don't see the file, check your email or contact hello@frameleads.com</p>
    </div>
  );
}
