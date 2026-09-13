import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import BirthdayCake from "../components/BirthdayCake";

import finalPhoto from "../assets/gallery/photo3.jpg";

import cameraSticker from "../assets/stickers/camera.png";
import starSticker from "../assets/stickers/star.png";
import giftSticker from "../assets/stickers/gift.png";
import letterSticker from "../assets/stickers/letter.png";
import roseSticker from "../assets/stickers/rose.png";
import teddySticker from "../assets/stickers/teddy-bear.png";
import heartSticker from "../assets/stickers/heart.png";

import { useProgress } from "../context/ProgressContext";

const letter = [
  "Selamat ulang tahun yaa. ❤️",
  "Terima kasih udah meluangkan waktu buat menyelesaikan perjalanan kecil ini.",
  "Aku tahu, ini mungkin bukan hadiah yang paling besar. Bukan juga hadiah yang paling mahal.",
  "Tapi aku bikin semuanya dengan sepenuh hati, dan semoga setiap halaman yang kamu buka tadi bisa bikin kamu tersenyum walaupun cuma sebentar.",
  "Di umur yang baru ini, aku cuma pengen berharap semoga kamu selalu sehat, selalu bahagia, dipertemukan dengan banyak hal baik, dan semua impian yang lagi kamu perjuangkan bisa terwujud satu per satu.",
  "Jangan terlalu keras sama diri sendiri ya. Istirahat kalau capek. Tetap jadi diri kamu yang sekarang, karena itu salah satu alasan kenapa kamu begitu spesial.",
  "Semoga hari ini penuh tawa, penuh kebahagiaan, dan semoga masih ada banyak cerita indah yang bisa kita lewati nanti.",
  "Sekali lagi... Selamat Ulang Tahun. 🎂❤️",
];

