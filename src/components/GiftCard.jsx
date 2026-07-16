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
        rounded-3xl
        border
        border-white/50
        bg-white/70
        p-6
        shadow-xl
        backdrop-blur-xl
        transition
        ${
          isLocked
            ? "cursor-not-allowed opacity-70"
            : "cursor-pointer hover:shadow-2xl"
        }
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-5xl">{icon}</div>

        <div
          className={`rounded-full px-4 py-1 text-sm font-semibold ${statusColor}`}
        >
          {statusText}
        </div>
      </div>

      {/* Title */}
      <h2 className="mt-6 text-2xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 leading-7 text-gray-600">
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
          <button
            onClick={onClick}
            className="flex items-center gap-2 rounded-full bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-600"
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