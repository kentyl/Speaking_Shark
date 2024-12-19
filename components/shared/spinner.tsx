import React from "react";

export const Spinner: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="size-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );
};
