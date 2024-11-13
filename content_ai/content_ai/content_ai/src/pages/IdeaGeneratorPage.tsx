import { useState } from "react";
import { Search } from "lucide-react";

interface IdeaGeneratorPageProps {}

const IdeaGeneratorPage: React.FC<IdeaGeneratorPageProps> = () => {
  const [keywords, setKeywords] = useState("");

  const handleGenerateIdeas = () => {
    console.log(keywords);
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-12 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Idea Generator</h1>
      <div className="flex items-center mb-4">
        <Search className="w-6 h-6 mr-2" />
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter keywords"
          className="w-full p-2 pl-0 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleGenerateIdeas}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Generate Ideas
      </button>
    </div>
  );
};

export default IdeaGeneratorPage;
