# Nearby App

O **Nearby App** é um aplicativo mobile que conecta usuários a estabelecimentos próximos, oferecendo cupons de vantagens para serem utilizados em diferentes categorias, como alimentação, compras, hospedagem, cinema e padarias.

## Funcionalidades

- **Explorar Categorias**: Navegue por categorias de estabelecimentos.
- **Mapa Interativo**: Veja os locais próximos no mapa.
- **Cupons de Vantagem**: Resgate cupons exclusivos para usar nos estabelecimentos.
- **QR Code**: Ative cupons diretamente no local usando QR Code.
- **Detalhes do Estabelecimento**: Veja informações detalhadas, como endereço, telefone e regulamento.

## Tecnologias Utilizadas

### Mobile
- **React Native** com **Expo**
- **TypeScript**
- **React Navigation**
- **React Native Maps**
- **Axios** para consumo de API
- **@tabler/icons-react-native** para ícones
- **@gorhom/bottom-sheet** para componentes de UI

### Backend
- **Node.js** com **Express**
- **Prisma** como ORM
- **SQLite** como banco de dados
- **Zod** para validação de dados

## Estrutura do Projeto

### Mobile
- `src/app`: Páginas do aplicativo.
- `src/components`: Componentes reutilizáveis, como botões, listas e estilos.
- `src/services`: Configuração de API.
- `src/styles`: Temas e estilos globais.
- `src/utils`: Utilitários, como mapeamento de ícones.

### Backend
- `src/controllers`: Lógica dos endpoints.
- `src/routes`: Rotas da API.
- `src/database`: Configuração do Prisma.
- `prisma/schema.prisma`: Definição do banco de dados.

## Como Executar

### Pré-requisitos
- Node.js
- Expo CLI
- SQLite

### Passos para Execução
1. Configure o IP da sua máquina no arquivo `.env` localizado em `mobile/.env`:
   ```
   IP_ADRESS=SEU_IP_LOCAL
   ```
   Substitua `SEU_IP_LOCAL` pelo IP da sua máquina.

2. Instale as dependências do projeto:
   ```bash
   npm run install:backend
   npm run install:mobile
   ```

3. Inicie o projeto:
   ```bash
   npm start
   ```
   Este comando iniciará o servidor do backend e o aplicativo mobile automaticamente.

## Scripts

### Instalar Dependências

Para instalar todas as dependências do projeto, execute:

```bash
npm run install:all
```

### Iniciar os Projetos

Para iniciar o backend e o mobile simultaneamente, execute:

```bash
npm run dev
```

### Scripts Individuais

- **Instalar dependências do backend**:  
  ```bash
  npm run install:backend
  ```

- **Instalar dependências do mobile**:  
  ```bash
  npm run install:mobile
  ```

- **Iniciar o backend**:  
  ```bash
  npm run apps:backend
  ```

- **Iniciar o mobile**:  
  ```bash
  npm run apps:mobile
  ```

## Endpoints da API

### Categorias
- `GET /categories`: Lista todas as categorias.

### Estabelecimentos
- `GET /markets/category/:category_id`: Lista estabelecimentos por categoria.
- `GET /markets/:id`: Detalhes de um estabelecimento.

### Cupons
- `PATCH /coupons/:market_id`: Resgata um cupom para o estabelecimento.

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das alterações:
   ```bash
   git commit -m "Minha nova feature"
   ```
4. Envie para o repositório remoto:
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.

