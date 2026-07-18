import { motion } from "framer-motion";
import { FaLock, FaCheckCircle, FaArrowRight } from "react-icons/fa";

function GiftCard({
  icon,
  title,
  description,
  status = "ready", // ready | completed | locked
  onClick,
}) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  const statusColor = isCompleted
    ? "bg-emerald-100 text-emerald-700"
    : isLocked
    ? "bg-gray-100 text-gray-500"
    : "bg-rose-100 text-rose-600";

  const statusText = isCompleted
    ? "Completed"
    : isLocked
    ? "Locked"
    : "Ready";

  return (
    <motion.div
      whileHover={!isLocked ? { y: -8, scale: 1.02 } : {}}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
      className={`
        w-full
        min-w-0
        rounded-3xl
        border
        border-white/50
        bg-white/70
        p-5
        shadow-xl
        backdrop-blur-xl
        transition
        sm:p-6
        ${
          isLocked
            ? "cursor-not-allowed opacity-70"
            : "cursor-pointer hover:shadow-2xl"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="text-4xl sm:text-5xl" aria-hidden="true">{icon}</div>

        <div
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold sm:px-4 sm:text-sm ${statusColor}`}
        >
          {statusText}
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-6 break-words text-xl font-bold text-gray-800 sm:text-2xl">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
        {description}
      </p>

      {/* Bottom */}
      <div className="mt-8 flex items-center justify-between">

        {isCompleted ? (
          <div className="flex items-center gap-2 font-semibold text-emerald-600">
            <FaCheckCircle />
            Finished
          </div>
        ) : isLocked ? (
          <div className="flex items-center gap-2 font-semibold text-gray-500">
            <FaLock />
            Locked
          </div>
        ) : (
          // FIX: added type="button" and a focus-visible ring — this was
          // the only actually-interactive element in the card, but had no
          // visible focus state for keyboard/laptop users.
          <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-2 rounded-full bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95"
          >
            Open
            <FaArrowRight />
          </button>
        )}

      </div>
    </motion.div>
  );
}

export default GiftCard;