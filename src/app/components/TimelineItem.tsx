import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  index: number;
  image?: string | string[];
}

const colorClasses: Record<string, { bg: string; border: string; icon: string; text: string; dot: string }> = {
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    icon: "text-sky-500",
    text: "text-sky-600",
    dot: "bg-sky-400",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "text-blue-500",
    text: "text-blue-600",
    dot: "bg-blue-400",
  },
  cyan: {
    bg: "bg-cyan-50",
    border: "border-cyan-200",
    icon: "text-cyan-500",
    text: "text-cyan-600",
    dot: "bg-cyan-400",
  },
};

export function TimelineItem({ date, title, description, icon: Icon, color, index, image }: TimelineItemProps) {
  const colors = colorClasses[color] || colorClasses.sky;
  const images = image ? (Array.isArray(image) ? image : [image]) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Mobile layout: full-width card, icon inside */}
      <div className="md:hidden">
        <div className="flex items-start gap-3">
          {/* Timeline dot */}
          <div className="flex flex-col items-center flex-shrink-0 mt-1">
            <div className={`w-9 h-9 rounded-full ${colors.bg} border-2 ${colors.border} ${colors.icon} flex items-center justify-center shadow-sm z-10`}>
              <Icon className="w-4 h-4" />
            </div>
          </div>

          {/* Card */}
          <div className="flex-1 min-w-0 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-1">
            {/* Card top accent */}
            <div className={`h-1 w-full ${colors.dot}`} />

            <div className="p-4">
              <span className={`inline-block px-2.5 py-0.5 ${colors.bg} ${colors.text} rounded-full text-xs font-medium mb-2`}>
                {date}
              </span>
              <h3 className="text-base font-semibold text-gray-800 mb-1 leading-snug">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>

              {images.length > 0 && (
                <div className={`mt-3 grid gap-1.5 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                  {images.map((src, i) => (
                    <motion.img
                      key={i}
                      src={src}
                      alt=""
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                      className="w-full rounded-xl object-cover"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout: icon on left */}
      <div className="hidden md:flex items-start gap-8">
        <div className="relative flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-16 h-16 rounded-full ${colors.bg} border-4 ${colors.border} ${colors.icon} flex items-center justify-center shadow-lg bg-white z-10 relative`}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
        >
          <div className="mb-2">
            <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}>
              {date}
            </span>
          </div>
          <h3 className="text-2xl mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>

          {images.length > 0 && (
            <div className={`mt-4 grid gap-2 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
              {images.map((src, i) => (
                <img key={i} src={src} alt="" className="w-full object-cover rounded-xl" />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
