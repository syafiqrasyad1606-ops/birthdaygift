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
      onClick={() => onClick(id)}
      className="absolute text-4xl outline-none"
      style={{
        top,
        left,
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      whileHover={{
        scale: 1.3,
      }}
      whileTap={{
        scale: 0.9,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <motion.span
        animate={{
          scale: opened ? 1 : [1, 1.15, 1],
          opacity: opened ? 1 : [0.7, 1, 0.7],
        }}
        transition={{
          repeat: opened ? 0 : Infinity,
          duration: 2,
        }}
        className="select-none"
      >
        {opened ? "🌟" : "⭐"}
      </motion.span>
    </motion.button>
  );
}

export default Star;