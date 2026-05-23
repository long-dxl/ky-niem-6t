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
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-sky-500 fill-sky-500 animate-pulse" />
          </div>
          <h1 className="text-6xl mb-4 pb-2 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
            6 Tháng Bên Nhau
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Kỷ niệm nửa năm yêu thương, tiếng cười và những ký ức không thể quên
          </p>
          <div className="mt-8 inline-block px-6 py-3 bg-white rounded-full shadow-lg">
            <p className="text-gray-600">
              23 Tháng 11, 2025 — 23 Tháng 5, 2026
            </p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="container mx-auto px-4">
          <Heart className="w-8 h-8 text-sky-400 fill-sky-400 mx-auto mb-4" />
          <p className="text-gray-600">Chúc cho còn nhiều nhiều kỷ niệm đẹp bên nhau nữa ❤️</p>
        </div>
      </footer>
    </div>
  );
}
