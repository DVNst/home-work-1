import Profile from "./components/profile/profile";

function App() {
  document.title = "Урок №1";
  return (
    <div className="App">
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 5, 22)} />
    </div>
  );
}

export default App;
