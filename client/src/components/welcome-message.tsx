import { motion } from "framer-motion";

export default function WelcomeMessage() {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
        Welcome!
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
        Thank you for visiting our landing page.
      </p>
    </motion.div>
  );
}
