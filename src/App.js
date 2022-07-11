import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary 📚</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="book" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Nahid S and{" "}
            <a
              href="https://github.com/nahidshiddo/dictionary-react"
              target="_blank"
              rel="noreferrer"
            >
              open-source on Github.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
