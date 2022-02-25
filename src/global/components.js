import {
  Input,
  Autocomplete,
  ToggleButton,
  Button
} from '../components';

const GlobalComponents = {
  install(Vue) {
    Vue.component(Input.name, Input);
    Vue.component(Autocomplete.name, Autocomplete);
    Vue.component(ToggleButton.name, ToggleButton);
    Vue.component(Button.name, Button)
  }
};

export default GlobalComponents;
