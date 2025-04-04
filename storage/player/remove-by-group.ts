import AsyncStorage from "@react-native-async-storage/async-storage";

import { normalizeGroupName } from "@/utils/normalize-group-name";

import { PLAYER_COLLECTION } from "@/storage/config";
import { Player } from "@/@types/player";
import { fetchPlayersByGroup } from "./fetch-players-by-group";

export async function removePlayerByGroup(playerName: string, group: string) {
  try {
    const storedPlayers = await fetchPlayersByGroup(group);

    const filteredPlayers = storedPlayers.filter(
      (player: Player) => player.name !== playerName
    );

    const players = JSON.stringify(filteredPlayers);

    const normalizedGroupName = normalizeGroupName(group);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${normalizedGroupName}`,
      players
    );
  } catch (error) {
    throw error;
  }
}
