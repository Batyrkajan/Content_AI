import React from "react";
import { useState } from "react";

interface Idea {
  id: number;
  title: string;
  description: string;
}

const IdeasDisplayPage = () => {
  const [ideas, setIdeas] = useState<Idea[]>([
    { id: 1, title: "Idea 1", description: "This is a description for idea 1" },
    { id: 2, title: "Idea 2", description: "This is a description for idea 2" },
    { id: 3, title: "Idea 3", description: "This is a description for idea 3" },
    { id: 4, title: "Idea 4", description: "This is a description for idea 4" },
    { id: 5, title: "Idea 5", description: "This is a description for idea 5" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Ideas Display Page</h1>
      <ul className="space-y-4">
        {ideas.map((idea) => (
          <li
            key={idea.id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <h2 className="text-2xl font-bold mb-2">{idea.title}</h2>
            <p className="text-gray-600">{idea.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IdeasDisplayPage;
