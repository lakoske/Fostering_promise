export type Screen =
  | "welcome"
  | "dashboard"
  | "navigator"
  | "repository"
  | "infoPortal"
  | "wallet"
  | "mentor"
  | "resources";

/** Maps mockTiles' href field to the in-app screen it should open. */
export const tileHrefToScreen: Record<string, Screen> = {
  "/mentor": "mentor",
  "/learn": "infoPortal",
  "/wallet": "wallet",
  "/resources": "resources",
};
