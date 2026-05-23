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

const colorClasses: Record<string, { bg: string; border: string; icon: string; glow: string }> = {
  sky: {
    bg: "bg-sky-100",
    border: "border-sky-400",
    icon: "text-sky-600",
    glow: "shadow-sky-200",
  },
  blue: {
    bg: "bg-blue-100",
    border: "border-blue-400",
    icon: "text-blue-600",
    glow: "shadow-blue-200",
  },
  cyan: {
    bg: "bg-cyan-100",
    border: "border-cyan-400",
    icon: "text-cyan-600",
    glow: "shadow-cyan-200",
  },
};

export function TimelineItem({ date, title, description, icon: Icon, color, index, image }: TimelineItemProps) {
  const colors = colorClasses[color] || colorClasses.sky;
  const images = image ? (Array.isArray(image) ? image : [image]) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative flex items-start gap-3 md:gap-8"
    >
      {/* Icon */}
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-11 h-11 md:w-16 md:h-16 rounded-full ${colors.bg} border-2 md:border-4 ${colors.border} ${colors.icon} flex items-center justify-center shadow-md ${colors.glow} bg-white z-10 relative`}
        >
          <Icon className="w-5 h-5 md:w-8 md:h-8" />
        </motion.div>
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white rounded-2xl p-4 md:p-6 shadow-md border border-gray-100 min-w-0">
        <div className="mb-2">
          <span className={`inline-block px-2 py-0.5 md:px-3 md:py-1 ${colors.bg} ${colors.icon} rounded-full text-xs md:text-sm`}>
            {date}
          </span>
        </div>
        <h3 className="text-lg md:text-2xl mb-1.5 md:mb-2 text-gray-800 leading-snug">{title}</h3>
        <p className="text-sm md:text-base text-gray-500 leading-relaxed">{description}</p>

        {images.length > 0 && (
          <div className={`mt-3 grid gap-1.5 md:gap-2 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} ${i + 1}`}
                className="w-full object-cover rounded-xl aspect-square md:aspect-auto"
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
