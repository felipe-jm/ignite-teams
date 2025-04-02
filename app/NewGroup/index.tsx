import { SafeAreaView } from "react-native";

import Header from "@/components/Header";
import Highlight from "@/components/Highlight";
import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

export default function NewGroup() {
  return (
    <S.Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header showBackButton />

        <S.Content>
          <S.Icon />

          <Highlight
            title="Nova turma"
            subtitle="crie a turma para adicionar as pessoas"
          />

          <Input placeholder="Nome da turma" />

          <Button title="Criar" style={{ marginTop: 20 }} />
        </S.Content>
      </SafeAreaView>
    </S.Container>
  );
}
