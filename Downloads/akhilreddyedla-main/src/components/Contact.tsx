import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import confetti from "canvas-confetti";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    // { icon: Github, label: "GitHub", value: "github.com/akhilreddy", href: "https://github.com", color: "text-gold" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akhilreddy", href: "https://www.linkedin.com/in/akhil-r-3452b1169/", color: "text-bordeaux" },
    { icon: Mail, label: "Email", value: "akhilreddyedla99@gmail.com", href: "mailto:akhilreddyedla99@gmail.com", color: "text-white" },
    { icon: Phone, label: "Phone", value: "+1(913) 327 - 0543", href: "tel:+1(913) 327 - 0543", color: "text-gold" },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-poppins font-extrabold text-center gradient-text mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 glass rounded-lg group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-full glass flex items-center justify-center ${contact.color} transition-all group-hover:scale-110`}>
                  <contact.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-ivory font-semibold mb-1">{contact.label}</h3>
                  <p className="text-stone text-sm break-all">{contact.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-lg space-y-6"
          >
            <div className="relative">
              <Input
                type="text"
                placeholder=" "
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="peer bg-charcoal border-gold/20 focus:border-gold text-ivory"
                aria-label="Your name"
              />
              <label className="absolute left-3 top-3 text-stone text-sm transition-all peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-gold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-gold bg-charcoal px-1">
                Name
              </label>
            </div>

            <div className="relative">
              <Input
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="peer bg-charcoal border-gold/20 focus:border-gold text-ivory"
                aria-label="Your email"
              />
              <label className="absolute left-3 top-3 text-stone text-sm transition-all peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-gold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-gold bg-charcoal px-1">
                Email
              </label>
            </div>

            <div className="relative">
              <Textarea
                placeholder=" "
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="peer bg-charcoal border-gold/20 focus:border-gold text-ivory resize-none"
                aria-label="Your message"
              />
              <label className="absolute left-3 top-3 text-stone text-sm transition-all peer-focus:text-xs peer-focus:-top-2 peer-focus:left-2 peer-focus:text-gold peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-gold bg-charcoal px-1">
                Message
              </label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full btn-glow bg-primary hover:bg-primary/90 text-jet font-semibold"
            >
              <Send className="mr-2" size={18} />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
