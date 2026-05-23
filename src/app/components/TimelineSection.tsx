import { TimelineItem } from "./TimelineItem";
import { Calendar, Flower2, Plane, Camera, Music, Sparkles, Star, Heart, Eye, PartyPopper } from "lucide-react";

const timelineEvents = [
  {
    date: "23 Tháng 11, 2025",
    title: "Nàng Đã Đồng Ý",
    description: "Ngày mọi thứ bắt đầu. Anh đã vô cùng hồi hộp khi cầm bó hoa tỏ tình người con gái ấy, thật hạnh phúc khi em nói 'đồng ý'",
    icon: Heart,
    color: "sky",
    image: "/dong-y.jpg",
  },
  {
    date: "21 Tháng 12, 2025",
    title: "Lần Đầu Xem Pháo Hoa",
    description: "Được cùng em đứng cạnh hồ ở NEU ngắm bầu trời rực sáng",
    icon: PartyPopper,
    color: "cyan",
    image: "/phao-hoa.jpg",
  },
  {
    date: "23 Tháng 12, 2025",
    title: "Lần Đầu Tự Bó Hoa",
    description: "Một bó hoa với nhiều sự lóng ngóng, xong chúng ta đã cùng đi ăn pizza siêu ngon và được chụp bức ảnh siêu cute ở kem tràng tiền",
    icon: Flower2,
    color: "blue",
    image: "/bo-hoa.jpg",
  },
  {
    date: "24 Tháng 12, 2025",
    title: "Đi Xem Concert Cùng Em",
    description: "Một buổi tối siêu nhộn nhịp",
    icon: Music,
    color: "sky",
    image: "/concert.jpg",
  },
  {
    date: "10 Tháng 2, 2026",
    title: "Món Quà Ấm Áp Mùa Đông",
    description: "Cùng em dạo quanh hồ Gươm trong tiết trời se lạnh và chụp những bức ảnh siêu cute ngay trước hồ",
    icon: Camera,
    color: "cyan",
    image: ["/ho-guom-1.png", "/ho-guom-2.png"],
  },
  {
    date: "2 Tháng 3, 2026",
    title: "Dạo Quanh Hồ Tây",
    description: "Cùng nhau đi chợ hoa vào đêm khuya hôm trước để hôm sau ra hồ bó hoa",
    icon: Flower2,
    color: "blue",
    image: "/ho-tay.png",
  },
  {
    date: "17 Tháng 5, 2026",
    title: "Thăm Em Ở Khu Quân Sự",
    description: "Một ngày gặp lại sau bao ngày xa cách, siêu nhớ em, siêu thương em phải chịu mệt. Ở cùng em đến cuối ngày mà nuối tiếc không muốn về",
    icon: Heart,
    color: "sky",
    image: "/quan-su.jpg",
  },
  {
    date: "23 Tháng 5, 2026",
    title: "6 Tháng Của Chúng Ta",
    description: "Nửa năm yêu thương, trưởng thành và hạnh phúc vô tận. Mãi mãi yêu em.",
    icon: Calendar,
    color: "sky",
  },
];

export function TimelineSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-16 text-gray-800">
          Hành Trình Của Chúng Ta
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-300 via-blue-400 to-cyan-300 hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={index}
                date={event.date}
                title={event.title}
                description={event.description}
                icon={event.icon}
                color={event.color}
                index={index}
                image={(event as any).image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
