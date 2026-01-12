import { motion } from "framer-motion";
import { PROFILE } from "../constants";

const About = () => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-12 flex items-center gap-4"
                >
                    <span className="text-accent">01.</span> ABOUT
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-12"
                >
                    <div className="text-lg md:text-xl text-secondary leading-relaxed space-y-6">
                        <p>{PROFILE.bio}</p>
                    </div>
                    <div className="relative">
                        <div className="w-full aspect-square border-2 border-white/10 rounded-lg overflow-hidden relative group">
                            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors z-10" />
                            {/* Placeholder for real image or avatar */}
                            <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-secondary">
                                [Image Placeholder]
                            </div>
                        </div>
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-accent -z-10" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
