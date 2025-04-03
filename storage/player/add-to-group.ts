import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../config";

import { fetchPlayersByGroup } from "./fetch-plays-by-group";

import { AppError } from "@/utils/app-error";
import { Player } from "@/@types/player";

import { normalizeGroupName } from "@/utils/normalize-group-name";

export async function addPlayerToGroup(
  group: string,
  player: string,
  team: string
) {
  try {
    const storagedPlayers = await fetchPlayersByGroup(group);

    const playerAlreadyExists = storagedPlayers.find(
      (playerItem: Player) => playerItem.name === player
    );

    if (playerAlreadyExists) {
      throw new AppError("Já existe um jogador com este nome.");
    }

    const normalizedGroupName = normalizeGroupName(group);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${normalizedGroupName}`,
      JSON.stringify([...storagedPlayers, { name: player, team }])
    );
  } catch (error) {
    throw error;
  }
}
