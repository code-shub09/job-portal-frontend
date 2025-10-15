

import { CircleUser } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-sm border-b">
      <h2 className="text-gray-700 font-medium text-lg">Welcome, <span className="font-semibold">Google</span></h2>
      <div className="flex items-center gap-3">
        <CircleUser className="text-gray-600" size={28} />
      </div>
    </header>
  );
}
