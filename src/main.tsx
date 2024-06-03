import ReactDOM from 'react-dom/client';
import App from './App';
import APIInfoProvider from './context/APIInfoProvider';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <APIInfoProvider>
      <App />
    </APIInfoProvider>,
  );
