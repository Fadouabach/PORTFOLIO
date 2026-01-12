import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { PROFILE } from "../constants";

const Hero = () => {
    return (
        <section id="hero" className="h-screen flex flex-col justify-center px-6 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto w-full"
            >
                <h2 className="text-accent text-lg md:text-xl font-mono mb-4">
                    Hello, I am
                </h2>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] text-white mix-blend-difference mb-6">
                    {PROFILE.name.toUpperCase().split(" ").map((word, i) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h1>
                <p className="text-secondary text-xl md:text-2xl max-w-2xl mb-10">
                    {PROFILE.role}
                </p>

                <Link
                    to="contact"
                    smooth={true}
                    className="inline-block px-8 py-4 border border-accent text-accent font-bold hover:bg-accent hover:text-black transition-all cursor-pointer"
                >
                    CONTACT ME
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
