
value-object é uma forma de abstrair uma regra de negocio de um único campo da nossa
entidade em uma class separada (arquivo)


Partial => vai transforma qual quer propriedade em opcionais
# SLUG
É uma forma de identificar uma informação em especifico pelo navegador, neste caso usa o slug que é uma representação
to titulo da perguntar sem acentos é sem caracteres especiais. Isso é bom para a indexação de não utilizar o id da pergunta
na URL do navegador, quando o usuário for procurar por alguma pergunta.

# CORE
  Esta pasta seve para compartilhar código, que pode ser usados em vários locais da aplicação

# DDD (Domain-driven Design)

Design dirigido á domínio

## Domínio

- Domain Experts
  - Conversa
- Linguagem ubíqua

- Usuário
  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Objects
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

### Conceitos

- Aggregate
  indicar que mais de uma classe vai trabalhar juntas
- Watchedlist

### Exemplo

- Order -> OrderItem[]
- Order -> Shipping

- Question - Attachment[]

### Criação

- Título
- Conteúdo
- Anexos (3)

### Edição

- Título
- Conteúdo

- Adicionar um novo anexo (create)
- REmover o segundo anexo que tinha sido criado previamente (delete)
- Editar um anexo existente (update)

# Subdomínios

- Core: O que dá dinheiro
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa, mas não são tão importantes

## Exemplos

## Core

- Compra
- Catálogo
- Pagamento
- Entrega

## Supporting

- Estoque

### Generic

- Notificação ao cliente
- Promoções
- Chat