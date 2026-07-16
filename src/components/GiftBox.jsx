import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

import "./GiftBox.css";

function GiftBox() {
  const navigate = useNavigate();

  const [opening, setOpening] = useState(false);

  const handleOpenGift = () => {
    if (opening) return;

    setOpening(true);

    // Confetti
    confetti({
      particleCount: 180,
      spread: 100,
      origin: {
        y: 0.6,
      },
    });

    // Tunggu animasi selesai
    setTimeout(() => {
      navigate("/menu");
    }, 2200);
  };

  return (
    <div className="gift-wrapper">
      <AnimatePresence>

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: opening ? [1, 1.08, 1] : 1,
            rotate: opening ? [0, -4, 4, -4, 0] : 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <div className="gift-box">

            {/* Cahaya */}

            {opening && (
              <motion.div
                className="light"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 8,
                }}
                transition={{
                  duration: 1,
                }}
              />
            )}

            <div className="bow">
              🎀
            </div>

            <div className={`lid ${opening ? "open" : ""}`} />

            <div className="box" />

            <div className="ribbon-v" />

            <div className="ribbon-h" />

          </div>

          <motion.h1
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
            className="mt-12 text-5xl font-bold text-rose-600"
          >
            Selamat Ulang Tahun 🤍
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.6,
            }}
            className="mt-5 text-lg text-gray-700"
          >
            Semoga hadiah kecil ini
            bisa bikin hari kamu jadi lebih spesial.
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={handleOpenGift}
            className="mt-8 rounded-full bg-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-rose-600"
          >
            Buka Hadiahnya 🎁
          </motion.button>

        </motion.div>

      </AnimatePresence>
    </div>
  );
}

export default GiftBox;