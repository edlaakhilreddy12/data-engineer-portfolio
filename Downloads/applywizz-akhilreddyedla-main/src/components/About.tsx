import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Zap } from "lucide-react";
import AOS from "aos";

export const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { value: 10, label: "Projects", suffix: "+" },
    { value: 5, label: "Years Experience", suffix: "+" },
    { value: 100, label: "Satisfaction", suffix: "%" },
  ];

  const highlights = [
    { icon: Database, label: "Big Data Processing", color: "text-gold" },
    { icon: Cloud, label: "Cloud Architecture", color: "text-bordeaux" },
    { icon: Zap, label: "Real-time Streaming", color: "text-navy" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setInView(true)}
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-12">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="100">
              Data Engineer with <span className="text-gold font-semibold">5+ years of experience</span> designing,
              building, and optimizing end-to-end data pipelines, lakehouse architectures, and cloud analytics platforms
              on AWS and GCP.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Skilled in real-time and batch data processing using{" "}
              <span className="text-red-500 font-semibold">Spark, PySpark, Kafka, and Python</span>, handling millions
              to billions of records efficiently. Adept at collaborating with business and analytics teams to deliver
              analytics-ready datasets, BI dashboards, and actionable insights.
            </p>
          </div>

          {/* Stats Counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="300">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: i * 0.2, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl font-poppins font-extrabold gradient-text mb-2">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: i * 0.2 }}
                  >
                    {stat.value}
                    {stat.suffix}
                  </motion.span>
                </div>
                <p className="text-muted-foreground font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Skill Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="400">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-lg text-center card-hover"
              >
                <item.icon className={`${item.color} w-12 h-12 mx-auto mb-4 animate-glow-pulse`} />
                <h3 className="text-lg font-poppins font-bold text-foreground">{item.label}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
