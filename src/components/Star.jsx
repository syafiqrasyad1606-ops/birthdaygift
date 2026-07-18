import { motion } from "framer-motion";

function Star({
  id,
  top,
  left,
  opened,
  onClick,
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(id)}
      style={{
        top,
        left,
      }}
      aria-label={opened ? "Kenangan yang sudah dibuka" : "Buka kenangan"}
      aria-pressed={opened}
      // FIX: added focus-visible ring so the star is visibly focusable
      // when navigated to with a keyboard on laptop/PC (it had
      // outline-none with nothing to replace it).
      className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full outline-none touch-manipulation focus-visible:ring-4 focus-visible:ring-yellow-300/70 sm:h-14 sm:w-14 md:h-16 md:w-16"
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.15,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 14,
      }}
    >
      <motion.span
        animate={{
          scale: opened ? 1 : [1, 1.12, 1],
          opacity: opened ? 1 : [0.75, 1, 0.75],
          rotate: opened ? 0 : [-4, 4, -4],
        }}
        transition={{
          repeat: opened ? 0 : Infinity,
          duration: 2.5,
        }}
        className="select-none text-2xl sm:text-3xl md:text-4xl"
      >
        {opened ? "🌟" : "⭐"}
      </motion.span>
    </motion.button>
  );
}

export default Star;