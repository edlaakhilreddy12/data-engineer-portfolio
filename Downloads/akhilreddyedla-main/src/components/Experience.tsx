import { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import AOS from "aos";

export const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      company: "CenterPoint Energy",
      role: "Data Engineer",
      location: "Evansville, IN",
      period: "Oct 2024 - Present",
      achievements: [
        "Optimized ETL pipelines using Python, PySpark, and SQL → 40% faster analytics queries",
        "Built streaming via GCP Pub/Sub, Cloud Functions & DataStream for millions of daily events",
        "Automated replication of 150 Coupa tables from Snowflake to BigQuery",
        "Integrated SAP SLT workflows with GCP infrastructure for synchronized enterprise data",
        "Developed Adobe Analytics ingestion pipelines into GCS and BigQuery",
        "Created Power BI dashboards for pipeline performance monitoring",
        "Implemented CI/CD with GitHub, Cloud Build, and Terraform → 60% fewer production errors",
      ],
    },
    {
      company: "Fifth Third Bank",
      role: "Data Engineer",
      location: "Evansville, IN",
      period: "Jan 2023 - Oct 2024",
      achievements: [
        "Engineered batch/streaming ETL pipelines on AWS → 45% improved data availability",
        "Built Spark Structured Streaming with Kafka for real-time fraud detection",
        "Automated data validation with Python & AI CoPilot → 70% reliability boost",
        "Designed POCs for fraud and opioid analytics with real-time PySpark workflows",
        "Migrated on-prem SQL Server to S3/Redshift → 50% faster queries",
        "Orchestrated Airflow DAGs → 40% fewer pipeline failures",
        "Achieved 99% pipeline uptime via proactive monitoring",
      ],
    },
    {
      company: "Infogain",
      role: "Data Engineer",
      location: "Bangalore, India",
      period: "Jul 2019 - Dec 2022",
      achievements: [
        "Designed high-frequency ETL with Python multiprocessing, Kafka, Spark & Airflow",
        "Built event-driven frameworks with Spark Structured Streaming for real-time dashboards",
        "Automated validation with Pytest → 99% accuracy",
        "Enhanced workflows to process millions of API calls daily with 50% lower latency",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
        >
          Experience
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 100}
              className={`flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gold animate-glow-pulse" />
                {index < experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-gradient-luxury mt-2" />
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex-1 glass p-8 rounded-lg card-hover border border-gold/20"
              >
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-poppins font-bold text-ivory mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gold font-semibold mb-1">
                      <Briefcase size={18} className="mr-2" />
                      {exp.company}
                    </div>
                    <p className="text-stone text-sm">{exp.location}</p>
                  </div>
                  <div className="flex items-center text-stone text-sm">
                    <Calendar size={16} className="mr-2" />
                    {exp.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="text-gold mr-3 mt-1">▸</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
