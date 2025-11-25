import { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import AOS from "aos";
import { Badge } from "@/components/ui/badge";

export const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const certifications = [
    {
      title: "Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "",
      badge: "Associate",
    },
    {
      title: "GCP Data Engineer Professional Certification",
      organization: "Google Cloud",
      date: "2023",
      badge: "Professional",
    },
    {
      title: "Scrum/Agile Methodology Certification",
      organization: "AGILE ",
      date: "2022",
      badge: "Certified",
    },
    {
      title: "Data Engineering with Python",
      organization: " Coursera",
      date: "2023",
      badge: "CKA",
    },
     {
      title: "Big Data Analytics Specialization",
      organization: " Coursera",
      date: "2023",
      badge: "CKA",
    },
     {
      title: "Power BI for Data Analysts",
      organization: " LinkedIn Learning ",
      date: "2023",
      badge: "CKA",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              data-aos="flip-up"
              data-aos-delay={index * 100}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="relative h-64 perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of Card */}
              <div className="absolute inset-0 glass rounded-lg p-6 flex flex-col items-center justify-center text-center backface-hidden border border-gold/20">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 rounded-full bg-gradient-luxury flex items-center justify-center mb-4 shimmer"
                >
                  <Award className="text-jet w-10 h-10" />
                </motion.div>
                <h3 className="text-lg font-poppins font-bold text-foreground mb-2">
                  {cert.title}
                </h3>
                <Badge variant="outline" className="border-gold text-gold mb-2">
                  {cert.badge}
                </Badge>
                <p className="text-sm text-muted-foreground">{cert.organization}</p>
              </div>

              {/* Back of Card */}
              <div
                className="absolute inset-0 glass rounded-lg p-6 flex flex-col items-center justify-center text-center border border-gold/20"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
              >
                <p className="text-gold text-xl font-poppins font-bold mb-2">Issued</p>
                {/* <p className="text-2xl text-ivory font-bold mb-4">{cert.date}</p> */}
                {/* <button className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors">
                  <ExternalLink size={16} />
                  <span className="text-sm">Verify</span>
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
