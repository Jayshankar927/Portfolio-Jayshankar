import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Smart Interview Tracker",
      desc: "Full-stack web application to help job seekers track applications and interview status with analytics.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      title: "Emotion Detection Using Tweets",
      desc: "NLP-based system using Python and LSTM networks to detect emotions in social media text.",
      tech: ["Python", "TensorFlow", "LSTM", "NLP"],
      link: "#"
    },
    {
      title: "Linktree Clone",
      desc: "Developed a dynamic link management system with user authentication and responsive design.",
      tech: ["Flask", "SQLite", "Bootstrap", "JavaScript"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group p-6 bg-white border border-slate-200 rounded-2xl hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="https://github.com/Jayshankar927" className="text-slate-500 hover:text-black">
                  <Github size={20} />
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-600">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;