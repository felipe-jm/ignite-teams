export function normalizeGroupName(group: string) {
  return group.trim().replaceAll(" ", "").toLowerCase();
}
