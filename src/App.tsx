import React from "react";
import "./App.scss";
import exampleDiff from "./example.diff";

const removePrefix = (value: string) => {
  return value.split("    ")[1];
};

const isAdded = (value: string) => value.match(/^\+\s/);
const isRemoved = (value: string) => value.match(/^-\s/);
const isAddedOrRemoved = (value: string) => value.match(/^(\+|-)\s/);
const isVersionNumber = (value: string) => value.match(/^(\^|~)?\d/);

const getAdded = (lines: string[]) =>
  lines
    .filter(line => {
      if (!isAdded(line)) return false;

      const key = line.split(":")[0].slice(1);
      return lines.filter(l => l.includes(key)).length === 1;
    })
    .map(removePrefix)
    .sort();

const getRemoved = (lines: string[]) =>
  lines
    .filter(line => {
      if (!isRemoved(line)) return false;

      const key = line.split(":")[0].slice(1);
      return lines.filter(l => l.includes(key)).length === 1;
    })
    .map(removePrefix)
    .sort();

const getUpdated = (lines: string[]) =>
  lines
    .filter(line => {
      if (!isAddedOrRemoved(line)) return false;

      const key = line.split(":")[0].slice(1);
      return lines.filter(l => l.includes(key)).length > 1;
    })
    .filter(line => isAdded(line))
    .map(line => removePrefix(line))
    .sort();

interface Result {
  added: string[];
  removed: string[];
  changed: string[];
}

const ResultTable: React.FC<{ results: string[] }> = ({ results }) => {
  return (
    <table className="table is-bordered is-fullwidth">
      <tbody>
        {results.map((line, idx) => {
          let [key, value] = line.split(":");
          key = key.replace(/"/g, "").trim();
          value = value.replace(/"/g, "").trim();
          if (value.endsWith(",")) value = value.slice(0, -1);

          if (!isVersionNumber(value)) return null;
          return (
            <tr key={idx}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App: React.FC = () => {
  const [diff, setDiff] = React.useState(sessionStorage.getItem("diff") || "");

  const [result, setResult] = React.useState<Result | null>(null);

  const handleDiff = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    sessionStorage.setItem("diff", value);
    setDiff(value);
  };

  const generateDiff = React.useCallback(() => {
    const lines = diff.split("\n");

    const added = getAdded(lines);
    const removed = getRemoved(lines);
    const changed = getUpdated(lines);

    setResult({ added, removed, changed });
  }, [diff]);

  const setExampleDiff = () => {
    // eslint-disable-next-line import/no-webpack-loader-syntax
    setDiff(exampleDiff);
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Dependency differ</h2>
        <p className="content">
          Paste a unified diff of your <code>package.json</code> in the textarea
          or {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a onClick={setExampleDiff}>use an example file</a>.
        </p>
        <div className="field">
          <div className="control">
            <textarea
              rows={15}
              className="textarea"
              placeholder="Unified diff"
              value={diff}
              onChange={handleDiff}
            ></textarea>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button
              disabled={!diff}
              className="button is-primary"
              onClick={generateDiff}
            >
              Go!
            </button>
          </div>
        </div>

        {result && (
          <>
            <h3>{result.removed.length} dependencies removed</h3>
            <ResultTable results={result.removed} />
            <h3>{result.added.length} dependencies added</h3>
            <ResultTable results={result.added} />
            <h3>{result.changed.length} dependencies changed</h3>
            <ResultTable results={result.changed} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
