"use client";

import { useEffect, useState } from "react";

export function AgeCounter() {
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    const dob = new Date("2006-04-11T01:00:00+05:30").getTime();

    const tick = () => {
      const now = Date.now();
      const diff = now - dob;
      const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
      setAge(ageInYears.toFixed(9));
    };

    tick();
    const interval = setInterval(tick, 50);

    return () => clearInterval(interval);
  }, []);

  if (!age) {
    return <span className="opacity-0">00.000000000</span>;
  }

  return <span className="font-mono tabular-nums">{age}</span>;
}
