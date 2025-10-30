# 🕹️ Detona Ralph - Mini-Jogo Web

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)

> Um mini-jogo de navegador simples, inspirado no clássico "Detona Ralph" (Wreck-It Ralph), criado com HTML, CSS e JavaScript puro. O objetivo é testar seus reflexos clicando no Ralph o mais rápido possível antes que o tempo acabe.

---

### ✨ Funcionalidades

*   **Movimento Aleatório:** O Ralph aparece em um dos 9 quadrados de forma aleatória e em intervalos de tempo regulares.
*   **Sistema de Pontuação:** Cada clique correto no Ralph aumenta sua pontuação.
*   **Contador de Tempo:** Cada rodada tem um cronômetro regressivo de 30 segundos, testando sua agilidade.
*   **Sistema de Vidas:** O jogador começa com 3 vidas. Uma vida é perdida a cada vez que o tempo da rodada se esgota.
*   **Efeitos Sonoros:** Feedback sonoro instantâneo a cada acerto.
*   **Jogabilidade Contínua:** Ao final de cada rodada, o jogador pode continuar para a próxima, mantendo suas vidas e zerando o score da rodada.

---

### 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as tecnologias fundamentais do desenvolvimento front-end:

*   **HTML5:** Para a estrutura e marcação do conteúdo.
*   **CSS3:** Para a estilização, layout e design visual.
*   **JavaScript (ES6+):** Para toda a lógica do jogo, interatividade e manipulação do DOM.

---

### 🚀 Como Executar o Projeto Localmente

Para baixar e executar o projeto em sua própria máquina, siga estes passos simples:

**Pré-requisitos:**
*   Um navegador web moderno (Chrome, Firefox, Edge, etc.).
*   Um editor de código como o VS Code (recomendado).

**Passos:**

1.  **Clone o repositório** (ou baixe os arquivos como ZIP).
    ```bash
    git clone https://URL-DO-SEU-REPOSITORIO.git
    ```

2.  **Navegue até a pasta do projeto.**
    ```bash
    cd nome-da-pasta-do-projeto
    ```

3.  **Abra o arquivo `index.html` no seu navegador.**
    *   Você pode simplesmente dar um duplo clique no arquivo `index.html` ou usar uma extensão como a "Live Server" no VS Code para uma melhor experiência de desenvolvimento.

**Importante:** Para que o efeito sonoro funcione corretamente, certifique-se de que a estrutura de arquivos está intacta e que o arquivo de áudio (`hit.m4a`) está localizado em `src/sounds/`.

#### Estrutura de Arquivos Esperada:
```
/seu-projeto
|-- index.html
|-- README.md
|-- /src
    |-- /images
    |   |-- live.png
    |   |-- ralph.png
    |   |-- wall.png
    |-- /scripts
    |   |-- main.js
    |-- /sounds
    |   |-- hit.m4a
    |-- /styles
        |-- main.css
        |-- reset.css
```