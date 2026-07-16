import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import TimelineCard from "../components/TimelineCard";
import { gallery } from "../data/gallery";
import { useProgress } from "../context/ProgressContext";

function Gallery() {
  const navigate = useNavigate();

  const {
    completed,
    completeGift,
  } = useProgress();

  useEffect(() => {
    if (!completed.gallery) {
      completeGift("gallery");

      setTimeout(() => {
        confetti({
          particleCount: 180,
          spread: 90,
          origin: {
            y: 0.6,
          },
        });
      }, 800);
    }
  }, [completed.gallery, completeGift]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-white">

      {/* Header */}

      <section className="px-6 pt-16 text-center">

        <motion.h1
          initial={{
            opacity: 0,
            y: -40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-5xl font-bold text-rose-600"
        >
          Cerita Kita 📸
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600"
        >
        Tiga foto ini mungkin sederhana.

        Tapi setiap fotonya
        selalu punya cerita yang bikin aku senyum.
        </motion.p>

      </section>

      {/* Timeline */}

      <section className="mt-20 px-6">

        {gallery.map((item, index) => (
          <TimelineCard
            key={item.id}
            index={index}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}

      </section>

      {/* Footer */}

      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="pb-20 text-center"
      >

        <h2 className="text-3xl font-bold text-rose-600">
          ❤️ Terima kasih
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-600">
        udah jadi bagian dari
        banyak kenangan indah ini. ❤️
        </p>

        <button
          onClick={() => navigate("/menu")}
          className="mt-10 rounded-full bg-rose-500 px-8 py-3 text-white shadow-lg transition hover:scale-105 hover:bg-rose-600"
        >
          ← Back to Gift Menu
        </button>

      </motion.section>

    </main>
  );
}

export default Gallery;