import { useState } from "react";
import { Search } from "lucide-react";

interface IdeaGeneratorPageProps {}

const IdeaGeneratorPage: React.FC<IdeaGeneratorPageProps> = () => {
  const [keywords, setKeywords] = useState("");

  const handleGenerateIdeas = () => {
    console.log("Generate ideas button clicked with keywords:", keywords);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Idea Generator</h1>
      <div className="flex flex-col mb-4">
        <label className="text-lg font-medium mb-2">Enter keywords:</label>
        <div className="flex items-center border-2 border-gray-200 rounded-lg p-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="flex-1 text-lg outline-none"
            placeholder="Enter keywords"
          />
        </div>
      </div>
      <button
        onClick={handleGenerateIdeas}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        Generate Ideas
      </button>
    </div>
  );
};

export default IdeaGeneratorPage;
