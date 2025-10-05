import { useEffect, useRef } from "react";

export function useSound(url = "/click.wav") {
  const audioCtxRef = useRef(null);
  const bufferRef = useRef(null);

  useEffect(() => {
    const init = async () => {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        audioCtxRef.current = ctx;

        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const decodedBuffer = await ctx.decodeAudioData(arrayBuffer);
        bufferRef.current = decodedBuffer;
      } catch (err) {
        console.error("Failed to load sound:", err);
      }
    };

    init();

    return () => {
      audioCtxRef.current?.close();
    };
  }, [url]);

  const playSound = async () => {
    const ctx = audioCtxRef.current;
    const buffer = bufferRef.current;

    if (!ctx || !buffer) return;

    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  };

  return { playSound };
}
