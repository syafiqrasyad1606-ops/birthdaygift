import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

import { useProgress } from "../context/ProgressContext";

function Music() {
  const navigate = useNavigate();

  const {
    completed,
    completeGift,
  } = useProgress();

  useEffect(() => {
    if (!completed.music) {
      completeGift("music");

      setTimeout(() => {
        confetti({
          particleCount: 180,
          spread: 90,
          origin: {
            y: 0.6,
          },
        });
      }, 500);
    }
  }, [completed.music, completeGift]);

  const lyrics = [
    "I've never known someone like you.",
    "Every little moment becomes special.",
    "Thank you for every smile.",
    "Thank you for every laugh.",
    "Thank you for being part of my life.",
    "Happy Birthday ❤️",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-6 py-16">

      <div className="mx-auto max-w-3xl">

        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="text-center"
        >
          <div className="text-7xl">
            🎵
          </div>

          <h1 className="mt-6 text-5xl font-bold text-rose-600">
            Our Song
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Turn on the music using the player in the bottom-right corner,
            then enjoy this little message.
          </p>
        </motion.div>

        {/* Music Card */}

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
            delay: 0.2,
          }}
          className="mt-14 rounded-3xl bg-white p-10 shadow-2xl"
        >
          <div className="flex flex-col items-center">

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              className="flex h-52 w-52 items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-8xl text-white shadow-xl"
            >
              💿
            </motion.div>

            <h2 className="mt-8 text-3xl font-bold text-gray-800">
              Glue Song
            </h2>

            <p className="mt-2 text-gray-500">
              beabadoobee
            </p>

          </div>

          {/* Lyrics */}

          <div className="mt-12 space-y-5">

            {lyrics.map((line, index) => (

              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4 + index * 0.3,
                }}
                className="text-center text-lg leading-8 text-gray-700"
              >
                {line}
              </motion.p>

            ))}

          </div>

        </motion.div>

        {/* Footer */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => navigate("/menu")}
            className="rounded-full bg-rose-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-rose-600"
          >
            ← Back to Gift Menu
          </button>
        </motion.div>

      </div>

    </main>
  );
}

export default Music;