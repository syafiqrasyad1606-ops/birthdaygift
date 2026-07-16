import { useEffect, useRef, useState } from "react";
import {
  FaPlay,
  FaPause,
  FaMusic,
} from "react-icons/fa";

import song from "../assets/song.mp3";

function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.3;

    if (playing) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
      >
        <source
          src={song}
          type="audio/mpeg"
        />
      </audio>

      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 rounded-full bg-white/90 px-5 py-3 shadow-2xl backdrop-blur-xl">

        <div className="rounded-full bg-rose-500 p-3 text-white">
          <FaMusic />
        </div>

        <div>

          <p className="text-sm font-bold text-gray-800">
            Glue Song
          </p>

          <p className="text-xs text-gray-500">
            {playing ? "Playing..." : "Paused"}
          </p>

        </div>

        <button
          onClick={() => setPlaying((prev) => !prev)}
          className="rounded-full bg-rose-500 p-3 text-white transition hover:scale-105 hover:bg-rose-600"
        >
          {playing ? (
            <FaPause />
          ) : (
            <FaPlay />
          )}
        </button>

      </div>
    </>
  );
}

export default MusicPlayer;