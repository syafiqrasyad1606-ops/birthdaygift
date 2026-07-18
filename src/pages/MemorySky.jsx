import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useNavigate } from "react-router-dom";

import Star from "../components/Star";
import StarModal from "../components/StarModal";

import { messages } from "../data/messages";
import { useProgress } from "../context/ProgressContext";

function MemorySky() {
  const navigate = useNavigate();

  const {
    openedStars,
    openStar,
    completeGift,
    completed,
  } = useProgress();

  const [selectedMessage, setSelectedMessage] = useState(null);

  const starPositions = [
    { top: "10%", left: "18%" },
    { top: "18%", left: "72%" },
    { top: "28%", left: "42%" },
    { top: "36%", left: "82%" },
    { top: "44%", left: "15%" },
    { top: "52%", left: "58%" },
    { top: "62%", left: "30%" },
    { top: "70%", left: "76%" },
    { top: "80%", left: "48%" },
    { top: "86%", left: "12%" },
  ];

  const handleStarClick = (id) => {
    openStar(id);

    const message = messages.find((m) => m.id === id);

    setSelectedMessage(message);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  useEffect(() => {
    if (
      openedStars.length === messages.length &&
      !completed.memory
    ) {
      completeGift("memory");

      confetti({
        particleCount: 220,
        spread: 120,
        origin: {
          y: 0.65,
        },
      });
    }
  }, [
    openedStars,
    completed.memory,
    completeGift,
  ]);

  return (
    // FIX: min-h-[100dvh] instead of min-h-screen (accurate height on
    // mobile browsers) — overflow-hidden was already here and is kept,
    // it's what stops the glow blobs / moon from causing a horizontal
    // scrollbar on narrow phones.
    <main className="relative min-h-[100dvh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black px-4 py-8 sm:px-8 sm:py-10 md:px-10">

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl sm:h-[420px] sm:w-[420px]" />

      {/* Moon */}
      {/* FIX: nudged in from the edge on mobile (right-3 vs right-4, smaller
          text) so it can't get clipped, plus pointer-events-none/aria-hidden
          since it's purely decorative. */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-4 text-4xl sm:right-10 sm:top-8 sm:text-6xl md:right-16 md:text-7xl"
      >
        🌙
      </motion.div>

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
        className="relative z-10 text-center"
      >

        <h1 className="break-words text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Langit Kenangan ⭐
        </h1>

        <p className="mx-auto mt-5 max-w-2xl px-2 text-sm leading-6 text-gray-300 sm:text-lg sm:leading-8">
          Coba klik semua bintang.
          <br />
          Di setiap bintang ada satu pesan kecil
          yang sudah aku siapkan untukmu. ❤️
        </p>

        {/* Progress */}

        <div className="mx-auto mt-8 w-full max-w-md px-2">

          <div className="mb-3 flex items-center justify-between gap-2 text-sm font-semibold text-gray-300">

            <span>Progress</span>

            <span>
              {openedStars.length}/{messages.length}
            </span>

          </div>

          <div
            className="h-3 overflow-hidden rounded-full bg-white/20"
            role="progressbar"
            aria-valuenow={openedStars.length}
            aria-valuemin={0}
            aria-valuemax={messages.length}
            aria-label="Bintang yang sudah dibuka"
          >

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${(openedStars.length / messages.length) * 100}%`,
              }}
              transition={{
                duration: 0.5,
              }}
              className="h-full rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500"
            />

          </div>

        </div>

      </motion.div>

      {/* Star Area */}
      {/* FIX: h-[60vh] -> h-[60dvh] so the star field's height stays stable
          on mobile instead of shifting as the browser chrome shows/hides
          (which used to make the lowest stars jump around / go offscreen). */}

      <div className="relative mx-auto mt-10 h-[60dvh] min-h-[480px] max-w-6xl sm:mt-12 sm:h-[650px] sm:min-h-[520px] lg:h-[720px]">

              {messages.map((message, index) => (
          <Star
            key={message.id}
            id={message.id}
            opened={openedStars.includes(message.id)}
            onClick={handleStarClick}
            top={starPositions[index].top}
            left={starPositions[index].left}
          />
        ))}
      </div>

      {/* Footer */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="relative z-10 pb-10 text-center"
      >
        <p className="text-lg font-semibold text-white sm:text-xl">
          {openedStars.length} / {messages.length} Memories Found 💌
        </p>

        <motion.button
          type="button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.96,
          }}
          onClick={() => navigate("/menu")}
          className="mt-8 rounded-full bg-rose-500 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:bg-rose-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:px-8"
        >
          ← Back to Menu
        </motion.button>
      </motion.div>

      {/* Modal */}

      <StarModal
        isOpen={selectedMessage !== null}
        message={selectedMessage?.text}
        current={openedStars.length}
        total={messages.length}
        onClose={closeModal}
      />
    </main>
  );
}

export default MemorySky;