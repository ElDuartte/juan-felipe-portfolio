import "../styles/Posts.scss";
import CodeBlock from "../components/CodeBlock";
import Navbar from "../components/Navbar";


function Posts() {
  const jsCode = `function greet(name) {
    console.log(\`Hello, \${name}\`);
  }`;

  const pyCode = `def greet(name):
      print(f"Hello, {name}")`;

  return (
    <>
      <Navbar />
      <div className="App">
        <h1>Post</h1>

        <h2>JavaScript Example</h2>
        <CodeBlock language="javascript" code={jsCode} />

        <h2>Python Example</h2>
        <CodeBlock language="python" code={pyCode} />
      </div>
    </>
  );
}

export default Posts;
