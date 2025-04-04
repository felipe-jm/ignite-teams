import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "../config";

import { normalizeGroupName } from "@/utils/normalize-group-name";

export async function fetchPlayersByGroup(group: string) {
  try {
    const normalizedGroupName = normalizeGroupName(group);

    const storage = await AsyncStorage.getItem(
      `${PLAYER_COLLECTION}-${normalizedGroupName}`
    );
    const players = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
