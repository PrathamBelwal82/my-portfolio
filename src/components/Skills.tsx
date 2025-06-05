import React from 'react';

const skills = ["React", "Go", "Node.js", "Redis", "MongoDB", "Next.js", "Tailwind CSS", "Hugging Face", "Docker"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-blue-50">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {skills.map((skill, index) => (
          <span key={index} className="bg-white px-4 py-2 rounded-xl shadow text-gray-800 font-medium">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
