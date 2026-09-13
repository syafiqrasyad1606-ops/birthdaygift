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

    confetti({
      particleCount: 180,
      spread: 100,
      origin: {
        y: 0.6,
      },
    });

    setTimeout(() => {
      navigate("/menu");
    }, 2200);
  };

  const handleBoxKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpenGift();
    }
  };

  return (
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
        className="text-center"
      >
       

        <div
          className="gift-box"
          role="button"
          tabIndex={0}
          aria-label="Buka hadiah"
          onClick={handleOpenGift}
          onKeyDown={handleBoxKeyDown}
        >
          

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

         

          <div className="bow">🎀</div>

          

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
          className="
            mt-10
            break-words
            text-3xl
            font-bold
            leading-tight
            text-rose-600
            sm:text-4xl
            md:text-5xl
          "
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
          className="
            mx-auto
            mt-5
            max-w-md
            px-2
            text-base
            leading-7
            text-gray-700
            sm:text-lg
          "
        >
          Semoga hadiah kecil ini
          <br />
          bisa bikin hari kamu jadi lebih spesial.
        </motion.p>

        

        <motion.button
          type="button"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={handleOpenGift}
          className="
            mt-8
            w-full
            max-w-xs
            rounded-full
            bg-rose-500
            px-8
            py-4
            text-base
            font-semibold
            text-white
            shadow-xl
            transition
            hover:bg-rose-600
            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-rose-300
            active:scale-95
            sm:text-lg
          "
        >
          Buka Hadiahnya 🎁
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

export default GiftBox;
