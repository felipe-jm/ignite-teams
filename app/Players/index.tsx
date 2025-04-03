import { useState } from "react";
import { FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Header from "@/components/Header";
import Highlight from "@/components/Highlight";
import Button from "@/components/Button";
import { EmptyList } from "@/components/EmptyList";
import ButtonIcon from "@/components/ButtonIcon";
import Input from "@/components/Input";
import Filter from "@/components/Filter";
import PlayerCard from "@/components/PlayerCard";

import * as S from "./styles";

export default function Players() {
  const { group } = useLocalSearchParams<{ group: string }>();

  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<string[]>([
    "Felipe",
    "Luís",
    "Will",
    "Arthur",
  ]);

  const numberOfPlayers = players.length;

  const emptyList = numberOfPlayers === 0;

  function handlePlayerRemove(name: string) {
    setPlayers((prevState) => prevState.filter((player) => player !== name));
  }

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" type="PRIMARY" />
      </S.Form>

      <S.HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
          ListEmptyComponent={<EmptyList message="Nenhum jogador adicionado" />}
        />

        <S.NumberOfPlayers>{numberOfPlayers}</S.NumberOfPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => handlePlayerRemove(item)} />
        )}
        ListEmptyComponent={<EmptyList message="Não há pessoas nesse time" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          emptyList && { flex: 1 },
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </S.Container>
  );
}
