Resumo das modificações

Arquivos alterados:

- index.html: adicionado o conteúdo do Volume 2 e Volume 3 da Mentoria; inserida a logo do Java no canto superior direito.
- style.css: adicionadas regras de background com halo radial e textura sutil; `.logo-java` ajustada para tamanho maior, estilo circular, hover suave e responsividade; mais espaço foi adicionado ao layout para afastar o conteúdo da logo.
- script.js: mantido e referenciado em `index.html` para persistência do estado dos checkboxes.
- assets/java-logo.svg: imagem da logo do Java salva localmente e usada em `index.html`.

Detalhes:

- Logo local: `assets/java-logo.svg` agora é o recurso de imagem usado, eliminando a dependência externa à internet.
- Tamanho e posicionamento: logo maior (`82px`) com mais espaço do topo (`top: 26px`) e padding direito extra no container para manter o conteúdo afastado.
- Visual do fundo: fundo com gradiente escuro e halo radial no canto superior direito para destacar a logo.
- Conteúdo: Volumes 2 e 3 adicionados como seções/`details` no `index.html`, incluindo módulos, semanas, projetos e checklist.
- Checklists finais: as seções finais do Volume 2 e Volume 3 agora usam checkboxes interativos, cujo estado é salvo pelo `script.js` no `localStorage`.
- Checklist: mantenha `script.js` no mesmo diretório para salvar progresso dos checkboxes via `localStorage`.

Como reverter rapidamente:

- Restaurar os arquivos modificados a partir do controle de versão (git) ou substituir os conteúdos nos arquivos listados.

Data das mudanças: 2026-06-01
