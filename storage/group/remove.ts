import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@/storage/config";

import { fetchGroups } from "./fetch";
import { fetchPlayersByGroup } from "../player/fetch-players-by-group";
import { normalizeGroupName } from "@/utils/normalize-group-name";

export async function removeGroup(group: string) {
  try {
    const storedGroups = await fetchGroups();

    const filteredGroups = storedGroups.filter(
      (groupItem: string) => groupItem !== group
    );

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify(filteredGroups)
    );

    const players = await fetchPlayersByGroup(group);

    const normalizedGroupName = normalizeGroupName(group);

    await AsyncStorage.removeItem(
      `${PLAYER_COLLECTION}-${normalizedGroupName}`
    );
  } catch (error) {
    throw error;
  }
}
