import React from "react";
import PostUser from "./PostUser";

export default function CenterPage() {
  return (
    <div className="w-full h-screen border-neutral-700 border-l border-r">
      <div className="p-6 flex justify-between border-b border-neutral-700">
        <h1 className="text-xl font-bold">Home</h1>
        <div className="flex items-center gap-6 py-1 px-5 bg-neutral-700 rounded-xl">
          <button>For you</button>
          <button>Following</button>
        </div>
      </div>
      <PostUser />
    </div>
  );
}
