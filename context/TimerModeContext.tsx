import React, { useState, createContext } from "react";

export type TimerModes = "Focus" | "Break";

type TimerModeContext = {
  timerMode: TimerModes;
  setTimerMode: (timerMode: TimerModes) => void;
};
type Props = {
  children: JSX.Element;
};

export const TimerModeContext = createContext<TimerModeContext>({
  timerMode: "Focus",
  setTimerMode: () => {},
});

export default function TimerModeContextProvider({ children }: Props) {
  const [timerMode, setTimerMode] = useState<TimerModes>("Focus");
  return (
    <TimerModeContext.Provider
      value={{
        timerMode,
        setTimerMode,
      }}
    >
      {children}
    </TimerModeContext.Provider>
  );
}
