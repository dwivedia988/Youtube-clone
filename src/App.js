
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainComponent />,
    },
    {
      path: "watch",
      element: <WatchPage />,
    },
    {
      path: "demo",
      element: (
        <>
          <Demo />
          <Demo2 />
        </>
      ),
    },
  ]
}])

function App() {
  return (
    <Provider store={store} >
      <div>
        <Head/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
