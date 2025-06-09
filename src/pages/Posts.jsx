import "../styles/Posts.scss";
import { Link } from "react-router-dom";
import CodeBlock from "../components/CodeBlock";

function Posts() {
  const jsCode = `function greet(name) {
    console.log(\`Hello, \${name}\`);
  }`;

  const pyCode = `def greet(name):
      print(f"Hello, {name}")`;

  console.log("hola");

  return (
    <div className="App">
      <h1>Post</h1>
      <Link to="/">go to home</Link>

      <h2>JavaScript Example</h2>
      <CodeBlock language="javascript" code={jsCode} />

      <h2>Python Example</h2>
      <CodeBlock language="python" code={pyCode} />
    </div>
  );
}

export default Posts;
