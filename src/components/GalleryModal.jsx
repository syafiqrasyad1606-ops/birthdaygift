import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function GalleryModal({
  isOpen,
  photo,
  title,
  description,
  onClose,
}) {

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>

          <motion.div
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 30,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
            }}
            role="dialog"
            aria-modal="true"
            aria-label={title || "Foto"}
            className="fixed left-1/2 top-1/2 z-50 flex max-h-[90dvh] w-[94%] max-w-3xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-[28px] bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 sm:right-5 sm:top-5"
              aria-label="Tutup"
            >
              <FaTimes />
            </button>

            <div className="shrink-0 overflow-hidden bg-gray-100">
              <img
                src={photo}
                alt={title}
                loading="lazy"
                className="max-h-[40vh] w-full object-cover sm:max-h-[55vh] lg:max-h-[60vh]"
              />
            </div>

            <div className="p-5 sm:p-7 md:p-8">
              <h2 className="break-words text-2xl font-bold text-rose-600 sm:text-3xl">
                {title}
              </h2>

              <p className="mt-4 break-words text-sm leading-6 text-gray-600 sm:mt-5 sm:text-lg sm:leading-8">
                {description}
              </p>

              <div className="mt-6 flex justify-end">
                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={onClose}
                  className="rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 sm:px-8 sm:text-base"
                >
                  Tutup ❤️
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default GalleryModal;
