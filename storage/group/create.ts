import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "../config";

import { fetchGroups } from "./fetch";

import { AppError } from "@/utils/app-error";

export async function createGroup(group: string) {
  try {
    const groups = await fetchGroups();

    const groupAlreadyExists = groups.includes(group);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com este nome.");
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION,
      JSON.stringify([...groups, group])
    );
  } catch (error) {
    throw error;
  }
}
