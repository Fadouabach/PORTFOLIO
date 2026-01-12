import { motion } from "framer-motion";
import { PROJECTS } from "../constants";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <section id="work" className="py-20 px-6 bg-white/5">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-16 flex items-center gap-4"
                >
                    <span className="text-accent">04.</span> WORK
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-black border border-white/10 overflow-hidden"
                        >
                            {/* Image Placeholder or Actual Image */}
                            <div className="aspect-video bg-neutral-900 w-full flex items-center justify-center text-secondary group-hover:bg-neutral-800 transition-colors overflow-hidden relative">
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                    />
                                )}
                                {project.images && (
                                    <>
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-0 transition-all duration-500"
                                        />
                                        <img
                                            src={project.images[1]}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                        />
                                    </>
                                )}
                                {!project.image && !project.images && (
                                    <span className="text-4xl font-bold opacity-20">PROJECT</span>
                                )}
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white"><Github size={20} /></a>
                                        <a href="#" className="text-secondary hover:text-white"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                                <p className="text-secondary mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-mono text-accent border border-accent/20 px-2 py-1">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
