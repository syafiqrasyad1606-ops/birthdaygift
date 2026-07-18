import { motion } from "framer-motion";

function GalleryCard({
  photo,
  title,
  index,
  onClick,
}) {
  // FIX: this card was a plain div with onClick — unreachable and
  // unactivatable by keyboard. Same fix pattern as TimelineCard.jsx.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

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
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Lihat foto: ${title}`}
      className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl outline-none transition focus-visible:ring-4 focus-visible:ring-rose-300"
    >
      {/* FIX: fixed h-72 (288px) on every screen size replaced with a
          scale that's shorter on phones so the card doesn't eat most of
          a small screen before the title/caption are even visible. */}
      <div className="overflow-hidden">

        <img
          src={photo}
          alt={title}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-64 md:h-72"
        />

      </div>

      <div className="p-4 sm:p-5">

        <h2 className="break-words text-lg font-bold text-gray-800 sm:text-xl">
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