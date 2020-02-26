# Tipos de teste

## Unit tests (testes unitários)
Testa um pedaço de código (normalmente uma função)

## Integration tests (testes de integração)
Testa a integração de multiplas unidades

## Acceptance (Aceitação) / End-to-end (E2E) tests
Teste o usuário interagindo com a aplicação

## O que testar?
Vamos tomar como exemplo um contador que incrementa no click:

. Setar estado inicial do contador
. Simular o click
. Verificar se o contador foi incrementado

## Objetivos dos testes
1. Fácil manutenção 
. Facilidade de manutenção
. Testar o comportamento ( o que o o app deve fazer), ou seja o resultado.
Pois a implmentação pode mudar mas o resultado deverá ser sempre o mesmo.

**NÃO TESTAR se uma função específica foi cahamda em testes Unitários, porém em testes de integração, pode ser necessário**

2. Fácil diagnóstico
. Para teste de integração por exemplo, pode ser necessário testar o passo a passo ao invés do resultado final, para garantir que o resultado seja o mesmo sempre.

**Para testes de integração, pode ser necessário testar se uma função específica for chamada ou não**


