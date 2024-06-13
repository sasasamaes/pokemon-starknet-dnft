# Proyecto Pokemon Evolution

Este proyecto permite gestionar las evoluciones de los Pokémon utilizando un contrato inteligente en StarkNet (escrito en Cairo) y una interfaz web construida con Next.js.

## Estructura del Proyecto
pokemon_evolution/
├── Scarb.toml
├── src/
│   └── lib.cairo
├── target/
│   └── release/
│       └── pokemon_evolution_abi.json
└── web/
├── components/
│   └── Pokemon.js
├── lib/
│   └── starknet.js
├── pages/
│   └── index.js
├── package.json
└── …

## Requisitos Previos

- Python 3.8 o superior
- Node.js 14 o superior
- Scarb
- pipx (opcional, pero recomendado)
- starknet-devnet
- Entorno virtual de Python

## Instalación

### 1. Configuración del Entorno Cairo con Scarb

#### Instalar Scarb

Sigue las instrucciones en el [repositorio de Scarb](https://github.com/software-mansion/scarb) para instalarlo.

