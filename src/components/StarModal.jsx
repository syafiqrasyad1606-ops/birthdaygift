import { AnimatePresence, motion } from "framer-motion";

function StarModal({
  isOpen,
  message,
  current,
  total,
  onClose,
}) {
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
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-8 text-center shadow-2xl"
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
              y: 40,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            {/* Icon */}
            <motion.div
              animate={{
                rotate: [0, -8, 8, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-6xl"
            >
              🌟
            </motion.div>

            {/* Title */}
            <h2 className="mt-5 text-3xl font-bold text-rose-600">
              Memory Found
            </h2>

            {/* Message */}
            <p className="mt-6 text-lg leading-8 text-gray-700">
              {message}
            </p>

            {/* Progress */}
            <div className="mt-8">
              <div className="mx-auto h-3 w-full overflow-hidden rounded-full bg-gray-200">
                <motion.div
                  className="h-full rounded-full bg-rose-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(current / total) * 100}%`,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />
              </div>

              <p className="mt-3 font-semibold text-rose-500">
                {current} / {total} Memories Found
              </p>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={onClose}
              className="mt-8 rounded-full bg-rose-500 px-8 py-3 text-white shadow-lg transition hover:bg-rose-600"
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