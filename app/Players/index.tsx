import { useState, useCallback, useEffect, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Header } from "@/components/Header";
import { Highlight } from "@/components/Highlight";
import { Button } from "@/components/Button";
import { EmptyList } from "@/components/EmptyList";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { PlayerCard } from "@/components/PlayerCard";

import { addPlayerToGroup } from "@/storage/player/add-to-group";

import { AppError } from "@/utils/app-error";

import { fetchPlayersByGroup } from "@/storage/player/fetch-plays-by-group";
import { fetchPlayersByGroupAndTeam } from "@/storage/player/fetch-plays-by-group-and-team";
import { removePlayerByGroup } from "@/storage/player/remove-by-group";

import { Player } from "@/@types/player";

import * as S from "./styles";

export default function Players() {
  const { group } = useLocalSearchParams<{ group: string }>();

  const playerNameInputRef = useRef<TextInput>(null);

  const [playerName, setPlayerName] = useState("");

  const [team, setTeam] = useState<string>("Time A");
  const [players, setPlayers] = useState<Player[]>([]);

  const numberOfPlayers = players.length;

  const emptyList = numberOfPlayers === 0;

  const fetchPlayers = useCallback(async () => {
    try {
      const players = await fetchPlayersByGroup(group);
      setPlayers(players);
    } catch (error) {
      console.log(error);
      Alert.alert("Novo jogador", "Não foi possível carregar os jogadores.");
    }
  }, [group]);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  const fetchPlayersByTeam = useCallback(async () => {
    try {
      const players = await fetchPlayersByGroupAndTeam(group, team);
      setPlayers(players);
    } catch (error) {
      console.log(error);
      Alert.alert("Novo jogador", "Não foi possível carregar os jogadores.");
    }
  }, [group, team]);

  useEffect(() => {
    fetchPlayersByTeam();
  }, [fetchPlayersByTeam]);

  async function handleAddPlayer() {
    if (playerName.trim().length === 0) {
      return Alert.alert("Novo jogador", "Informe o nome do jogador.");
    }

    try {
      await addPlayerToGroup(group, playerName, team);

      playerNameInputRef.current?.blur();

      setPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo jogador", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo jogador", "Não foi possível adicionar o jogador.");
      }
    }
  }

  async function handleRemovePlayer(player: Player) {
    try {
      await removePlayerByGroup(player.name, group);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover jogador", "Não foi possível remover o jogador.");
    }
  }

  return (
    <S.Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <S.Form>
        <Input
          inputRef={playerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          onChangeText={setPlayerName}
          value={playerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" type="PRIMARY" onPress={handleAddPlayer} />
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item)}
          />
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
