"use client";

import { addNewsletter } from "@/app/(su)/admin/news-letter-list/action";
import { useActionState } from "react";

const initialState = {
  success: false,
  message: "",
};

export default function Newsletter() {
  const [state, formAction] = useActionState(addNewsletter, initialState);

  return (
    <div>
      <h3 className="text-xl font-semibold text-[#000000]">Stay Updated</h3>
      <p className="mt-4 text-gray-600">
        Subscribe to our newsletter for the latest updates and insights from{" "}
        <span className="text-black font-semibold">AKDK Digital.</span>
      </p>

      {state.success ? (
        <p className="text-green-600 mt-4 font-medium">{state.message}</p>
      ) : (
        <form action={formAction} className="mt-6 flex">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="p-3 border border-gray-600 rounded-l-md w-full outline-none placeholder-gray-400 text-black"
          />
          <button
            type="submit"
            className="bg-red-600 px-5 py-3 rounded-r-md text-white text-sm font-semibold hover:bg-red-500 transition-all"
          >
            Subscribe
          </button>
        </form>
      )}

      {!state.success && state.message && (
        <p className="text-red-500 mt-2 text-sm">{state.message}</p>
      )}
    </div>
  );
}
