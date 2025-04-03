import { fetchPlayersByGroup } from "./fetch-plays-by-group";
import { Player } from "@/@types/player";

export async function fetchPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const storagedPlayers = await fetchPlayersByGroup(group);

    const players = storagedPlayers.filter(
      (player: Player) => player.team === team
    );

    return players;
  } catch (error) {
    throw error;
  }
}
