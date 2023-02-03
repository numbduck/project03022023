
import { UsersProvider } from './userContext';
import {User} from '../src/component/user';

function App() {
  return (<UsersProvider>
    <User></User>
    </UsersProvider>
  );
}

export default App;
