import { motion } from "framer-motion";
import { PROFILE } from "../constants";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 min-h-[80vh] flex flex-col justify-center">
            <div className="max-w-5xl mx-auto w-full">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 flex items-center gap-4"
                >
                    <span className="text-accent">05.</span> CONTACT
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-secondary text-lg mb-8">
                            I am currently available for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <div className="space-y-4">
                            <a href={PROFILE.socials.email} className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                                <Mail /> {PROFILE.socials.email.replace('mailto:', '')}
                            </a>
                            <a href={PROFILE.socials.phone} className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                                <Phone /> +212 672479075
                            </a>
                            <a href={PROFILE.socials.linkedin} target="_blank" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                                <Linkedin /> Fadoua Bach
                            </a>
                            <a href={PROFILE.socials.github} target="_blank" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                                <Github /> GitHub
                            </a>
                        </div>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-secondary">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-secondary">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider text-secondary">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-accent outline-none transition-colors" placeholder="Hello..." />
                        </div>
                        <button className="w-full bg-accent text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            <footer className="text-center text-secondary mt-20 text-sm">
                <p>© 2025 Fadoua Bach. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
