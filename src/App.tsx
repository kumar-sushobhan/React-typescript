import "./App.css";
import HookEffect from "./components/hooks/HookEffect";
import HookRef from "./components/hooks/HookRef";
import HookState from "./components/hooks/HookState";
import UserSearch from "./components/refs/UserSearch";

function App() {
  return (
    <>
      <UserSearch />
      <HookState />
      <HookEffect />
      <HookRef />
    </>
  );
}

export default App;
