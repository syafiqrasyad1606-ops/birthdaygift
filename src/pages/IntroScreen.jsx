import { motion } from "framer-motion";
import { FaGift } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function IntroScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">

      {/* Blur Background */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-pink-300 opacity-40 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-rose-300 opacity-40 blur-3xl"></div>

      {/* Floating Hearts */}

      <motion.div
        className="absolute left-16 top-24 text-4xl"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
      >
        ❤️
      </motion.div>

      <motion.div
        className="absolute right-24 top-36 text-3xl"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
      >
        💖
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-32 text-4xl"
        animate={{
          y: [0, -35, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
      >
        💕
      </motion.div>

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          y: 70,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="z-10 w-[92%] max-w-xl rounded-[35px] bg-white/70 p-12 text-center shadow-2xl backdrop-blur-xl"
      >
        <motion.div
          animate={{
            rotate: [0, -8, 8, -8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-500 text-5xl text-white shadow-xl"
        >
          <FaGift />
        </motion.div>

        <h1 className="mt-8 text-5xl font-bold text-rose-600">
          Selamat Ulang Tahun ❤️
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-700">
         Hari ini bukan cuma hari ulang tahun kamu.

          <br />
         Aku udah nyiapin sesuatu yang sederhana, tapi semoga bisa bikin kamu senyum.
          <br />
         Yuk mulai perjalanan kecil ini. ✨
        </p>

        <motion.button
          whileHover={{
            scale: 1.06,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => navigate("/gift")}
          className="mt-10 rounded-full bg-rose-500 px-10 py-4 text-lg font-semibold text-white shadow-xl transition hover:bg-rose-600"
        >
          Mulai ✨
        </motion.button>
      </motion.div>
    </div>
  );
}

export default IntroScreen;