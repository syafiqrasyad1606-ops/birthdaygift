import { motion } from "framer-motion";

function GalleryCard({
  photo,
  title,
  index,
  onClick,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: index * 0.15,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl transition"
    >
      <div className="overflow-hidden">

        <img
          src={photo}
          alt={title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800">
          {title}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Click to view memory ❤️
        </p>

      </div>

    </motion.div>
  );
}

export default GalleryCard;