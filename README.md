# Ignite Teams

Uma aplicação mobile para gerenciamento de times e grupos de jogos, desenvolvida com React Native e Expo.

## 📱 Sobre o projeto

Ignite Teams é uma aplicação que permite criar e gerenciar equipes para jogos, organizando jogadores por turmas. Com esta aplicação, você pode:

- Criar novas turmas/grupos
- Listar todas as turmas cadastradas
- Acessar detalhes de cada turma
- Adicionar jogadores às turmas

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Styled Components](https://styled-components.com/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/en/) (recomendado v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
- Emulador Android/iOS ou dispositivo físico

## 🔧 Instalação e execução

1. Clone o repositório

```bash
git clone [url-do-repositorio]
```

2. Acesse a pasta do projeto

```bash
cd ignite-teams
```

3. Instale as dependências

```bash
npm install
# ou
yarn install
```

4. Execute o projeto

```bash
npx expo
```

5. Após iniciar, você pode:
   - Pressionar `a` para abrir no emulador Android
   - Pressionar `i` para abrir no emulador iOS
   - Escanear o QR Code com o aplicativo Expo Go no seu dispositivo físico

## 📱 Executando em Dispositivos Específicos

Para executar diretamente em um dispositivo específico:

```bash
# Android
npm run android
# ou
yarn android

# iOS
npm run ios
# ou
yarn ios
```

## 📚 Estrutura do Projeto

```
ignite-teams/
├── app/                   # Rotas e páginas da aplicação
│   ├── groups/            # Tela de listagem de grupos
│   ├── new-group/         # Tela de criação de novo grupo
│   ├── players/           # Tela de gerenciamento de jogadores
│   └── _layout.tsx        # Layout comum da aplicação
├── components/            # Componentes reutilizáveis
├── storage/               # Lógica de armazenamento local
├── theme/                 # Configuração de temas e estilos
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido durante o MBA de React Native da Rocketseat
