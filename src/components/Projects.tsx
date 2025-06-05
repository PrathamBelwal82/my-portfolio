

const projects = [
  {
    title: "AI-Powered D&D RPG Game",
    description: "A dynamic, microservices-based role-playing game using LLMs for real-time storytelling.",
    tech: "Go, Redis, React, Hugging Face, Ollama",
    github: "https://github.com/PrathamBelwal82/AI_dnd_game",
    live: "#"
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">Tech: {project.tech}</p>
            <div className="flex justify-between">
              <a href={project.github} target="_blank" className="text-blue-600 hover:underline">GitHub</a>
              <a href={project.live} target="_blank" className="text-blue-600 hover:underline">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
