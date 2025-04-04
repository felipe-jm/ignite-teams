import { useCallback, useEffect, useState } from "react";

import { FlatList } from "react-native";
import { useRouter } from "expo-router";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { GroupCard } from "@/components/GroupCard";
import { EmptyList } from "@/components/EmptyList";

import * as S from "./styles";

import { fetchGroups } from "@/storage/group/fetch";
import { Loading } from "@/components/Loading";

export default function Groups() {
  const router = useRouter();

  const [groups, setGroups] = useState<string[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  function handleNewGroup() {
    router.navigate("/new-group");
  }

  function handleOpenGroup(group: string) {
    router.navigate({
      pathname: "/players",
      params: { group },
    });
  }

  const fetchAllGroups = useCallback(async () => {
    try {
      setIsLoading(true);
      const groups = await fetchGroups();
      setGroups(groups);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllGroups();
  }, []);

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
          )}
          ListEmptyComponent={<EmptyList message="Nenhuma turma encontrada" />}
          contentContainerStyle={groups.length === 0 && { flex: 1 }}
        />
      )}

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
