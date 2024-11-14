# React + Vite

Este modelo fornece uma configuração mínima para fazer o React funcionar no Vite com HMR e algumas regras do ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Para rodar o projeto:

cd login-app
npm run dev
O Tailwind CSS é utilizado para estilização.

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Se erros de instalação forem encontrados no projeto, tente rodar o seguinte no terminal:

npm install
npm install react-router-dom
npm install --save-dev tailwind-scrollbar

