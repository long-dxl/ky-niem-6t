import { useState } from "react";
import { TimelineSection } from "./components/TimelineSection";
import { PinLock } from "./components/PinLock";
import { Heart } from "lucide-react";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PinLock onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/50 to-transparent" />
        <div className="relative container mx-auto px-4 py-12 md:py-20 text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <Heart className="w-10 h-10 md:w-16 md:h-16 text-sky-500 fill-sky-500 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl mb-3 md:mb-4 pb-2 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            6 Tháng Bên Nhau
          </h1>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Kỷ niệm nửa năm yêu thương, tiếng cười và những ký ức không thể quên
          </p>
          <div className="mt-5 md:mt-8 inline-block px-4 md:px-6 py-2 md:py-3 bg-white rounded-full shadow-lg">
            <p className="text-sm md:text-base text-gray-600">
              23/11/2025 — 23/5/2026
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Footer */}
      <footer className="py-8 md:py-12 text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-sky-400 fill-sky-400 mx-auto mb-3" />
          <p className="text-sm md:text-base text-gray-600">Chúc cho còn nhiều nhiều kỷ niệm đẹp bên nhau nữa ❤️</p>
        </div>
      </footer>
    </div>
  );
}
