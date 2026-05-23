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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-start gap-6 md:gap-8"
    >
      {/* Icon */}
      <div className="relative flex-shrink-0">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-full ${colors.bg} border-4 ${colors.border} ${colors.icon} flex items-center justify-center shadow-lg ${colors.glow} bg-white z-10 relative`}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
      >
        <div className="mb-2">
          <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.icon} rounded-full text-sm`}>
            {date}
          </span>
        </div>
        <h3 className="text-2xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {image && (
          <div className={`mt-4 grid gap-2 ${Array.isArray(image) && image.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {(Array.isArray(image) ? image : [image]).map((src, i) => (
              <img key={i} src={src} alt={`${title} ${i + 1}`} className="w-full object-cover rounded-xl" />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
