import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaCamera,
  FaMusic,
  FaGift,
  FaLock,
} from "react-icons/fa";

import { useProgress } from "../context/ProgressContext";

function GiftMenu() {
  const navigate = useNavigate();

  const {
    completed,
    isEverythingCompleted,
  } = useProgress();

  const progress =
    Number(completed.memory) +
    Number(completed.gallery) +
    Number(completed.music);

  const cards = [
    {
      title: "Memory Sky",
      description:
        "Discover little messages hidden among the stars. Every star keeps a beautiful memory waiting for you.",
      icon: <FaStar />,
      color: "from-yellow-400 to-orange-400",
      route: "/memory",
      completed: completed.memory,
    },
    {
      title: "Gallery",
      description:
        "A collection of our favorite moments together. Every photo tells a small story.",
      icon: <FaCamera />,
      color: "from-sky-400 to-indigo-500",
      route: "/gallery",
      completed: completed.gallery,
    },
    {
      title: "Our Song",
      description:
        "Play our special song while exploring this little journey made just for you.",
      icon: <FaMusic />,
      color: "from-pink-500 to-rose-500",
      route: "/music",
      completed: completed.music,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-6 py-16">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-rose-600">
            Pilih Hadiahmu ❤️
          </h1>

          <p className="mt-5 text-lg text-gray-600">
           Aku udah nyiapin beberapa kejutan kecil.
           Satu per satu yaa 😊
          </p>

          {/* Progress */}

          <div className="mx-auto mt-10 max-w-xl">

            <div className="mb-3 flex justify-between text-sm font-semibold text-gray-600">
              <span>Perjalanan</span>

              <span>{progress}/3 Completed</span>
            </div>

            <div className="h-5 overflow-hidden rounded-full bg-white shadow-inner">

              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${(progress / 3) * 100}%`,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
              />

            </div>

          </div>

        </motion.div>

        {/* CARDS */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {cards.map((card, index) => (

            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white p-8 shadow-xl"
            >

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${card.color} p-5 text-4xl text-white shadow-lg`}
              >
                {card.icon}
              </div>

              <h2 className="mt-6 text-3xl font-bold text-gray-800">
                {card.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                {card.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    card.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {card.completed ? "Completed ✅" : "Ready ⭐"}
                </span>

                <button
                  onClick={() => navigate(card.route)}
                  className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-rose-600"
                >
                  Open →
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* FINAL GIFT */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-16 rounded-3xl bg-white p-10 shadow-2xl"
        >

          <div className="flex flex-col items-center text-center">

            <div className="rounded-full bg-rose-500 p-6 text-5xl text-white">

              {isEverythingCompleted ? (
                <FaGift />
              ) : (
                <FaLock />
              )}

            </div>

            <h2 className="mt-6 text-4xl font-bold text-gray-800">
              Final Gift
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">

              {isEverythingCompleted
                ? "Everything is complete. Your final surprise is waiting."
                : "Complete every journey above to unlock the final surprise."}

            </p>

            <button
              disabled={!isEverythingCompleted}
              onClick={() => navigate("/final")}
              className={`mt-10 rounded-full px-10 py-4 font-semibold text-white transition ${
                isEverythingCompleted
                  ? "bg-rose-500 hover:scale-105 hover:bg-rose-600"
                  : "cursor-not-allowed bg-gray-400"
              }`}
            >
              {isEverythingCompleted
                ? "Open Final Gift 🎁"
                : "Locked 🔒"}
            </button>

          </div>

        </motion.div>

      </div>

    </main>
  );
}

export default GiftMenu;