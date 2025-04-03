import { useState } from "react";
import { Alert } from "react-native";

import { useRouter } from "expo-router";

import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import * as S from "./styles";

import { createGroup } from "@/storage/group/create";

import { AppError } from "@/utils/app-error";

export default function NewGroup() {
  const router = useRouter();

  const [group, setGroup] = useState("");

  async function handleNewGroup() {
    try {
      if (group.trim().length === 0) {
        throw new AppError("Nome do grupo não pode ser vazio.");
      }

      await createGroup(group);

      router.navigate({
        pathname: "/players",
        params: { group },
      });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
      }
    }
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
