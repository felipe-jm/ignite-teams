import { FlatList, SafeAreaView } from "react-native";

import Header from "@/components/Header";
import Highlight from "@/components/Highlight";
import Button from "@/components/Button";
import PlayerCard from "@/components/PlayerCard";
import { EmptyList } from "@/components/EmptyList";
import ButtonIcon from "@/components/ButtonIcon";
import Input from "@/components/Input";

import * as S from "./styles";

export default function Players() {
  return (
    <S.Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Header showBackButton />

        <Highlight
          title="Nome da turma"
          subtitle="adicione a galera e separe os times"
        />

        <S.Form>
          <Input placeholder="Nome da pessoa" autoCorrect={false} />
          <ButtonIcon icon="add" type="PRIMARY" />
        </S.Form>

        <FlatList
          data={[]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <PlayerCard name={item} onRemove={() => {}} />
          )}
          ListEmptyComponent={<EmptyList message="Nenhum jogador adicionado" />}
        />

        <Button title="Remover turma" type="SECONDARY" />
      </SafeAreaView>
    </S.Container>
  );
}
