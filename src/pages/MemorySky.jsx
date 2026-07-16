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
    { top: "18%", left: "70%" },
    { top: "28%", left: "40%" },
    { top: "35%", left: "82%" },
    { top: "42%", left: "15%" },
    { top: "50%", left: "58%" },
    { top: "60%", left: "32%" },
    { top: "68%", left: "76%" },
    { top: "76%", left: "48%" },
    { top: "82%", left: "10%" },
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
        particleCount: 250,
        spread: 120,
      });
    }
  }, [
    openedStars,
    completed.memory,
    completeGift,
  ]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">

      {/* Moon */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute right-20 top-12 text-7xl"
      >
        🌙
      </motion.div>

      {/* Header */}

      <div className="pt-10 text-center">

        <h1 className="text-5xl font-bold text-white">
          Langit Kenangan ⭐
        </h1>

        <p className="mt-4 text-gray-300">
          Coba klik semua bintang.
          Di setiap bintang,
        ada satu pesan kecil buat kamu. ❤️
        </p>

      </div>

      {/* Stars */}

      <div className="relative mt-20 h-[600px]">

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

      <div className="pb-12 text-center">

        <p className="text-xl font-semibold text-white">

          {openedStars.length} / {messages.length} Satu Kenangan 💌

        </p>

        <button
          onClick={() => navigate("/menu")}
          className="mt-8 rounded-full bg-rose-500 px-8 py-3 text-white transition hover:bg-rose-600"
        >
          ← Back
        </button>

      </div>

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