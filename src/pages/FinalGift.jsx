import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import finalPhoto from "../assets/gallery/photo3.jpg";

import { useProgress } from "../context/ProgressContext";

function FinalGift() {
  const navigate = useNavigate();

  const {
    isEverythingCompleted,
    resetProgress,
  } = useProgress();

  useEffect(() => {
    if (isEverythingCompleted) {
      const timer = setTimeout(() => {
        confetti({
          particleCount: 250,
          spread: 120,
          origin: {
            y: 0.6,
          },
        });
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isEverythingCompleted]);

  const handleRestart = () => {
    resetProgress();
    navigate("/");
  };

  if (!isEverythingCompleted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-6">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          className="max-w-xl rounded-3xl bg-white p-10 text-center shadow-2xl"
        >
          <div className="text-7xl">
            🔒
          </div>

          <h1 className="mt-6 text-4xl font-bold text-rose-600">
            Hadiah Terakhir Masih Terkunci
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Sebelum membuka hadiah terakhir,
            selesaikan dulu semua perjalanan yang sudah aku siapkan yaa. ❤️
          </p>

          <button
            onClick={() => navigate("/menu")}
            className="mt-10 rounded-full bg-rose-500 px-8 py-3 font-semibold text-white transition hover:bg-rose-600"
          >
            ← Kembali ke Menu
          </button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 px-6 py-16">

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
        className="mx-auto max-w-3xl rounded-3xl bg-white p-10 shadow-2xl"
      >

        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="text-center text-7xl"
        >
          🎁
        </motion.div>

        <h1 className="mt-6 text-center text-5xl font-bold text-rose-600">
          Hadiah Terakhir
        </h1>

        <p className="mt-3 text-center text-gray-500">
          Terima kasih yaa, udah menyelesaikan semua perjalanan ini. 🤍
        </p>

        <div className="mt-10 rounded-3xl bg-rose-50 p-8">

          <h2 className="text-3xl font-bold text-rose-600">
            💌 Untuk Kamu
          </h2>

          <div className="mt-6 space-y-5 text-lg leading-9 text-gray-700">

            <p>
              Selamat ulang tahun yaa. ❤️
            </p>

            <p>
              Terima kasih udah meluangkan waktu buat menyelesaikan perjalanan kecil ini.
            </p>

            <p>
              Aku tahu, ini mungkin bukan hadiah yang paling besar.
              Bukan juga hadiah yang paling mahal.
            </p>

            <p>
              Tapi aku bikin semuanya dengan sepenuh hati,
              dan semoga setiap halaman yang kamu buka tadi
              bisa bikin kamu tersenyum walaupun cuma sebentar.
            </p>

            <p>
              Di umur yang baru ini,
              aku cuma pengen berharap semoga kamu selalu sehat,
              selalu bahagia,
              dipertemukan dengan banyak hal baik,
              dan semua impian yang lagi kamu perjuangkan
              bisa terwujud satu per satu.
            </p>

            <p>
              Jangan terlalu keras sama diri sendiri ya.
              Istirahat kalau capek.
              Tetap jadi diri kamu yang sekarang,
              karena itu salah satu alasan kenapa kamu begitu spesial.
            </p>

            <p>
              Semoga hari ini penuh tawa,
              penuh kebahagiaan,
              dan semoga masih ada banyak cerita indah
              yang bisa kita lewati nanti.
            </p>

            <p className="font-semibold text-rose-600">
              Sekali lagi...
              <br />
              Selamat Ulang Tahun. 🎂❤️
            </p>

          </div>

        </div>

        <div className="mt-12 text-center">

          <p className="text-lg text-gray-600">
            
            with great affection,
          </p>

          <p className="mt-2 text-2xl font-bold text-rose-600">
            — Odoi ❤️
          </p>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <button
            onClick={() => navigate("/menu")}
            className="rounded-full bg-rose-500 px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-rose-600"
          >
            ❤️ Kembali ke Menu
          </button>

          <button
            onClick={handleRestart}
            className="rounded-full border-2 border-rose-500 px-8 py-3 font-semibold text-rose-600 transition hover:bg-rose-500 hover:text-white"
          >
            🔄 Mulai Lagi
          </button>

        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-gray-400">
          Website ini dibuat khusus untukmu.
          <br />
          © 2026 • Made with ❤️ by Odoi
        </div>

      </motion.div>

    </main>
  );
}

export default FinalGift;