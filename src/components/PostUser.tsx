import React from "react";

export default function PostUser() {
  return (
    <div className="p-6 border-b border-neutral-700">
      <div className="flex items-center gap-3">
        <div className="bg-neutral-900 rounded-full w-14 h-14"></div>
        <div>
          <form action="">
            <input
              className="text-xl bg-transparent outline-0 w-[400px]"
              type="text"
              name="post"
              placeholder="What is happening?!"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
