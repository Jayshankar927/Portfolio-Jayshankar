const About = () => {
  const education = [
    {
      school: "JSSS&TU (SJCE)",
      degree: "B.E IN COMPUTER SCIENCE",
      year: "2019 - 2025",
      result: "CGPA-8.55"
    },
    {
      school: "Marimallappa's PU College",
      degree: "II-PUC",
      year: "2019",
      result: "95.6%"
    },
    {
      school: "JSS High School",
      degree: "SSLC",
      year: "2017",
      result: "96.8%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Experience & Education</h2>
        
        <div className="space-y-12">
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-bold text-slate-900">Frontend Web Developer Intern</h3>
            <p className="text-blue-600 font-medium">Codsoft | Aug 2024 - Sep 2024</p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Developed interactive UI components using ReactJS.</li>
              <li>• Improved website responsiveness using CSS Flexbox and Grid.</li>
              <li>• Optimized JavaScript to enhance site performance.</li>
            </ul>
          </div>

          <div className="grid gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-slate-600">{edu.school}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="mt-2 text-green-600 font-bold">Result: {edu.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;