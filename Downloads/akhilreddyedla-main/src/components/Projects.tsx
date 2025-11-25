// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Parallax } from "swiper/modules";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import AOS from "aos";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/parallax";

// import fraudImage from "@/assets/projects/fraud-detection.jpg";
// import replicationImage from "@/assets/projects/data-replication.jpg";
// import marketingImage from "@/assets/projects/marketing-analytics.jpg";
// import airflowImage from "@/assets/projects/airflow-etl.jpg";
// import opioidImage from "@/assets/projects/opioid-analytics.jpg";
// import qualityImage from "@/assets/projects/data-quality.jpg";

// export const Projects = () => {
//   const swiperRef = useRef<any>(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   const projects = [
//     {
//       title: "Real-Time Fraud Detection",
//       description: "Streaming analytics with Kafka + PySpark processing bank transactions for instant fraud alerts.",
//       tech: ["Python", "Kafka", "Spark", "AWS Kinesis"],
//       image: fraudImage,
//       preview: "#",
//       code: "#",
//     },
//     {
//       title: "Coupa-to-BigQuery Replication",
//       description: "Automated pipeline replicating 150 enterprise tables with reliable daily updates.",
//       tech: ["GCP", "DataStream", "BigQuery", "Terraform"],
//       image: replicationImage,
//       preview: "#",
//       code: "#",
//     },
//     {
//       title: "Marketing Analytics Pipeline",
//       description: "Adobe Analytics ingestion to BigQuery enabling real-time marketing dashboards.",
//       tech: ["GCP", "Pub/Sub", "Cloud Functions", "BigQuery"],
//       image: marketingImage,
//       preview: "#",
//       code: "#",
//     },
//     {
//       title: "Cloud ETL Framework",
//       description: "Airflow-based orchestration managing multi-tenant workflows with high reliability.",
//       tech: ["Airflow", "Python", "Docker", "Kubernetes"],
//       image: airflowImage,
//       preview: "#",
//       code: "#",
//     },
//     {
//       title: "Fraud & Opioid POC",
//       description: "Real-time analytics for risk monitoring with Power BI visualizations.",
//       tech: ["Spark", "AWS", "Power BI", "Python"],
//       image: opioidImage,
//       preview: "#",
//       code: "#",
//     },
//     {
//       title: "Data Quality Monitor",
//       description: "Alerting system tracking pipeline health metrics with automated anomaly detection.",
//       tech: ["Python", "GitHub Actions", "GCP", "Monitoring"],
//       image: qualityImage,
//       preview: "#",
//       code: "#",
//     },
//   ];

//   return (
//     <section id="projects" className="py-20 bg-background relative overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(197,165,114,0.3)_10px,rgba(197,165,114,0.3)_20px)]" />
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
//         >
//           Featured Projects
//         </motion.h2>

//         <div className="relative" data-aos="fade-up">
//           <Swiper
//             ref={swiperRef}
//             modules={[Navigation, Parallax]}
//             spaceBetween={30}
//             slidesPerView={1}
//             parallax={true}
//             breakpoints={{
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//             className="pb-12"
//           >
//             {projects.map((project, index) => (
//               <SwiperSlide key={index}>
//                 <motion.div
//                   whileHover={{ y: -10 }}
//                   className="glass rounded-lg overflow-hidden h-full card-hover"
//                 >
//                   <div className="relative h-48 overflow-hidden group">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>

//                   <div className="p-6">
//                     <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
//                       {project.title}
//                     </h3>
//                     <p className="text-black text-sm mb-4 leading-relaxed">
//                       {project.description}
//                     </p>

//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.tech.map((tech, i) => (
//                         <Badge key={i} variant="outline" className="border-gold text-gold">
//                           {tech}
//                         </Badge>
//                       ))}
//                     </div>

//                     {/* <div className="flex gap-3">
//                       <Button size="sm" className="btn-glow bg-primary hover:bg-primary/90 text-jet">
//                         <ExternalLink size={14} className="mr-2" />
//                         Preview
//                       </Button>
//                       <Button size="sm" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-jet">
//                         <Github size={14} className="mr-2" />
//                         Code
//                       </Button>
//                     </div> */}
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Navigation Buttons */}
//           <button
//             onClick={() => swiperRef.current?.swiper.slidePrev()}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 text-jet hover:bg-gold/90 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-gold"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={() => swiperRef.current?.swiper.slideNext()}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 text-jet hover:bg-gold/90 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-gold"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={24} />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };





















import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Parallax } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/parallax";

import gcsImage from "/gcs.jpg";
import adobeImage from "/adobe.jpg";
import sqlImage from "/realtime.jpg";
import sapImage from "/sap.jpg";
import migrationImage from "/snowflack.jpg";

export const Projects = () => {
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Event-Driven GCS to BigQuery Ingestion",
      description:
        "Developed an event-driven data ingestion pipeline from Google Cloud Storage to BigQuery using Pub/Sub and Cloud Functions. Automated metadata-driven loads to support both batch and real-time ingestion with error handling and monitoring.",
      tech: ["GCP", "Pub/Sub", "Cloud Functions", "BigQuery"],
      image: gcsImage,
      preview: "#",
      code: "#",
    },
    {
      title: "Adobe Analytics Data Automation",
      description:
        "Built a data automation pipeline to ingest Adobe Analytics data into BigQuery for real-time marketing dashboards. Utilized Cloud Scheduler, Cloud Functions, and Pub/Sub for API extraction, transformation, and loading with enhanced data freshness.",
      tech: ["GCP", "Pub/Sub", "Cloud Scheduler", "BigQuery"],
      image: adobeImage,
      preview: "#",
      code: "#",
    },
    {
      title: "Real-Time SQL Server to BigQuery Replication",
      description:
        "Implemented a real-time data replication pipeline from SQL Server to BigQuery using DataStream and Dataflow. Designed incremental and CDC-based ingestion ensuring low-latency synchronization across on-prem and cloud environments.",
      tech: ["GCP", "DataStream", "Dataflow", "BigQuery"],
      image: sqlImage,
      preview: "#",
      code: "#",
    },
    {
      title: "SAP HANA Data Ingestion Pipeline",
      description:
        "Developed an SAP HANA data ingestion framework using SAP SLT and DataStream to BigQuery. Built transformation layers for harmonized data models supporting analytics use cases and financial dashboards.",
      tech: ["SAP SLT", "GCP", "DataStream", "BigQuery"],
      image: sapImage,
      preview: "#",
      code: "#",
    },
    {
      title: "Snowflake to BigQuery Migration",
      description:
        "Migrated enterprise data pipelines from Snowflake to BigQuery using Cloud Run and Python. Built incremental loading, schema mapping, and automated data validation pipelines ensuring data accuracy and cost optimization.",
      tech: ["GCP", "BigQuery", "Python", "Cloud Run"],
      image: migrationImage,
      preview: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(197,165,114,0.3)_10px,rgba(197,165,114,0.3)_20px)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="relative" data-aos="fade-up">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Parallax]}
            spaceBetween={30}
            slidesPerView={1}
            parallax={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass rounded-lg overflow-hidden h-full card-hover"
                >
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-poppins font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-black text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-gold text-gold">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 text-jet hover:bg-gold/90 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 text-jet hover:bg-gold/90 flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};
