"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export default function CurrentDate() {
  const date = useSyncExternalStore(
    subscribe,
    () => new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }),
    () => "",
  );

  return <span className="text-xs text-neutral-500">{date}</span>;
}