function FinalGift() {
  const navigate = useNavigate();

  const { isEverythingCompleted, resetProgress } = useProgress();

  const [visibleParagraphs, setVisibleParagraphs] = useState(0);
  const [cakeFinished, setCakeFinished] = useState(false);

  useEffect(() => {
    if (!isEverythingCompleted) return;

    let current = 0;

    const interval = setInterval(() => {
      current++;

      setVisibleParagraphs(current);

      if (current >= letter.length) {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, [isEverythingCompleted]);

  const handleRestart = () => {
    resetProgress();
    navigate("/");
  };

  if (!isEverythingCompleted) {
  return (
    <main className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-4 py-8">

      <motion.img
        src={heartSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-16 w-7 opacity-50 sm:left-10 sm:top-24 sm:w-10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
      />

      <motion.img
        src={heartSticker}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-28 w-6 opacity-60 sm:right-12 sm:top-40 sm:w-8"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="relative z-10 w-full max-w-xl rounded-3xl bg-white p-6 text-center shadow-2xl sm:p-10"
      >

        <img
          src={giftSticker}
          alt=""
          aria-hidden="true"
          className="mx-auto w-20 sm:w-28"
        />

        <h1 className="mt-6 break-words text-3xl font-bold text-rose-600 sm:text-4xl">
          Hadiah Terakhir Masih Terkunci
        </h1>

        <p className="mt-6 text-base leading-7 text-gray-700 sm:text-lg sm:leading-8">
          Sebelum membuka hadiah terakhir,
          selesaikan dulu semua perjalanan
          yang sudah aku siapkan yaa. ❤️
        </p>

        <button
          type="button"
          onClick={() => navigate("/menu")}
          className="mt-8 rounded-full bg-rose-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:px-8 sm:text-lg"
        >
          ← Kembali ke Menu
        </button>

      </motion.div>

    </main>
  );
}

  return (

 <main className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-4 pt-10 pb-24 sm:px-6 sm:pt-14 sm:pb-24 md:pt-16">

<motion.img
  src={heartSticker}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute left-2 top-8 w-7 opacity-50 sm:left-8 sm:top-24 sm:w-10"
  animate={{
    y: [0, -20, 0],
    rotate: [-8, 8, -8],
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
  }}
/>

<motion.img
  src={roseSticker}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute right-10 top-40 hidden w-12 opacity-50 sm:block"
  animate={{
    y: [0, -18, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
  }}
/>

<motion.img
  src={cameraSticker}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute right-12 bottom-24 hidden w-14 opacity-50 sm:block"
  animate={{
    y: [0, -15, 0],
    rotate: [-6, 6, -6],
  }}
  transition={{
    repeat: Infinity,
    duration: 4,
  }}
/>

<motion.img
  src={giftSticker}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute left-12 bottom-20 hidden w-14 opacity-60 sm:block"
  animate={{
    rotate: [-10, 10, -10],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
  }}
/>

<motion.img
  src={starSticker}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute left-1/2 top-4 w-7 -translate-x-1/2 opacity-80 sm:top-12 sm:w-10"
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 10, -10, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
/>

<motion.img
  src={teddySticker}
  alt=""
  aria-hidden="true"
  className="pointer-events-none absolute right-24 top-[68%] hidden w-16 opacity-60 md:block"
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    repeat: Infinity,
    duration: 3,
  }}
/>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-4xl rounded-[28px] bg-white/95 backdrop-blur-xl shadow-2xl p-5 sm:rounded-[32px] sm:p-8 md:p-10"
      >
        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="text-center"
        >
          <motion.img
          src={giftSticker}
          alt=""
          aria-hidden="true"
          className="mx-auto w-16 drop-shadow-xl sm:w-24 lg:w-28"
          animate={{
            y: [0, -10, 0],
            rotate: [-4, 4, -4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />
        </motion.div>

        <h1 className="mt-6 break-words text-center text-2xl font-bold text-rose-600 sm:text-3xl lg:text-5xl">
          Hadiah Terakhir
        </h1>

        <p className="mt-3 text-center text-sm text-gray-500 sm:text-base">
          Terima kasih yaa, udah menyelesaikan semua perjalanan ini. 🤍
        </p>

        <div className="mt-8 rounded-3xl bg-rose-50 p-4 sm:mt-10 sm:p-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

  <img
    src={letterSticker}
    className="w-8 sm:w-10"
    alt=""
    aria-hidden="true"
  />

  <h2 className="break-words text-center text-2xl font-bold text-rose-600 sm:text-3xl">
    Untuk Kamu
  </h2>

  <img
    src={roseSticker}
    className="w-7 sm:w-9"
    alt=""
    aria-hidden="true"
  />

</div>

          <div className="mt-6 space-y-6 break-words text-[15px] leading-7 text-gray-700 sm:text-lg sm:leading-9">
            {letter.slice(0, visibleParagraphs).map((text, index) => (
              <motion.p
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
                className={
                  index === letter.length - 1
                    ? "font-semibold text-rose-600"
                    : ""
                }
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-600 sm:text-lg">
            with great affection,
          </p>

          <p className="mt-2 text-xl font-bold text-rose-600 sm:text-2xl">
            — Odoi ❤️
          </p>
        </div>

        {visibleParagraphs >= letter.length && (
          <>
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
              className="mt-10 text-center"
            >
              <img
                src={finalPhoto}
                alt="Our Memory"
                className="mx-auto w-full max-w-[260px] rounded-3xl shadow-2xl sm:max-w-sm md:max-w-md"
              />

              <motion.img
              src={teddySticker}
              alt=""
              aria-hidden="true"
              className="mx-auto mt-6 w-20 sm:mt-8 sm:w-28"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            />

              <p className="mt-5 px-2 text-base italic text-gray-600 sm:text-lg">
                "Satu foto ini mungkin sederhana.
                <br />
                Tapi buat aku,
                kenangannya akan selalu spesial. ❤️"
              </p>
            </motion.div>

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
                delay: 0.5,
                duration: 0.8,
              }}
            >
              <BirthdayCake
                onFinished={() => setCakeFinished(true)}
              />
            </motion.div>
          </>
        )}

        {cakeFinished && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-10 px-3 text-center text-lg font-semibold text-rose-600 sm:text-xl"
            >
              ❤️ Terima kasih sudah sampai di akhir perjalanan ini.
            </motion.p>

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
              className="mt-10 flex flex-col items-center gap-4 px-2 sm:flex-row sm:justify-center"
            >
              <button
                type="button"
                onClick={() => navigate("/menu")}
                className="w-full rounded-full bg-rose-500 px-8 py-3 text-base font-semibold text-white transition hover:scale-105 hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:w-auto"
              >
                ❤️ Kembali ke Menu
              </button>

              <button
                type="button"
                onClick={handleRestart}
                className="w-full rounded-full border-2 border-rose-500 px-8 py-3 text-base font-semibold text-rose-600 transition hover:bg-rose-500 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:w-auto"
              >
                🔄 Mulai Lagi
              </button>
            </motion.div>
          </>
        )}

        <div className="mt-10 border-t pt-6 text-center text-xs sm:text-sm text-gray-400 leading-6">
  Website ini dibuat khusus untukmu.
  <br />
  © 2026 • Made with ❤️ by Odoi
</div>
            </motion.div>
    </main>
  );
}

export default FinalGift;
