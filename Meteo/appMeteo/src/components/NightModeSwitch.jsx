import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNightMode } from '../redux/slices/appSlice';
import './stylesComp/NightModeSwitch.css';


/**
 * Il componente NightModeSwitch è un interruttore che consente agli utenti di
 * passare tra la modalità giorno e la modalità notte. Utilizza Redux per gestire
 * lo stato di nightMode.
 */

function NightModeSwitch() {
    // Ottenere l'istanza del dispatch Redux
    const dispatch = useDispatch();

     // Estrarre lo stato di nightMode dallo store Redux utilizzando useSelector
    const nightMode = useSelector((state) => state.app.nightMode);
  
      /**
     * La funzione handleToggle viene chiamata quando l'interruttore viene cliccato.
     * Dispaccia l'azione toggleNightMode per cambiare lo stato di nightMode.
     */
    const handleToggle = () => {
      dispatch(toggleNightMode());
    };
  
    return (
         // Il contenitore principale dell'interruttore con classi dinamiche basate sullo stato di nightMode
      <div className={`toggle-switch ${nightMode ? 'night-mode' : ''}`} 
      style={{
        position: 'relative',
        top: nightMode ? '50px' : '50px', // Sposta verso il basso solo in modalità giorno
        left: '10vw',
      }}
      onClick={handleToggle}>
        <div className="slider" style={{ transform: `translateX(${nightMode ? '25px' : '0'})` }}></div>
      </div>
    );
  }
  
  export default NightModeSwitch;