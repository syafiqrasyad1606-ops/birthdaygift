import cameraSticker from "../assets/stickers/camera.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import TimelineCard from "../components/TimelineCard";
import GalleryModal from "../components/GalleryModal";

import { gallery } from "../data/gallery";
import { useProgress } from "../context/ProgressContext";

function Gallery() {
  const navigate = useNavigate();

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const {
    completed,
    completeGift,
  } = useProgress();

  useEffect(() => {
    if (!completed.gallery) {
      completeGift("gallery");

      setTimeout(() => {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: {
            y: 0.6,
          },
        });
      }, 700);
    }
  }, [completed.gallery, completeGift]);

  return (
    <>
      {/* FIX: this page had no overflow-x-hidden and used min-h-screen.
          Added both — overflow-x-hidden is a safety net in case a very
          long/unbroken title or caption from `data/gallery` ever pushes
          wider than the viewport, and min-h-[100dvh] keeps the height
          accurate on mobile browsers. */}
      <main className="min-h-[100dvh] overflow-x-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-white px-4 py-8 sm:px-8 sm:py-10 md:px-10">

        {/* Header */}

        <section className="mx-auto max-w-4xl pt-6 text-center">

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
              duration: 0.7,
            }}
          >

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">

              <img
                src={cameraSticker}
                alt=""
                aria-hidden="true"
                className="w-9 sm:w-12 md:w-14"
              />

              <h1 className="break-words text-3xl font-bold text-rose-600 sm:text-4xl md:text-5xl">
                Cerita Kita
              </h1>

            </div>

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
              className="mx-auto mt-6 max-w-2xl px-2 text-sm leading-6 text-gray-600 sm:text-lg sm:leading-8"
            >
              Tiga foto ini mungkin sederhana.
              <br />
              Tapi setiap fotonya selalu punya cerita
              yang bikin aku senyum. ❤️
            </motion.p>

          </motion.div>

        </section>

        {/* Timeline */}
        {/* FIX: min-w-0 so a long caption/title from data/gallery can never
            force this section wider than the screen on mobile. */}

        <section className="mx-auto mt-12 min-w-0 max-w-5xl sm:mt-16 md:mt-20">

                    {gallery.map((item, index) => (
            <TimelineCard
              key={item.id}
              index={index}
              title={item.title}
              image={item.image}
              description={item.description}
              onClick={() => setSelectedPhoto(item)}
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
          className="mx-auto mt-8 max-w-3xl pb-16 text-center sm:mt-10 sm:pb-20"
        >
          <h2 className="text-2xl font-bold text-rose-600 sm:text-3xl">
            ❤️ Terima Kasih
          </h2>

          <p className="mx-auto mt-5 px-2 text-sm leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Udah jadi bagian dari banyak kenangan indah ini.
            <br />
            Semoga nanti kita masih bisa bikin banyak cerita baru bersama. ❤️
          </p>

          <motion.button
            type="button"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => navigate("/menu")}
            className="mt-8 rounded-full bg-rose-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-rose-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300 active:scale-95 sm:mt-10 sm:px-8"
          >
            ← Kembali ke Menu
          </motion.button>
        </motion.section>

      </main>

      {/* Gallery Modal */}

      <GalleryModal
        isOpen={selectedPhoto !== null}
        photo={selectedPhoto?.image}
        title={selectedPhoto?.title}
        description={selectedPhoto?.description}
        onClose={() => setSelectedPhoto(null)}
      />
    </>
  );
}

export default Gallery;