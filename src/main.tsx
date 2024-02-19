import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/*
المعنى من هذا توقيف خاصية طلب البيانات بمجرد التنقل بين المواقع مثلا اذا ذهبت الى موقع ثم عدت اخر فانه سوف يرسل طلب بشكل مباشر 
{
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}
*/
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
