const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "C++"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "HTML", "CSS", "Flask"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQLite"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Data Structures & Algorithms"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;