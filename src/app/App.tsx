import { useState } from "react";
import { TimelineSection } from "./components/TimelineSection";
import { PinLock } from "./components/PinLock";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) {
    return <PinLock onUnlock={() => setUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50/30">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-0 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative container mx-auto px-4 pt-14 pb-10 md:py-20 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center mb-4 md:mb-6"
          >
            <div className="relative">
              <Heart className="w-12 h-12 md:w-16 md:h-16 text-sky-500 fill-sky-500 animate-pulse" />
              <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 bg-sky-300/30 rounded-full blur-md -z-10" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-6xl mb-3 pb-1 bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent font-bold"
          >
            6 Tháng Bên Nhau
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm md:text-xl text-gray-500 max-w-sm md:max-w-2xl mx-auto leading-relaxed px-2"
          >
            Kỷ niệm nửa năm yêu thương, tiếng cười và những ký ức không thể quên
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 md:mt-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full shadow-md border border-sky-100"
          >
            <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400 flex-shrink-0" />
            <p className="text-sm md:text-base text-gray-600 font-medium">
              23/11/2025 — 23/5/2026
            </p>
            <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400 flex-shrink-0" />
          </motion.div>
        </div>
      </div>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Footer */}
      <footer className="py-10 md:py-12 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-7 h-7 md:w-8 md:h-8 text-sky-400 fill-sky-400 mx-auto mb-3 animate-pulse" />
            <p className="text-sm md:text-base text-gray-500">Chúc cho còn nhiều nhiều kỷ niệm đẹp bên nhau nữa ❤️</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
