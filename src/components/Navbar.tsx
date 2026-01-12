import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
    const links = ["About", "Skills", "Work", "Contact"];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-background/80 backdrop-blur-md border-b border-white/5"
        >
            <div className="text-2xl font-bold tracking-tighter">
                DVLPR<span className="text-accent">.</span>
            </div>
            <div className="hidden md:flex gap-8">
                {links.map((link) => (
                    <Link
                        key={link}
                        to={link.toLowerCase()}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-sm uppercase tracking-widest hover:text-accent transition-colors"
                    >
                        {link}
                    </Link>
                ))}
            </div>
            <button className="md:hidden text-white">
                Menu
            </button>
        </motion.nav>
    );
};

export default Navbar;
