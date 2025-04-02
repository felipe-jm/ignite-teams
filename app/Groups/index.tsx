import { useState } from "react";

import { SafeAreaView, FlatList } from "react-native";

import Header from "@/components/Header";
import Highlight from "@/components/Highlight";
import Button from "@/components/Button";
import GroupCard from "@/components/GroupCard";
import { EmptyList } from "@/components/EmptyList";

import * as S from "./styles";

export default function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Turma 1",
    "Turma 2",
    "Turma 3",
  ]);

  return (
    <S.Container>
      <SafeAreaView>
        <Header />

        <Highlight title="Turmas" subtitle="jogue com a sua turma" />

        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <GroupCard title={item} onPress={() => {}} />
          )}
          ListEmptyComponent={<EmptyList message="Nenhuma turma encontrada" />}
        />

        <Button title="Criar nova turma" />
      </SafeAreaView>
    </S.Container>
  );
}
