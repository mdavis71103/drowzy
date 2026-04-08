import { Bell } from "lucide-react";
import { PendulumIcon } from "../PendulumIcon";

export function Header() {
  return (
    <header className="w-full flex justify-between">
      <div className="p-4 flex ">
        <div className="text-white flex gap-2 items-center">
          <button className="p-1 border-2 border-white/20 rounded-full">
            <PendulumIcon size={16} />
          </button>
          <h3 className="text-surface-tint">DROWZY</h3>
        </div>
      </div>
      <div className="p-4 flex items-center">
        <button className="text-surface-tint">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}
