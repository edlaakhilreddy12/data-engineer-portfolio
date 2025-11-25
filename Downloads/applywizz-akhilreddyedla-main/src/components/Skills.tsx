import { useEffect } from "react";
import { motion } from "framer-motion";
import { Database, Cloud, Code, Wrench } from "lucide-react";
import AOS from "aos";

export const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillCategories = [
    {
      icon: Database,
      title: "Data Engineering & ETL",
      skills: [
        "Airflow",
        "dbt",
        "Apache NiFi",
        "AWS Glue",
        "Data Lake/Lakehouse",
        "ETL Orchestration",
      ],
    },
    {
      icon: Code,
      title: "Big Data & Streaming",
      skills: [
        "Spark (PySpark)",
        "Spark SQL",
        "Kafka",
        "Delta Lake",
        "Flink",
        "Snowflake",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Platforms",
      skills: [
        "AWS (S3, Glue, Redshift, Lambda, EMR)",
        "GCP (BigQuery, Pub/Sub, DataStream)",
        "Azure (Data Factory, Synapse)",
      ],
    },
    {
      icon: Wrench,
      title: "DevOps & Tools",
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "Jenkins",
        "Git/GitHub",
        "CI/CD Pipelines",
      ],
    },
  ];

  const topSkills = [
    { name: "PySpark", level: 95 },
    { name: "Python", level: 90 },
    { name: "AWS", level: 85 },
    { name: "BigQuery", level: 88 },
     { name: "sql", level:  92},
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
        >
          Technical Skills
        </motion.h2>

        {/* Top Skills Progress Rings */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 max-w-4xl mx-auto" data-aos="fade-up">
          {topSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-3">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="rgba(197, 165, 114, 0.2)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "0 352" }}
                    whileInView={{
                      strokeDasharray: `${(skill.level / 100) * 352} 352`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C5A572" />
                      <stop offset="100%" stopColor="#6B1E1E" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-poppins font-bold text-gold">
                    {skill.level}%
                  </span>
                </div>
              </div>
              <p className="font-inter font-semibold text-ivory">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-lg card-hover"
            >
              <category.icon className="text-gold w-12 h-12 mb-4 animate-glow-pulse" />
              <h3 className="text-xl font-poppins font-bold text-ivory mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-charcoal text-stone text-sm rounded-full border border-gold/20 hover:border-gold transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
