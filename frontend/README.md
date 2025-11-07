# Catálogo de Bolos

Catálogo de produtos para confeitaria com listagem de bolos, filtros, detalhes dos produtos e carrinho de compras.

## Tecnologias

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.1.9
- TailwindCSS 3.4.14
- React Router DOM 7.9.3
- TanStack Query 5.90.2
- Zustand 5.0.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   ├── providers.tsx      # Provedores globais
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── types/            # Tipos TypeScript globais
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio
│   └── cart/            # Domínio do carrinho
│       └── stores/      # Estado do carrinho
└── pages/               # Páginas da aplicação
    ├── layouts/         # Layouts compartilhados
    ├── Home/           # Página inicial
    ├── Catalog/        # Catálogo de produtos
    ├── ProductDetail/  # Detalhes do produto
    ├── Cart/           # Carrinho de compras
    └── NotFound/       # Página 404
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades

- ✅ Estrutura base da aplicação
- ✅ Roteamento configurado
- ✅ Layout com header e footer
- ✅ Estado do carrinho com persistência
- ⏳ Listagem de produtos (em desenvolvimento)
- ⏳ Filtros de produtos (em desenvolvimento)
- ⏳ Detalhes do produto (em desenvolvimento)
- ⏳ Sistema de avaliações (em desenvolvimento)
- ⏳ Visualização de fotos (em desenvolvimento)
- ⏳ Dados mockados (em desenvolvimento)

## Próximos Passos

1. Implementar dados mockados de produtos
2. Criar componentes de listagem de produtos
3. Adicionar sistema de filtros
4. Implementar página de detalhes
5. Adicionar sistema de avaliações
6. Implementar galeria de fotos
7. Finalizar funcionalidades do carrinho