import { motion } from "framer-motion";
import { SKILLS } from "../constants";

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-white/5">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 flex items-center gap-4"
                >
                    <span className="text-accent">02.</span> SKILLS
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {SKILLS.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black/40 p-6 border border-white/5 hover:border-accent/40 transition-colors"
                        >
                            <h3 className="text-xl font-bold mb-6 text-accent">{group.category}</h3>
                            <ul className="space-y-3">
                                {group.items.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-secondary">
                                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
