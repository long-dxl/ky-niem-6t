import { useState, useEffect } from "react";
import { Heart, Delete } from "lucide-react";

const SECRET = "2311";

interface PinLockProps {
  onUnlock: () => void;
}

export function PinLock({ onUnlock }: PinLockProps) {
  const [pin, setPin] = useState("");
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (pin.length === 4) {
      if (pin === SECRET) {
        setTimeout(onUnlock, 300);
      } else {
        setShake(true);
        setTimeout(() => {
          setPin("");
          setShake(false);
        }, 600);
      }
    }
  }, [pin, onUnlock]);

  const handlePress = (digit: string) => {
    if (pin.length < 4) setPin((p) => p + digit);
  };

  const handleDelete = () => setPin((p) => p.slice(0, -1));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#eef6fd] px-4">
      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        {/* Icon */}
        <Heart className="w-16 h-16 text-sky-500 stroke-[1.5]" />

        {/* Message */}
        <p className="text-center text-gray-400 text-lg leading-relaxed">
          Nhập mã bí mật để mở quà bất ngờ nhé em yêu
        </p>

        {/* PIN dots */}
        <div className={`flex gap-4 ${shake ? "animate-shake" : ""}`}>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-14 h-14 rounded-2xl border-2 transition-all duration-150 ${
                i < pin.length
                  ? "bg-sky-500 border-sky-500 scale-105"
                  : "bg-white/60 border-gray-200"
              }`}
            />
          ))}
        </div>

        {/* Numpad */}
        <div className="grid grid-cols-3 gap-3 w-full mt-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button
              key={n}
              onClick={() => handlePress(String(n))}
              className="h-16 rounded-2xl bg-white shadow-sm text-xl font-medium text-gray-800 active:scale-95 transition-transform"
            >
              {n}
            </button>
          ))}
          {/* empty, 0, delete */}
          <div />
          <button
            onClick={() => handlePress("0")}
            className="h-16 rounded-2xl bg-white shadow-sm text-xl font-medium text-gray-800 active:scale-95 transition-transform"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center active:scale-95 transition-transform"
          >
            <Delete className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
