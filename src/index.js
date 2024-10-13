import React from 'react';
import ReactDOM from 'react-dom/client';
import a from './assets/images/blush.avif';
import { default as b, default as h } from './assets/images/eyeliner.jpg';
import c from './assets/images/eyeshawdow.avif';
import d from './assets/images/kajal.png';
import e from './assets/images/lipstick.jpg';
import f from './assets/images/nailpolish.avif';
import g from './assets/images/sugar.jpg';

import './style.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div class="beauty">
        <div class="beauty__s1">
            <h1>Makeup Products</h1>
            <hr class="line"></hr>
           
        </div>
        <div class="img">
            <img src={a} alt="Lipstick"></img>
            <img src={b} alt="Eyeliner"></img>
            <img src={c} alt="Eyeshadow"></img>
            <img src={d} alt="Blush"></img>
            <img src={e} alt="Kajal"></img>
            <img src={f}alt="Lipstick"></img>
            <img src={g} alt="Nail Polish"></img>
            <img src={h} alt="Sugar"></img>
        </div>
    </div>
    </>

 
);


