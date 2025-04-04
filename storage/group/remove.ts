import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@/storage/config";

import { fetchGroups } from "./fetch";

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

    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${group}`);
  } catch (error) {
    throw error;
  }
}
