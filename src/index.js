import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import logo from './lib/media/logo.SS.png'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <header>
        <nav>
          <a href="/" class="logo desktop-only left-aligned">
            <img src={logo} alt="book" class="img-nav" >
            </img>
          </a>
          <input type="checkbox" id="menu-toggle" />
          <ul class="sidebar-row">

            <div class="nav-item">
              <a href="/">
                <p class="purpled">Home</p>
              </a>
            </div>

            <div class="nav-item">
              <a href="/contact">
                <p class="purpled">Contact</p>
              </a>
            </div>


            <div class="nav-item">
              <a href="/about">
                <p class="purpled">About</p>
              </a>
            </div>

          </ul>
        </nav>
      </header>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
