import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import cakeSticker from "../assets/stickers/cake.png";

function BirthdayCake({ onFinished }) {
  const [blown, setBlown] = useState(false);

  const handleBlow = () => {
    if (blown) return;

    setBlown(true);

    // Getaran kecil (jika browser mendukung)
    navigator.vibrate?.(80);

    confetti({
      particleCount: 180,
      spread: 100,
      origin: {
        y: 0.65,
      },
    });

    setTimeout(() => {
      onFinished?.();
    }, 1200);
  };

  return (
    <section className="mt-12 flex justify-center px-4 sm:mt-16">

      {/* FIX: this element had TWO className props (className="mt-10" then
          a second className overriding it) — the first "mt-10" was dead
          code that never applied. Merged into a single className below. */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          mt-10
          w-full
          max-w-2xl
          rounded-[32px]
          border
          border-white/30
          bg-white/85
          p-6
          text-center
          shadow-xl
          backdrop-blur-xl
          sm:p-8
          md:p-10
        "
      >

        <h2 className="break-words text-2xl font-bold text-rose-600 sm:text-3xl md:text-4xl">
          🎂 Birthday Cake
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base sm:leading-8">
          Sebelum perjalanan ini benar-benar selesai...
          <br />
          Tiup lilinnya dulu yaa ❤️
        </p>

        {!blown && (
          <motion.p
            animate={{
              opacity: [1, 0.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-5 text-sm font-medium text-rose-500"
          >
            👇 Tap api lilinnya
          </motion.p>
        )}

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="relative mx-auto mt-8 w-fit"
        >

          {/* Flame */}
          {/* FIX: was a plain motion.div with onClick — a single emoji
              character is a tiny (~30px) touch target and wasn't reachable
              by keyboard at all. Changed to a real <button> with padding
              plus a matching negative margin, which enlarges the tappable
              area to a comfortable size without moving the emoji's visual
              position, and made it focusable/labelled. */}

                    <AnimatePresence mode="wait">
            {!blown ? (
              <motion.button
                type="button"
                key="flame"
                initial={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.2,
                  y: -20,
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.6,
                }}
                onClick={handleBlow}
                aria-label="Tiup lilin"
                className="absolute -top-8 left-1/2 -m-3 -translate-x-1/2 cursor-pointer rounded-full p-3 text-3xl outline-none focus-visible:ring-4 focus-visible:ring-rose-300 sm:-top-9 sm:text-4xl md:-top-10 md:text-5xl"
              >
                🔥
              </motion.button>
            ) : (
              <motion.div
                key="smoke"
                aria-hidden="true"
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 text-3xl sm:-top-9 sm:text-4xl md:-top-10 md:text-5xl"
              >
                💨
              </motion.div>
            )}
          </AnimatePresence>

          {/* Cake */}

          <motion.img
            src={cakeSticker}
            alt="Birthday Cake"
            className="w-36 select-none sm:w-44 md:w-52"
            animate={{
              scale: blown ? [1, 1.03, 1] : 1,
            }}
            transition={{
              duration: 0.8,
            }}
            draggable={false}
          />

        </motion.div>

        <AnimatePresence>
          {blown && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-rose-600 sm:text-2xl">
                🎉 Make a Wish ✨
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600 sm:text-base sm:leading-8">
                Semoga semua doa, impian,
                dan kebahagiaan selalu menyertaimu.
                ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </section>
  );
}

export default BirthdayCake;