
#### Criando projeto
``` criar e selecionar React js ou ts
npm create vite@latest aula-01
```

* Selecionar React Js ou TS

#### Icons
```
npm i react-bootstrap-icons
```

```
npm i bootstrap
```

#### Instalando o Tawildo e configurando

* 1. postCss autoprefixer
```
npm install -D tailwindcss postcss autoprefixer
```

* 2. TailwindCSS init
```
npx tailwindcss init -p
```

* 3. Configurando --> tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

* 4. Adicionando styles Tailwind --> src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Modal
```
https://www.youtube.com/watch?v=lIPhz8SlwAg
```