import { useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

import AOS from "aos";
import { Calendar } from "lucide-react";

export const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "University of Missouri | Warrensburg, MO",
      year: "Jan 2023 - May 2024",
      gpa: "3.8/4.0",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Jawaharlal Nehru Technological University | Hyderabad, India",
      year: "Aug 2016 - May 2020",
      gpa: "3.7/4.0",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
        >
          Education
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-lg flex items-start gap-6 card-hover border border-gold/20"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center flex-shrink-0 shimmer"
              >
                <GraduationCap className="text-jet w-8 h-8" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-poppins font-bold text-ivory mb-2">
                  {edu.degree}
                </h3>
                <p className="text-gold font-semibold text-lg mb-1">{edu.school}</p>
                <div className="flex items-center gap-2 text-stone">
                  <Calendar size={16} />
                  <span>{edu.year}</span>
                  <span>•</span>
                  <span className="text-primary font-semibold">GPA: {edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
