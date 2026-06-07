'use client'

export default function ThankYouPage() {
  // Direct Google Drive download link for the PDF file
  const driveLink = "https://drive.google.com/uc?export=download&id=1la6X7QXzsBM3H4wmoV4uUroeBejWQiN2";

  return (
    <div className="max-w-2xl mx-auto text-center py-20 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-[#FF6B35] mb-4">🎉 Payment Successful!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for purchasing the <strong>Meta Ads Playbook</strong>.
        </p>

        <div className="bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-lg p-4 mb-6">
          <p className="text-[#FF6B35] font-medium mb-2">📧 Check Your Email</p>
          <p className="text-slate-600 text-sm">
            We've sent the download link to your email address. Please check your inbox (and spam folder).
          </p>
        </div>

        <div className="space-y-4">
          <a
            href={driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FF6B35] hover:bg-[#FF8A50] text-white px-6 py-3 rounded-xl font-bold transition-colors w-full sm:w-auto"
          >
            ⬇️ Download Playbook
          </a>

          <div className="text-sm text-gray-500">
            <p>If the download doesn't work, please:</p>
            <ul className="mt-2 space-y-1">
              <li>• Check your email for the download link</li>
              <li>• Contact us at <a href="mailto:ajsal@frameleads.com" className="text-[#FF6B35] hover:underline">ajsal@frameleads.com</a></li>
              <li>• WhatsApp us at <a href="https://wa.me/916362821368" className="text-[#FF6B35] hover:underline">+91 6362821368</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-3">What's Next?</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>✅ Download and read the playbook</p>
            <p>✅ Follow the step-by-step instructions</p>
            <p>✅ Start implementing Meta Ads strategies</p>
            <p>✅ Join our community for support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
