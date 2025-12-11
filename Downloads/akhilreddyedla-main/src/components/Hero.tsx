// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { Download, ArrowDown } from "lucide-react";
// import { Link } from "react-scroll";
// import { Button } from "@/components/ui/button";
// import profileImage from "@/assets/profile.jpg";

// export const Hero = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark"
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,165,114,0.1),transparent_50%)]" />
//       </div>

//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left: Text Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="order-2 md:order-1"
//           >
          

//             <motion.h1
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.5 }}
//   className="text-3xl md:text-3xl lg:text-3xl font-poppins font-semibold text-ivory mb-6 leading-tight"
// >
//   Hi, I'm 
//   <br/><span className="text-gold text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold gradient-to-r from-primary via-secondary to-accent  mb-6 leading-tight">Akhil Reddy Edla</span>
//   <br /><br />
//   <span className="gradient-text text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold text-ivory mb-6 leading-tight">
//     <TypeAnimation
//       sequence={[
//         "Data Engineer",
//         2000,
//         "Cloud Architect",
//         2000,
//         "ETL Specialist",
//         2000,
//       ]}
//       wrapper="span"
//       speed={50}
//       repeat={Infinity}
//     />
//   </span>
// </motion.h1>


//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-lg md:text-xl text-stone mb-8 leading-relaxed"
//             >
//               Data Engineer specializing in real-time and batch data processing,
//               ETL orchestration, and cloud analytics on{" "}
//               <span className="text-gold font-semibold">AWS</span> and{" "}
//               <span className="text-gold font-semibold">GCP</span>.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.9 }}
//               className="flex flex-wrap gap-4"
//             >
//               <Link to="projects" smooth={true} offset={-70} duration={500}>
//                 <Button
//                   size="lg"
//                   className="btn-glow bg-primary hover:bg-primary/90 text-jet font-semibold"
//                 >
//                   View Projects
//                   <ArrowDown className="ml-2" size={18} />
//                 </Button>
//               </Link>
//               <a href="/akhil-reddy.pdf" download>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="border-gold text-black hover:bg-gold hover:text-jet font-semibold"
//                 >
//                   <Download className="mr-2" size={18} />
//                   Download Resume
//                 </Button>
//               </a>
//             </motion.div>
//           </motion.div>

//           {/* Right: Profile Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
//             animate={{ opacity: 1, scale: 1, rotate: 0 }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="order-1 md:order-2 flex justify-center"
//           >
//             <div className="relative">
//               <motion.div
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                 className="absolute inset-0 rounded-full bg-gradient-luxury opacity-20 blur-3xl"
//               />
//               <img
//                 src={profileImage}
//                 alt="Akhil Reddy Edla"
//                 className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-gold shadow-2xl animate-float"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <ArrowDown className="text-gold" size={32} />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };




















































import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import profileImage from "/profilepic.jpg";

export const Hero = () => {
  // Determine base path for assets based on deployment platform
  const basePath = window.location.hostname.includes('github.io') 
    ? '/data-engineer-portfolio' 
    : '';
  
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark py-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,165,114,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 md:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-3xl md:text-3xl lg:text-3xl font-poppins font-semibold text-ivory mb-6 leading-tight"
            >
              Hi, I'm
              <br />
              <span className="text-gold text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold gradient-to-r from-primary via-secondary to-accent mb-6 leading-tight">
                Akhil Reddy Edla
              </span>
              <br />
              <br />
              <span className="gradient-text text-5xl md:text-6xl lg:text-7xl font-poppins font-extrabold text-ivory mb-6 leading-tight">
                <TypeAnimation
                  sequence={[
                    "Data Engineer",
                    2000,
                    "Cloud Architect",
                    2000,
                    "ETL Specialist",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-stone mb-8 leading-relaxed"
            >
              Data Engineer specializing in real-time and batch data processing,
              ETL orchestration, and cloud analytics on{" "}
              <span className="text-gold font-semibold">AWS</span>,{" "}
              <span className="text-gold font-semibold">Azure</span>, and{" "}
              <span className="text-gold font-semibold">GCP</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="projects" smooth={true} offset={-70} duration={500}>
                <Button
                  size="lg"
                  className="btn-glow bg-primary hover:bg-primary/90 text-jet font-semibold"
                >
                  View Projects
                  <ArrowDown className="ml-2" size={18} />
                </Button>
              </Link>
              <a href={`${basePath}/Akhil-Reddy-Edla.pdf`} download="Akhil-Reddy-Edla.pdf">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-black hover:bg-gold hover:text-jet font-semibold"
                >
                  <Download className="mr-2" size={18} />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image + Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-luxury opacity-20 blur-3xl"
              />
              <img
                src={profileImage}
                alt="Akhil Reddy Edla"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-gold shadow-2xl animate-float"
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -left-10 bg-gradient-to-r from-gold/90 to-primary/70 text-ivory font-semibold px-4 py-2 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                5+ Years Experience
              </motion.div>

              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-accent/80 to-gold/80 text-ivory font-semibold px-4 py-2 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
              >
                AWS, Azure & GCP
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="text-gold" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
