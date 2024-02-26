

## Tecnologias usadas
 - [Node LTS](https://nodejs.org/)
 - [vite](https://vitejs.dev/guide/)

> [!IMPORTANT]
> #### Para rodar na sua máquina siga essas instruções::
> - [instruções](./CONTRIBUINDO.md)

### Estrutura do projeto:
- `./src/api` : Essa pasta é onde ficam as **functions** com __URL__ e __OPTIONS__ para fazer o fetch com o backend.

- `./src/components` : são todos os components primordiais para a interface da aplicação
   - > Estrutura de pastas do Componente:
     
     <img src="https://imgur.com/Dv2RNRP.png">
     
- `./src/useHooks` : Você encontrará todos os CUSTOM hooks, tais como: **useFetch, useContext** e outros.
   - **useFetch** : é um custom hooks especial para comunicação com a API do backend, ela retorna um objeto:
  > - __request, data, loading e o error.__
  
   - **useContext** : Segundo custom hook especial para interação com os dados do usuário, ele retorna um objeto:
  > - __data, loading, login, error e logout.__

- `./assets` : É onde ficam todas as imagens do site, desde favIcon a background, logos e icons.
 
 __Estas são as principais estruturas do projeto__
