import React, { useState } from "react";
import { Sparkles, Edit } from "lucide-react";

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "Short(500-800 words)" },
    { length: 1200, text: "Medium(800-1200 words)" },
    { length: 1600, text: "Long(1200+ words)" },
  ];

  const [selectedLength, setSelectedLength] = useState(articleLength[0]);
  const [input, setInput] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // future implementation: send request to generate article
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F9FF] p-6 flex flex-col md:flex-row gap-4 items-start text-slate-700 font-sans">
      {/* Left Column - Article Configuration */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full md:w-1/2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence is..."
          required
        />

        <p className="mt-4 text-sm font-medium">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer ${
                selectedLength.text === item.text
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "text-gray-500 border-gray-300"
              }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Edit className="w-5" />
          Generate article
        </button>
      </form>

      {/* Right Column - Generated Article */}
      <div className="w-full md:w-1/2 p-6 bg-white rounded-lg border border-gray-200 shadow-sm min-h-[340px] flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <Edit className="w-5 h-5 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Generated article</h1>
        </div>

        <div className="flex-1 flex justify-center items-center text-gray-400 text-sm text-center px-4">
          <div className="flex flex-col items-center gap-3">
            <Edit className="w-9 h-9" />
            <p>Enter a topic and click "Generate article" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteArticle;
