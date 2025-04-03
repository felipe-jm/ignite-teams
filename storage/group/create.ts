import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../config";

import { fetchGroups } from "./fetch";

export async function createGroup(group: string) {
  try {
    const groups = await fetchGroups();
    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, group])
    );
  } catch (error) {
    throw error;
  }
}
