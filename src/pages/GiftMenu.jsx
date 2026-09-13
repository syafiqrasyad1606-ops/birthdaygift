```jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useProgress } from "../context/ProgressContext";

import starSticker from "../assets/stickers/star.png";
import cameraSticker from "../assets/stickers/camera.png";
import musicSticker from "../assets/stickers/music.png";
import giftSticker from "../assets/stickers/gift.png";
import letterSticker from "../assets/stickers/letter.png";
import heartSticker from "../assets/stickers/heart.png";
import roseSticker from "../assets/stickers/rose.png";
import teddySticker from "../assets/stickers/teddy-bear.png";

function GiftMenu() {
  const navigate = useNavigate();

  const { completed, isEverythingCompleted } = useProgress();

  const progress =
    Number(completed.memory) +
    Number(completed.gallery) +
    Number(completed.music);

  const cards = [
    {
      title: "Memory Sky",
      description:
        "Discover little messages hidden among the stars. Every star keeps a beautiful memory waiting for you.",
      icon: starSticker,
      color: "from-yellow-400 to-orange-400",
      route: "/memory",
      completed: completed.memory,
    },
    {
      title: "Gallery",
      description:
        "A collection of our favorite moments together. Every photo tells a small story.",
      icon: cameraSticker,
      color: "from-sky-400 to-indigo-500",
      route: "/gallery",
      completed: completed.gallery,
    },
    {
      title: "Our Song",
      description:
        "Play our special song while exploring this little journey made just for you.",
      icon: musicSticker,
      color: "from-pink-500 to-rose-500",
      route: "/music",
      completed: completed.music,
    },
  ];

  return (
    <main className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-4 py-8 sm:px-8 sm:py-10 md:px-10">
      {/* Background decorations */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-pink-300 opacity-40 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-300 opacity-40 blur-3xl sm:h-[420px] sm:w-[420px]" />

      {/* Heart sticker */}

      <motion.img
        src={heartSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-6 w-7 opacity-70 sm:left-8 sm:top-20 sm:w-12"
        animate={{
          y: [0, -18, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      {/* Rose sticker */}

      <motion.img
        src={roseSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-10 w-8 opacity-70 sm:right-10 sm:top-24 sm:w-14"
        animate={{
          y: [0, -15, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      {/* Star sticker */}

      <motion.img
        src={starSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-4 w-7 -translate-x-1/2 opacity-80 sm:top-10 sm:w-12"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      {/* Teddy sticker */}

      <motion.img
        src={teddySticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-10 hidden w-16 opacity-60 lg:block"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          <motion.img
            src={giftSticker}
            alt=""
            aria-hidden="true"
            className="mx-auto w-16 sm:w-20 md:w-24"
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          />

          <h1 className="mt-6 break-words text-3xl font-bold text-rose-600 sm:text-4xl md:text-5xl">
            Pilih Hadiahmu ❤️
          </h1>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Aku sudah menyiapkan beberapa kejutan kecil.
            <br />
            Buka satu per satu yaa...
            <br className="sm:hidden" />
            karena semuanya dibuat khusus untuk kamu. 🌸
          </p>

          {/* Progress */}

          <div className="mx-auto mt-10 w-full max-w-xl px-2">
            <div className="mb-3 flex items-center justify-between gap-2 text-sm font-semibold text-gray-600">
              <span>Progress Journey</span>

              <span>{progress}/3 Completed</span>
            </div>

            <div
              className="h-4 overflow-hidden rounded-full bg-white shadow-inner"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={3}
              aria-label="Journey progress"
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${(progress / 3) * 100}%`,
                }}
                transition={{
                  duration: 1,
                }}
                className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-400"
              />
            </div>
          </div>
        </motion.div>

        {/* Gift Cards */}

        <div className="mt-14 grid min-w-0 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 60,
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
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="flex min-w-0 flex-col rounded-[28px] bg-white/85 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl sm:rounded-[32px] sm:p-7"
            >
              {/* Card Icon */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className={`inline-flex w-fit rounded-3xl bg-gradient-to-r ${card.color} p-4 shadow-lg`}
              >
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-12 sm:w-14 md:w-16"
                />
              </motion.div>

              {/* Card Title */}

              <h2 className="mt-5 break-words text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
                {card.title}
              </h2>

              {/* Card Description */}

              <p className="mt-4 flex-1 text-sm leading-6 text-gray-600 sm:text-base sm:leading-8">
                {card.description}
              </p>

              {/* Card Footer */}

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span
                  className={`inline-flex w-fit items-center rounded-full px-4 py-2 text-sm font-semibold ${
                    card.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {card.completed ? "Completed ✅" : "Ready ⭐"}
                </span>

                <button
                  type="button"
                  onClick={() => navigate(card.route)}
                  className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-rose-600 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95"
                >
                  Open →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Gift */}

        <motion.section
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          className="mt-16 rounded-[28px] bg-white/85 p-5 shadow-xl backdrop-blur-xl sm:mt-20 sm:rounded-[32px] sm:p-8 md:p-10"
        >
          <motion.img
            src={isEverythingCompleted ? giftSticker : letterSticker}
            alt=""
            aria-hidden="true"
            className="mx-auto w-20 sm:w-24 md:w-28"
            animate={{
              y: [0, -10, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          />

          <h2 className="mt-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Final Gift
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-gray-600 sm:text-base sm:leading-8 md:text-lg">
            {isEverythingCompleted
              ? "Semua perjalanan sudah selesai. Hadiah terakhir sudah menunggumu. ❤️"
              : "Selesaikan semua hadiah di atas dulu yaa supaya hadiah terakhir bisa terbuka."}
          </p>

          <div className="mt-8 flex justify-center">
            <motion.button
              type="button"
              whileHover={
                isEverythingCompleted
                  ? {
                      scale: 1.05,
                    }
                  : {}
              }
              whileTap={
                isEverythingCompleted
                  ? {
                      scale: 0.96,
                    }
                  : {}
              }
              disabled={!isEverythingCompleted}
              aria-disabled={!isEverythingCompleted}
              onClick={() => navigate("/final")}
              className={`inline-flex items-center gap-3 rounded-full px-6 py-3 text-center font-semibold text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 sm:px-10 sm:py-4 ${
                isEverythingCompleted
                  ? "bg-rose-500 hover:bg-rose-600 hover:shadow-xl active:scale-95"
                  : "cursor-not-allowed bg-gray-400"
              }`}
            >
              <img
                src={giftSticker}
                alt=""
                aria-hidden="true"
                className={`w-5 sm:w-6 ${
                  !isEverythingCompleted ? "opacity-50" : ""
                }`}
              />

              {isEverythingCompleted ? "Open Final Gift" : "Locked"}
            </motion.button>
          </div>
        </motion.section>

        {/* Footer */}

        <motion.footer
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 pb-6 text-center"
        >
          <img
            src={heartSticker}
            alt=""
            aria-hidden="true"
            className="mx-auto w-8 sm:w-10 md:w-12"
          />

          <p className="mt-4 text-sm text-gray-500 sm:text-base">
            Made with lots of love ❤️
          </p>
        </motion.footer>
      </div>
    </main>
  );
}

export default GiftMenu;
```
