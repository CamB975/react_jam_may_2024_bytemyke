import { GameState } from "../types.ts";
import { getNextSection } from "./getNextSection.ts";
import { updateSnakePlacingGap } from "./updateSnakePlacingGap.ts";
import { updateSectionEnd } from "./updateSectionEnd.ts";
import { checkLatestSectionForCollisions } from "./checkLatestSectionForCollisions.ts";

export function updatePlaying(game: GameState) {
  for (const player of game.players) {
    if (player.state !== "alive") continue;
    const previousEnd = { ...latestSection.end };
    // updateGameScore(GameScore);  }
  }
}
