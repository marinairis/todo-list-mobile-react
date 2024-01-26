# Todo List React Native CRUD App

Este repositório contém um aplicativo CRUD desenvolvido em React Native para gerenciar uma lista de tarefas. As principais operações incluem adicionar, visualizar, atualizar e excluir tarefas.

## Funcionalidades Principais

- Adicionar novas tarefas.
- Visualizar lista de tarefas existentes.
- Atualizar informações de tarefas.
- Excluir tarefas.

## Tecnologias Utilizadas

- React Native
- JavaScript

## Instruções de Uso

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Execute o aplicativo com `npx react-native run-android` ou `npx react-native run-ios` ou `npx expo rrstart` (e siga as instruções no terminal).

## Exemplo de Código

- Gerador de uuid ( Universally Unique Identifier ) das tasks.

```javascript
const generateUniqueId = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};
```

## Demonstração

<div align="center">
  <img src="src/assets/todoList.gif" alt="Todo List Demo" />
</div>
