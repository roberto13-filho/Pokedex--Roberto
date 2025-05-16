
/**
Pokedex-Roberto: App.jsx
Data de criação: 15/05/2025
Autor: José Roberto
Matrícula: 1741383

Descrição:
Este componente React implementa um painel de cartas do Pokémon TCG.
Funcionalidades:
Campo de busca por código de cartão
Exibição específica do cartão pesquisado
Persistência e exibição de cartas salvas no localStorage
Estilização com Bootstrap
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)