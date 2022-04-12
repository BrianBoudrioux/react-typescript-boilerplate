import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme/theme.css';
import { Provider } from 'react-redux';
import store from './store';
import { login, logout } from './store/user.reducer';
import { userServices } from './services';


  const isAuth = async () => {        
        try {
            const response = await userServices.isAuth();
            store.dispatch(login(response.data));
        } catch (error: any) {
            store.dispatch(logout());
        }
  }

(async () => {

  await isAuth();

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
  );
  
})();

