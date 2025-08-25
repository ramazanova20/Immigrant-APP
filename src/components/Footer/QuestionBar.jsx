import { useState } from "react";
import { FaSearch, FaMicrophone } from "react-icons/fa";

function QuestionBar() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim()) {
      setAnswer(`Q: "${question}" → Answer coming soon...`);
      setQuestion("");
    }
  };

  return (
    <div className="flex flex-col w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white border border-gray-300 rounded-full shadow px-3 py-2"
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
          className="flex-1 outline-none text-gray-700 px-2"
        />
        <button type="submit" className="text-[#FF6C01] hover:scale-110 transition-transform pr-2">
          <FaMicrophone />
        </button>
        <button type="submit" className="text-[#FF6C01] hover:scale-110 transition-transform">
          <FaSearch />
        </button>
      </form>

      {answer && (
        <div className="mt-3 bg-[#FF6C01]/10 text-gray-800 p-3 rounded-lg shadow-inner text-sm">
          {answer}
        </div>
      )}
    </div>
  );
}

export default QuestionBar;
