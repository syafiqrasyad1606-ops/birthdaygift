import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

import musicSticker from "../assets/stickers/music.png";
import cdSticker from "../assets/stickers/cd.png";

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
          particleCount: 120,
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

    <main className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-4 py-8 sm:px-8 sm:py-10 md:px-10">


      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-pink-300 opacity-40 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-300 opacity-40 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-3xl">


        <motion.div
          initial={{
            opacity: 0,
            y: -30,
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
            src={musicSticker}
            alt=""
            aria-hidden="true"
            className="mx-auto w-16 sm:w-20 md:w-24"
            animate={{
              y: [0, -8, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          />

          <h1 className="mt-6 break-words text-3xl font-bold text-rose-600 sm:text-4xl md:text-5xl">
            Our Song
          </h1>

          <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Putar lagu favorit kita melalui music player,
            lalu nikmati setiap pesan kecil yang sudah aku siapkan. ❤️
          </p>

        </motion.div>


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
            delay: 0.2,
          }}
          className="mt-12 rounded-[28px] bg-white/85 p-5 shadow-xl backdrop-blur-xl sm:mt-14 sm:rounded-[32px] sm:p-8 md:p-10"
        >

          <div className="flex flex-col items-center">


            <motion.img
              src={cdSticker}
              alt=""
              aria-hidden="true"
              className="w-40 max-w-[85vw] drop-shadow-2xl sm:w-52 md:w-60"
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
            />

            <h2 className="mt-8 text-2xl font-bold text-gray-800 sm:text-3xl">
              Glue Song
            </h2>

            <p className="mt-2 text-sm text-gray-500 sm:text-base">
              beabadoobee
            </p>

          </div>


          <div className="mt-10 space-y-4 sm:space-y-5">

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
                  delay: 0.4 + index * 0.25,
                }}
                className="break-words text-center text-sm leading-6 text-gray-700 sm:text-lg sm:leading-8"
              >
                {line}
              </motion.p>
            ))}

          </div>

        </motion.section>



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
          className="mt-10 pb-6 text-center sm:mt-12"
        >

          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => navigate("/menu")}
            className="rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:px-8 sm:py-3.5"
          >
            ← Back to Gift Menu
          </motion.button>

        </motion.footer>

      </div>

    </main>
  );
}

export default Music;
