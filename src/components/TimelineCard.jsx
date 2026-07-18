import { motion } from "framer-motion";

function TimelineCard({
  title,
  image,
  description,
  index,
  onClick,
}) {
  // FIX: this card was a div-like element with onClick but no keyboard
  // support — a mouse/touch user could open it, but someone tabbing
  // through on a laptop/PC couldn't reach or activate it at all. Adding
  // role="button" + tabIndex + onKeyDown makes it fully keyboard operable,
  // and focus-visible:ring gives it a visible focus state.
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -60 : 60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Lihat foto: ${title}`}
      className="mx-auto mb-10 w-full max-w-4xl cursor-pointer rounded-[28px] outline-none focus-visible:ring-4 focus-visible:ring-rose-300 sm:mb-14 md:mb-20"
    >
      <div className="overflow-hidden rounded-[28px] bg-white/90 shadow-xl backdrop-blur transition-all duration-300 hover:shadow-rose-200">

        {/* Image */}

        <div className="overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-80 md:h-[400px]"
          />
        </div>

        {/* Content */}

        <div className="p-5 sm:p-7 md:p-8">

          <h2 className="break-words text-2xl font-bold text-rose-600 sm:text-3xl">
            {title}
          </h2>

          <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-6 inline-flex items-center rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-600">
            📷 Klik foto untuk melihat lebih besar
          </div>

        </div>

      </div>
    </motion.article>
  );
}

export default TimelineCard;