import { createContext, useContext, useEffect, useState } from "react";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("birthday-progress");

    return saved
      ? JSON.parse(saved)
      : {
          memory: false,
          gallery: false,
          music: false,
        };
  });

  const [openedStars, setOpenedStars] = useState(() => {
    const saved = localStorage.getItem("birthday-stars");
    return saved ? JSON.parse(saved) : [];
  });

  const [openedPhotos, setOpenedPhotos] = useState(() => {
    const saved = localStorage.getItem("birthday-photos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "birthday-progress",
      JSON.stringify(completed)
    );
  }, [completed]);

  useEffect(() => {
    localStorage.setItem(
      "birthday-stars",
      JSON.stringify(openedStars)
    );
  }, [openedStars]);

  useEffect(() => {
    localStorage.setItem(
      "birthday-photos",
      JSON.stringify(openedPhotos)
    );
  }, [openedPhotos]);

  const completeGift = (gift) => {
    setCompleted((prev) => ({
      ...prev,
      [gift]: true,
    }));
  };

  const openStar = (id) => {
    setOpenedStars((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const openPhoto = (id) => {
    setOpenedPhotos((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const resetProgress = () => {
    const defaultProgress = {
      memory: false,
      gallery: false,
      music: false,
    };

    setCompleted(defaultProgress);
    setOpenedStars([]);
    setOpenedPhotos([]);

    localStorage.removeItem("birthday-progress");
    localStorage.removeItem("birthday-stars");
    localStorage.removeItem("birthday-photos");
  };

  const isEverythingCompleted =
    completed.memory &&
    completed.gallery &&
    completed.music;

  return (
    <ProgressContext.Provider
      value={{
        completed,
        completeGift,

        openedStars,
        openStar,

        openedPhotos,
        openPhoto,

        resetProgress,

        isEverythingCompleted,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error(
      "useProgress harus digunakan di dalam ProgressProvider."
    );
  }

  return context;
}