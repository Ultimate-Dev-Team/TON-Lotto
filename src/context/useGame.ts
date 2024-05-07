import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface State {
  // Scratchable Areas
  revealed: number;
  reveal: () => void;
  resetRevealed: () => void;

  phase: string;
  setPhase: (gamePhase: string) => void;
  start: () => void;
  end: () => void;
}

export const store = create<State>()(
  subscribeWithSelector((set) => ({
    /**
     *  Scratchable Areas
     *  可刮擦区域数量
     */
    revealed: 0,
    reveal: () => set((state) => ({ revealed: Number(state.revealed) + 1 })),
    resetRevealed: () => {
      set(() => {
        return {
          revealed: 0,
        };
      });
    },
    /**
     * Phases
     * 游戏阶段
     */
    phase: "ready", // "playing", "ended"

    setPhase: (gamePhase: string) => {
      set(() => {
        return {
          phase: gamePhase,
        };
      });
    },

    start: () => {
      set((state) => {
        if (state.phase === "ready" || state.phase === "ended") {
          return {
            phase: "playing",
          };
        }
        return {};
      });
    },

    end: () => {
      set((state) => {
        if (state.phase === "playing") {
          return {
            phase: "ended",
          };
        }
        return {};
      });
    },
  })),
);
