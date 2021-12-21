import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.css';
import {StoreProvider} from './store';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
