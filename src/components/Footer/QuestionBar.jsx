import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

function QuestionBar() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (question.trim()) {
      setAnswer(`Quest: "${question}" answer...`);
      setQuestion("");
    }
  };

  return (
    <div className="w-full">
    <div className="flex flex-col items-center p-1 max-w-[1280px] mx-auto justify-center bg-amber-500">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white text-gray-500 rounded-full shadow-lg px-3 py-2 md:py-3 lg:py-4 w-full max-w-screen shadow-amber-800"
      >
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question..."
          className="flex-1 outline-none "
        />
        <button type="submit" className="text-[#FF6C01] pr-4 lg:text-xl">
          <FaMicrophone />
        </button>
        <button type="submit" className=" text-[#FF6C01] lg:text-xl">
          <FaSearch />
        </button>
      </form>

      {answer && (
        <div className="mt-4 bg-gray-400 p-3 rounded-lg shadow w-full max-w-md">
          {answer}
        </div>
      )}
    </div>
    </div>
  );
}

export default QuestionBar;
