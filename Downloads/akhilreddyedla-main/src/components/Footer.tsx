import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jet py-8 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex gap-4">
            {/* <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-ivory hover:text-gold transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </motion.a> */}
            <motion.a
              href="https://www.linkedin.com/in/akhil-r-3452b1169/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-ivory hover:text-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:akhilreddyedla99@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-ivory hover:text-gold transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-stone text-sm"
          >
            © {currentYear}{" "}
            <motion.span
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold font-semibold"
            >
              Akhil Reddy Edla
            </motion.span>
            . All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
