import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
} from "react-icons/fa";

import musicSticker from "../assets/stickers/music.png";
import song from "../assets/song.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const loaded = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loaded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loaded);
    };
  }, []);

  const formatTime = (time) => {
    if (!time) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const seekToPercent = (percent) => {
    const audio = audioRef.current;

    if (!audio || !duration) return;

    const clamped = Math.min(1, Math.max(0, percent));

    audio.currentTime = clamped * duration;
  };

  const handleSeek = (e) => {
    const rect =
      e.currentTarget.getBoundingClientRect();

    const percent =
      (e.clientX - rect.left) / rect.width;

    seekToPercent(percent);
  };

  // FIX: the seek bar was a bare <div onClick>, unreachable by keyboard
  // and invisible to screen readers. Added role="slider" + keyboard
  // support (arrow keys nudge by 5s) so it behaves like a real control.
  const handleSeekKeyDown = (e) => {
    if (!duration) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      seekToPercent((currentTime + 5) / duration);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      seekToPercent((currentTime - 5) / duration);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source
          src={song}
          type="audio/mpeg"
        />
      </audio>

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
          duration: 0.5,
        }}
        // FIX: added a safe-area-aware bottom offset (on top of the
        // existing bottom-4/6) so on notched/gesture-bar phones (iPhone
        // etc.) the player doesn't sit under the home-indicator area.
        style={{
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
        className="
          fixed
          bottom-4
          left-1/2
          z-50
          w-[calc(100%-1.5rem)]
          max-w-[360px]
          -translate-x-1/2
          rounded-[28px]
          border
          border-white/30
          bg-white/85
          p-4
          shadow-2xl
          backdrop-blur-xl
          sm:bottom-6
          sm:right-6
          sm:left-auto
          sm:translate-x-0
        "
      >
        {/* Top */}

        <div className="flex items-center gap-3 sm:gap-4">

          <motion.div
            aria-hidden="true"
            animate={
              playing
                ? { rotate: 360 }
                : { rotate: 0 }
            }
            transition={{
              repeat: playing ? Infinity : 0,
              duration: 8,
              ease: "linear",
            }}
            className="shrink-0 rounded-full bg-rose-500 p-3 text-white shadow-lg"
          >
            <img
              src={musicSticker}
              alt=""
              className="w-7 sm:w-8"
            />
          </motion.div>

          <div className="min-w-0 flex-1">

            <h3 className="truncate text-base font-bold text-gray-800">
              Glue Song
            </h3>

            <p className="truncate text-sm text-gray-500">
              beabadoobee
            </p>

          </div>

          <motion.button
            type="button"
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={() =>
              setPlaying(!playing)
            }
            aria-label={playing ? "Pause" : "Play"}
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-rose-500
              text-white
              shadow-lg
              transition
              hover:bg-rose-600
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-rose-300
            "
          >
            {playing ? (
              <FaPause size={18} />
            ) : (
              <FaPlay
                size={18}
                className="ml-0.5"
              />
            )}
          </motion.button>

        </div>

        {/* Progress */}

        <div className="mt-5">

                    <div
            onClick={handleSeek}
            onKeyDown={handleSeekKeyDown}
            role="slider"
            tabIndex={0}
            aria-label="Posisi lagu"
            aria-valuemin={0}
            aria-valuemax={duration || 0}
            aria-valuenow={currentTime}
            aria-valuetext={`${formatTime(currentTime)} dari ${formatTime(duration)}`}
            className="h-2.5 cursor-pointer overflow-hidden rounded-full bg-gray-200 outline-none focus-visible:ring-4 focus-visible:ring-rose-300"
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500"
              animate={{
                width: `${
                  duration
                    ? (currentTime / duration) * 100
                    : 0
                }%`,
              }}
              transition={{
                duration: 0.15,
              }}
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MusicPlayer;