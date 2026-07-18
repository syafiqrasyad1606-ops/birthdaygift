import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import giftSticker from "../assets/stickers/gift.png";
import heartSticker from "../assets/stickers/heart.png";
import starSticker from "../assets/stickers/star.png";
import cameraSticker from "../assets/stickers/camera.png";
import letterSticker from "../assets/stickers/letter.png";
import roseSticker from "../assets/stickers/rose.png";
import teddySticker from "../assets/stickers/teddy-bear.png";
import musicSticker from "../assets/stickers/music.png";

function IntroScreen() {
  const navigate = useNavigate();

  const fullTitle = "A Journey For You ❤️";

  const [title, setTitle] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      index++;

      setTitle(fullTitle.slice(0, index));

      if (index >= fullTitle.length) {
        clearInterval(typing);

        setTimeout(() => {
          setShowContent(true);
        }, 500);
      }
    }, 60);

    return () => clearInterval(typing);
  }, []);

  return (
    // FIX: min-h-[100dvh] (dynamic viewport height) instead of min-h-screen
    // so the page doesn't jump/clip when a mobile browser's address bar
    // shows or hides. overflow-x-hidden on the root stops the decorative
    // blobs/stickers (which intentionally sit outside the card) from ever
    // creating a horizontal scrollbar on narrow phones.
    <div className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-x-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 px-4 py-8 sm:px-5 sm:py-10">

      {/* Background Blur */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-pink-300 opacity-40 blur-3xl sm:-left-40 sm:-top-40 sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-rose-300 opacity-40 blur-3xl sm:-bottom-32 sm:-right-32 sm:h-[420px] sm:w-[420px]" />

      {/* Floating Stickers */}
      {/* FIX: pulled slightly inward on mobile (e.g. left-2 instead of left-4,
          smaller w-*) so they can't get clipped by the viewport edge or
          overlap the card on very small (≤360px) phones. */}

      <motion.img
        src={starSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-2 top-3 w-7 select-none opacity-80 sm:left-10 sm:top-8 sm:w-12"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      <motion.img
        src={letterSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-5 w-8 select-none opacity-80 sm:right-12 sm:top-14 sm:w-14"
        animate={{
          y: [0, -18, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      <motion.img
        src={heartSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-2 bottom-6 w-8 select-none opacity-80 sm:left-12 sm:bottom-24 sm:w-14"
        animate={{
          y: [0, -18, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      <motion.img
        src={roseSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-3 bottom-5 w-8 select-none opacity-80 sm:right-12 sm:bottom-20 sm:w-14"
        animate={{
          rotate: [-10, 10, -10],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      />

      {/* FIX: these three were already hidden below md, which is correct —
          they only ever render on tablet/laptop/desktop where there's
          room, so no change needed besides the aria/alt cleanup. */}

      <motion.img
        src={cameraSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 hidden w-10 -translate-y-1/2 select-none opacity-80 md:block"
        animate={{
          y: [0, -20, 0],
          rotate: [-6, 6, -6],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
      />

      <motion.img
        src={musicSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-[45%] hidden w-10 select-none opacity-80 md:block"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
      />

      <motion.img
        src={teddySticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-8 bottom-32 hidden w-12 select-none opacity-80 md:block"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
      />

      {/* Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        // FIX: mx-2 -> w-full + max-w-xl with explicit side margins removed;
        // relying on the flex-centered parent's px-4 padding instead, so the
        // card never touches the screen edge on any device and never
        // overflows it on small phones (320–375px wide).
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[28px] bg-white/75 p-6 pb-8 text-center shadow-2xl backdrop-blur-xl sm:rounded-[35px] sm:p-8 md:p-12"
      >

        <motion.img
          src={giftSticker}
          alt=""
          aria-hidden="true"
          // FIX: was -right-2 -top-4 (could poke past the card / viewport
          // edge on tiny screens). Now sits just inside the corner on
          // mobile and only pops outside the card from sm+ where there's
          // margin to spare.
          className="pointer-events-none absolute right-2 top-2 w-12 sm:-right-2 sm:-top-4 sm:right-auto sm:top-auto sm:w-14 md:right-4 md:top-4 md:w-16"
          animate={{
            y: [0, -10, 0],
            rotate: [-8, 8, -8],
            scale: [1, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        />

        {/* Title */}
        {/* FIX: min-h scales per breakpoint instead of one fixed 90px, so
            there's no oversized empty gap on phones (3xl text) and no
            cramped clipping risk on desktop (5xl text). break-words stops
            a long word/emoji combo from forcing horizontal overflow. */}

        <h1 className="mt-4 min-h-[64px] break-words text-3xl font-bold leading-tight text-rose-600 sm:mt-6 sm:min-h-[80px] sm:text-4xl md:min-h-[110px] md:text-5xl">
          {title}
          <span className="animate-pulse">|</span>
        </h1>
                {showContent && (
          <>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-700 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8"
            >
              Happy Birthday. 🎉
              <br />
              Hari ini bukan sekadar hari biasa.
              <br />
              Aku sudah menyiapkan perjalanan kecil yang berisi kenangan,
              cerita, dan beberapa kejutan spesial hanya untukmu.
              <br />
              <span className="font-medium text-rose-500">
                Semoga kamu menikmati setiap langkahnya. ❤️
              </span>
            </motion.p>

            <motion.button
              type="button"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.4,
              }}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => navigate("/gift")}
              // FIX: added focus-visible ring so keyboard/desktop users
              // can see where focus is (accessibility + "aman" against
              // losing your place when tabbing on a laptop/PC).
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-rose-600 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:mt-10 sm:px-10 sm:py-4 sm:text-lg"
            >
              <img
                src={giftSticker}
                alt=""
                aria-hidden="true"
                className="w-5 sm:w-6"
              />

              Begin Journey
            </motion.button>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default IntroScreen;