import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export default function LandingWrapper({ show, children }:{ show: boolean, children: ReactNode }) {
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
        staggerDirection: 1,
      }
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-screen w-screen sm:w-[80vw] md:w-[65vw] lg:w-[60vw] h-screen flex justify-center items-center relative overflow-visible"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}