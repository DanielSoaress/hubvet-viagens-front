/*import { router } from '../config';*/
import Inicio from '../pages/Inicio/Inicio';
import Listagem from '../pages/Listagem/Listagem';
import Final from '../pages/Final/Final';


const routes = [
   /********************************************************
     * INICIO
     ********************************************************/
    {
      path: '/',
      name: `Inicio`,
      component: Inicio
    },
    {
      path: '/viagens',
      name: `Viagens`,
      component: Listagem
    },
    {
      path: '/final',
      name: `Final`,
      component: Final
    },    
  
];

export default routes;