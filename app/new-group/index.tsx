import { useState } from "react";

import { useRouter } from "expo-router";

import Header from "@/components/Header";
import Highlight from "@/components/Highlight";
import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

export default function NewGroup() {
  const router = useRouter();

  const [group, setGroup] = useState("");

  function handleNewGroup() {
    router.navigate({
      pathname: "/players",
      params: { group },
    });
  }

  return (
    <S.Container>
      <Header showBackButton />

      <S.Content>
        <S.Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          onChangeText={setGroup}
          value={group}
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  );
}
