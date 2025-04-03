import { useState } from "react";

import { FlatList } from "react-native";
import { useRouter } from "expo-router";

import Header from "@/components/Header";
import Highlight from "@/components/Highlight";
import Button from "@/components/Button";
import GroupCard from "@/components/GroupCard";
import { EmptyList } from "@/components/EmptyList";

import * as S from "./styles";

export default function Groups() {
  const router = useRouter();

  const [groups, setGroups] = useState<string[]>([
    "Turma 1",
    "Turma 2",
    "Turma 3",
  ]);

  function handleNewGroup() {
    router.navigate("/new-group");
  }

  function handleOpenGroup(group: string) {
    router.navigate({
      pathname: "/players",
      params: { group },
    });
  }

  return (
    <S.Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        ListEmptyComponent={<EmptyList message="Nenhuma turma encontrada" />}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}
