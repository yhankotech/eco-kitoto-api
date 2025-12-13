# 🌱 Eco Kitoto API

## 📌 Descrição do Projeto

**Eco Kitoto** é uma plataforma inteligente para **gestão comunitária de limpeza e higienização urbana em Angola**, utilizando **Inteligência Artificial**, geolocalização e engajamento social. O objetivo é apoiar comunidades, voluntários e autoridades na identificação, monitorização e resolução de zonas críticas de lixo, promovendo cidades mais limpas, saudáveis e sustentáveis.

A API é responsável por toda a lógica de negócio, persistência de dados, integração com serviços externos (mapas, IA, notificações) e comunicação com aplicações web e mobile.

---

## 🎯 Objetivos Principais

* Identificar áreas críticas de lixo com apoio de IA
* Engajar voluntários por meio de gamificação
* Facilitar ações comunitárias de limpeza
* Gerar dados e relatórios de impacto ambiental
* Apoiar decisões de políticas públicas

---

## 🧩 Requisitos Funcionais

* **RF01** – Cadastro de usuários, voluntários e administradores
* **RF02** – Associação do usuário a uma localidade (província, município, distrito ou bairro)
* **RF03** – Registro de áreas críticas com geolocalização e fotos
* **RF04** – Análise de imagens e dados geoespaciais por IA
* **RF05** – Mapa interativo em tempo real com zonas críticas
* **RF06** – Agendamento de eventos e mutirões de limpeza
* **RF07** – Notificações para voluntários da localidade
* **RF08** – Assistente inteligente com dicas de limpeza e higienização
* **RF09** – Relatórios de impacto ambiental e engajamento
* **RF10** – Upload de fotos (antes e depois)
* **RF11** – Sistema de pontuação e ranking
* **RF12** – Compartilhamento em redes sociais

---

## ⚙️ Requisitos Não Funcionais

* **RNF01** – Acesso via Web e Mobile (Android e iOS)
* **RNF02** – Segurança e privacidade dos dados
* **RNF03** – Suporte a alto volume de acessos
* **RNF04** – Interface amigável e responsiva
* **RNF05** – Tempo de resposta ≤ 3 segundos
* **RNF06** – Multilíngue (PT / EN)
* **RNF07** – Integração com Google Maps ou OpenStreetMap
* **RNF08** – IA treinada com dados locais de Angola
* **RNF09** – Banco relacional com backup automático
* **RNF10** – Compatível com dispositivos de baixa capacidade

---

## 📜 Regras de Negócio

* **RN01** – Usuário vinculado a apenas uma localidade
* **RN02** – Apenas administradores aprovam áreas críticas e eventos
* **RN03** – Voluntários participam apenas em localidades próximas
* **RN04** – Pontuação baseada em frequência e provas fotográficas
* **RN05** – Área crítica apenas se > 60% de lixo detectado pela IA
* **RN06** – Atualização do mapa a cada 24 horas
* **RN07** – Usuários inativos (>6 meses) recebem notificação
* **RN08** – Dados usados apenas para fins ambientais e estatísticos

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** – Runtime JavaScript
* **TypeScript** – Tipagem estática
* **Express** – Framework HTTP
* **Prisma ORM** – Acesso ao banco de dados
* **PostgreSQL** – Banco de dados relacional
* **Vitest** – Testes automatizados
* **Docker & Docker Compose** – Infraestrutura e ambientes
* **JWT** – Autenticação
* **Zod** – Validação de dados
* **IA / Computer Vision** – Análise de imagens (futuro módulo)

## 🚀 Como Rodar o Projeto Localmente

### 1️⃣ Pré-requisitos

* Node.js >= 18
* Docker e Docker Compose
* Git

---

### 2️⃣ Clonar o Repositório

```bash
git clone https://github.com/yhankotech/eco-kitoto-api.git
cd eco-kitoto-api
```

---

### 3️⃣ Instalar Dependências

```bash
npm install
```

---

### 4️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env`:

```env
NODE_ENV=dev
API_PORT=3333
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ecokitoto
JWT_SECRET=supersecret
```

---

### 5️⃣ Subir o Banco de Dados com Docker

```bash
docker-compose up -d
```

---

### 6️⃣ Rodar Migrations

```bash
npx prisma migrate dev
```

---

### 7️⃣ Iniciar o Servidor

```bash
npm run dev
```

A API estará disponível em:

```
http://localhost:3333
```

---

## 🧪 Executar Testes

```bash
npm run test
```

---

## 📦 Scripts Disponíveis

```json
{
  "dev": "tsx watch src/bootstrap/server.ts",
  "build": "tsc",
  "start": "node dist/bootstrap/server.js",
  "test": "vitest"
}
```

---

## 🔐 Segurança

* Autenticação com JWT
* Validação de dados com Zod
* Controle de acesso por perfil (user, volunteer, admin)

---

## 🌍 Futuras Integrações

* Aplicação Mobile (React Native / Flutter)
* Módulo de IA para análise automática de imagens
* Integração com serviços governamentais
* Notificações Push e SMS

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`feature/nova-funcionalidade`)
3. Commit suas alterações
4. Abra um Pull Request

---

## 📄 Licença

Este projeto é licenciado sob a licença **MIT**.

---

## 👨🏽‍💻 Autor

Desenvolvido por **YhankoTech**
Tecnologia a favor do meio ambiente e das comunidades.