// libs/utils/src/templateMeta.ts

// libs/utils/src/templateMeta.ts

import type { Template } from "./namespaces/template";

/** Map some template keys to a human-friendly name; fall back to the key if missing */
export const templatesMeta: Partial<Record<Template, { displayName: string }>> = {
  azurill:   { displayName: "WOAHHH" },
  bronzor:   { displayName: "Bronzor Clean" },
  chikorita: { displayName: "Chikorita Classic" },
  // …any others you like…
  pikachu:   { displayName: "Pikachu CV" },
  rhyhorn:   { displayName: "Rhyhorn Modern" },
};

  