
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: "Programming in Java",
      issuer: "NPTEL",
      link: "#"
    },
    {
      title: "Data Base Management System",
      issuer: "NPTEL",
      link: "#"
    },
    {
      title: "Programming, Data Structures and Algorithms Using Python",
      issuer: "NPTEL",
      link: "#"
    },
    {
      title: "Problem solving through programming in C",
      issuer: "NPTEL",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="animate-on-scroll text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
            Certifications
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
            Professional Certifications
          </h2>
          <p className="text-navy-700 max-w-2xl mx-auto">
            I've completed several professional certifications to enhance my skills and knowledge in various technologies and programming languages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-full">
                  <Award size={20} />
                </div>
                <h3 className="font-semibold text-navy-900">{cert.title}</h3>
              </div>
              <div className="text-navy-600 text-sm mb-4">Issued by {cert.issuer}</div>
              <div className="mt-auto pt-4">
                <Button variant="outline" className="w-full" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
