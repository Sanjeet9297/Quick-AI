import { Scissors, Sparkles } from "lucide-react";
import React, { useState } from "react";

const RemoveObject = () => {

   const [input, setInput] = useState("");
   const [object, setObject] = useState("");
  
    const onSubmitHandler = async (e) => {
      e.preventDefault();
    };

  return (
    <div className="min-h-screen w-full bg-[#F5F9FF] p-6 flex flex-col md:flex-row gap-4 items-start text-slate-700 font-sans">
      {/* Left Column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full md:w-1/2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Object Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload image</p>
        <input
          onChange={(e) => setInput(e.target.files[0])}
          type="file"
          accept="image/*"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600"
          required
        />
        <p className="mt-6 text-sm font-medium">Describe Object Name to Remove</p>
        <textarea
          onChange={(e) => setObject(e.target.value)}
          value={object}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="e.g., watch or spoon , Only Single object name"
          required
        />

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#417DF6] to-[#8E37EB] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Scissors className="w-5" />
          Remove object
        </button>
      </form>

      {/* Right Column */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm min-h-[385px] flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <Scissors className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center text-gray-400 text-sm text-center px-4">
          <div className="flex flex-col items-center gap-3">
            <Scissors className="w-9 h-9" />
            <p>Upload an image and click "Remove Object" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;
