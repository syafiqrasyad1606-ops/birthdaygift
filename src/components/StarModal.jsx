import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function StarModal({
  isOpen,
  message,
  current,
  total,
  onClose,
}) {
  // FIX: lock background scroll while the modal is open, and let Esc
  // close it. Without this, on a phone you could scroll the star field
  // underneath the modal at the same time as scrolling the modal itself,
  // which feels broken.
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
          {/* Background */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          {/* FIX: added max-h-[85dvh] + overflow-y-auto so a long message
              (or a short/landscape phone screen) can never push the modal
              taller than the viewport — it now scrolls internally instead
              of getting clipped top/bottom. Added role="dialog" so screen
              readers announce it properly. */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Kenangan"
            className="fixed left-1/2 top-1/2 z-50 flex max-h-[85dvh] w-[92%] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-[28px] bg-white p-5 text-center shadow-2xl sm:w-[88%] sm:p-8"
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
          >
            {/* Icon */}
            <motion.div
              aria-hidden="true"
              animate={{
                rotate: [0, -8, 8, -8, 0],
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
              }}
              className="text-5xl sm:text-6xl"
            >
              🌟
            </motion.div>

            {/* Title */}
            <h2 className="mt-5 text-2xl font-bold text-rose-600 sm:text-3xl">
              Memory Found
            </h2>

            {/* Message */}
            <p className="mt-5 break-words text-base leading-7 text-gray-700 sm:mt-6 sm:text-lg sm:leading-8">
              {message}
            </p>

            {/* Progress */}
            <div className="mt-8">
              <div
                className="mx-auto h-3 w-full overflow-hidden rounded-full bg-gray-200"
                role="progressbar"
                aria-valuenow={current}
                aria-valuemin={0}
                aria-valuemax={total}
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(current / total) * 100}%`,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              </div>

              <p className="mt-3 text-sm font-semibold text-rose-500 sm:text-base">
                {current} / {total} Memories Found
              </p>
            </div>

            {/* Button */}
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={onClose}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-rose-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 sm:px-8 sm:text-base"
            >
              Continue ✨
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default StarModal;