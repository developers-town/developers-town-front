import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core'

import { 
  faArrowCircleLeft, 
  faArrowCircleRight, 
  faAngleDoubleDown, 
  faChevronCircleRight, 
  faChevronCircleLeft, 
  faEnvelope, 
  faMapMarkedAlt, 
  faGlobeAsia, 
  faAngleDown,
  faQuoteLeft,
  faQuoteRight,
  faWindowMaximize,
  faMobileAlt,
  faPencilRuler,
  faWindowRestore,
  faPenNib
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
  fab, 
  faArrowCircleLeft, 
  faArrowCircleRight, 
  faAngleDoubleDown, 
  faChevronCircleRight, 
  faChevronCircleLeft, 
  faEnvelope, 
  faMapMarkedAlt, 
  faGlobeAsia, 
  faAngleDown,
  faQuoteLeft,
  faQuoteRight,
  faWindowMaximize,
  faMobileAlt,
  faPencilRuler,
  faWindowRestore,
  faPenNib,
)

ReactDOM.render(<App />, document.getElementById('root'));
