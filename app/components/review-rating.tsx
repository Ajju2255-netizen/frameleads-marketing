import { Star } from "lucide-react"

interface ReviewRatingProps {
  className?: string
}

export default function ReviewRating({ className = "" }: ReviewRatingProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? "text-amber-400 fill-current" : "text-gray-300"}`} 
      />
    ))
  }

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="flex items-center gap-1">
        {renderStars(5)}
      </div>
      <span className="text-lg font-semibold text-[#5A5A5A]">4.8/5</span>
      <span className="text-sm text-[#5A5A5A]/60">(1,033+ reviews)</span>
    </div>
  )
}

// Compact version for smaller spaces
export function CompactReviewRating({ className = "" }: { className?: string }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-3 h-3 ${index < rating ? "text-amber-400 fill-current" : "text-gray-300"}`} 
      />
    ))
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-0.5">
        {renderStars(5)}
      </div>
      <span className="text-sm font-medium text-[#5A5A5A]">4.8/5</span>
      <span className="text-xs text-[#5A5A5A]/60">(1,033+)</span>
    </div>
  )
}

// Hero section version with larger display
export function HeroReviewRating({ className = "" }: { className?: string }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? "text-amber-400 fill-current" : "text-gray-300"}`} 
      />
    ))
  }

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex items-center gap-1">
        {renderStars(5)}
      </div>
      <span className="text-2xl font-bold text-[#5A5A5A]">4.8/5</span>
      <span className="text-base text-[#5A5A5A]/60">(1,033+ reviews)</span>
    </div>
  )
}
