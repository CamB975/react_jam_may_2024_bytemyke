import { PlayerId, RuneClient } from "rune-games-sdk"

declare global {
  const Rune: RuneClient<GameState, GameActions>
}

export type GameStage = "gettingReady" | "countdown" | "playing" | "endOfRound"

export interface GameState {
  stage: GameStage
  players: PlayerInfo[]
  scores: { [playerId: PlayerId]: number }
  lastRoundWinnerId: PlayerId | undefined
}

export type GameActions = {
  setScore(score: number): void
  // setGameScore()
  setReady(): void
}

// export type State = "pending" | "alive" | "dead"


// export type Section = {
//   start: Point
//   end: Point
//   endAngle: number
//   gap: boolean
// } & (
//   | {
//       turning: "none"
//     }
//   | {
//       turning: "left" | "right"
//       arc: {
//         center: Point
//         startAngle: number
//         endAngle: number
//       }
//     }
// )

export type PlayerInfo = {
  playerId: string
  color: string
  state: State
  score: number
  gamesWon: number
}

// export type Snake = {
//   gapCounter: number
//   turning: "left" | "right" | "none"
//   sections: [Section, ...Section[]]
//   lastCollisionGridPoints: Point[]
// }
