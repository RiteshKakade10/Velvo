import React from "react";

export default function LoadingSkeleton() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <h1 className="text-6xl font-extrabold text-white tracking-widest animate-pulse">
        Velvo
      </h1>
    </div>
  );
}
