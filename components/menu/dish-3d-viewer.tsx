"use client";

import "@google/model-viewer";
import { useEffect, useRef, useState } from "react";
import type { ModelViewerElement } from "@google/model-viewer";
import { Box } from "lucide-react";
import type { Model3D } from "@/lib/menu-data";

export default function Dish3DViewer({
  model3d,
  name,
}: {
  model3d: Model3D;
  name: string;
}) {
  const ref = useRef<ModelViewerElement>(null);
  const [arSupported, setArSupported] = useState<"unknown" | boolean>(
    "unknown"
  );
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkAr = () => setArSupported(el.canActivateAR);
    const onProgress = (e: Event) =>
      setProgress((e as CustomEvent<{ totalProgress: number }>).detail.totalProgress);

    el.addEventListener("load", checkAr);
    el.addEventListener("ar-status", checkAr);
    el.addEventListener("progress", onProgress);
    checkAr();

    return () => {
      el.removeEventListener("load", checkAr);
      el.removeEventListener("ar-status", checkAr);
      el.removeEventListener("progress", onProgress);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-card">
      <model-viewer
        ref={ref}
        src={model3d.glbUrl}
        ios-src={model3d.usdzUrl}
        poster={model3d.posterUrl}
        alt={`3D model jela: ${name}`}
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="fixed"
        camera-controls
        auto-rotate
        environment-image="neutral"
        loading="lazy"
        style={{ width: "100%", height: "100%" }}
      />

      {progress > 0 && progress < 1 && (
        <div className="absolute inset-x-4 top-4 h-1.5 overflow-hidden rounded-full bg-background/60 backdrop-blur">
          <div
            className="h-full rounded-full bg-ember-500 transition-[width]"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}

      {arSupported === true && (
        <button
          onClick={() => ref.current?.activateAR()}
          aria-label={`Pogledaj ${name} u proširenoj realnosti na svom stolu`}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-ember-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-ember-600"
        >
          <Box className="h-4 w-4" />
          Pogledaj u AR
        </button>
      )}

      {arSupported === false && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
          AR nije dostupan na ovom uređaju — pogledaj model u 3D
        </p>
      )}
    </div>
  );
}
