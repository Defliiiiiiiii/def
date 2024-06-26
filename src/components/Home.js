// src/components/Home.js
import React from "react";

const Home = () => {
  const blogPosts = [
    {
      title: "First Blog Post: HTML Tutorial",
      content: `
                <h2>Introduction to HTML</h2>
                <p>HTML (HyperText Markup Language) is the standard language for creating web pages. It describes the structure of a webpage using markup.</p>
                
                <h3>Basic Structure of an HTML Document</h3>
                <pre><code>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;Document&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;h1&gt;This is a Heading&lt;/h1&gt;
                    &lt;p&gt;This is a paragraph.&lt;/p&gt;
                &lt;/body&gt;
                &lt;/html&gt;
                </code></pre>
                
                <h3>Common HTML Elements</h3>
                <p>Here are some common HTML elements:</p>
                <ul>
                    <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Headings</li>
                    <li><strong>&lt;p&gt;:</strong> Paragraph</li>
                    <li><strong>&lt;a&gt;:</strong> Anchor (link)</li>
                    <li><strong>&lt;img&gt;:</strong> Image</li>
                    <li><strong>&lt;div&gt;:</strong> Division or section</li>
                    <li><strong>&lt;span&gt;:</strong> Inline container</li>
                </ul>
                
                <h3>Example of a Simple HTML Page</h3>
                <pre><code>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;Simple HTML Page&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;header&gt;
                        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
                        &lt;nav&gt;
                            &lt;a href="#home"&gt;Home&lt;/a&gt;
                            &lt;a href="#about"&gt;About&lt;/a&gt;
                            &lt;a href="#contact"&gt;Contact&lt;/a&gt;
                        &lt;/nav&gt;
                    &lt;/header&gt;
                    &lt;main&gt;
                        &lt;section id="home"&gt;
                            &lt;h2&gt;Home&lt;/h2&gt;
                            &lt;p&gt;This is the home section.&lt;/p&gt;
                        &lt;/section&gt;
                        &lt;section id="about"&gt;
                            &lt;h2&gt;About&lt;/h2&gt;
                            &lt;p&gt;This is the about section.&lt;/p&gt;
                        &lt;/section&gt;
                        &lt;section id="contact"&gt;
                            &lt;h2&gt;Contact&lt;/h2&gt;
                            &lt;p&gt;This is the contact section.&lt;/p&gt;
                        &lt;/section&gt;
                    &lt;/main&gt;
                    &lt;footer&gt;
                        &lt;p&gt;&amp;copy; 2024 My Website&lt;/p&gt;
                    &lt;/footer&gt;
                &lt;/body&gt;
                &lt;/html&gt;
                </code></pre>
            `,
    },
    {
      title: "Second Blog Post: CSS Tutorial",
      content: `
                <h2>Introduction to CSS</h2>
                <p>CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML.</p>
                
                <h3>Basic Syntax of CSS</h3>
                <p>A CSS rule consists of a selector and a declaration block:</p>
                <pre><code>
                selector {
                    property: value;
                }
                </code></pre>
                
                <h3>Selectors</h3>
                <p>Selectors are used to target the HTML elements you want to style. Common types of selectors include:</p>
                <ul>
                    <li><strong>Element Selector:</strong> Targets HTML elements by name. E.g., <code>p { color: red; }</code></li>
                    <li><strong>Class Selector:</strong> Targets elements with a specific class attribute. E.g., <code>.my-class { color: blue; }</code></li>
                    <li><strong>ID Selector:</strong> Targets an element with a specific id attribute. E.g., <code>#my-id { color: green; }</code></li>
                </ul>
                
                <h3>Example of a Simple CSS File</h3>
                <pre><code>
                /* styles.css */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }

                header {
                    background-color: #333;
                    color: white;
                    padding: 1em 0;
                    text-align: center;
                }

                h1 {
                    margin: 0;
                }

                nav a {
                    color: white;
                    text-decoration: none;
                    margin: 0 1em;
                }

                nav a:hover {
                    text-decoration: underline;
                }

                .container {
                    padding: 2em;
                }
                </code></pre>
                
                <h3>Linking CSS to HTML</h3>
                <p>To link a CSS file to an HTML file, use the <code>&lt;link&gt;</code> element within the <code>&lt;head&gt;</code> section:</p>
                <pre><code>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;CSS Tutorial&lt;/title&gt;
                    &lt;link rel="stylesheet" href="styles.css"&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;header&gt;
                        &lt;h1&gt;Welcome to My Website&lt;/h1&gt;
                        &lt;nav&gt;
                            &lt;a href="#home"&gt;Home&lt;/a&gt;
                            &lt;a href="#about"&gt;About&lt;/a&gt;
                            &lt;a href="#contact"&gt;Contact&lt;/a&gt;
                        &lt;/nav&gt;
                    &lt;/header&gt;
                    &lt;main&gt;
                        &lt;div class="container"&gt;
                            &lt;p&gt;This is the home section.&lt;/p&gt;
                        &lt;/div&gt;
                    &lt;/main&gt;
                &lt;/body&gt;
                &lt;/html&gt;
                </code></pre>
            `,
    },
    {
      title: "Third Blog Post: JavaScript Tutorial",
      content: `
                <h2>Introduction to JavaScript</h2>
                <p>JavaScript is a versatile programming language that allows you to create dynamic and interactive content on websites. It is a core technology of the web, along with HTML and CSS.</p>
                
                <h3>Basic Syntax of JavaScript</h3>
                <p>Here are some basic concepts and syntax of JavaScript:</p>
                
                <h4>Variables</h4>
                <pre><code>
                // Using var
                var name = 'John Doe';

                // Using let
                let age = 30;

                // Using const
                const isStudent = true;
                </code></pre>
                
                <h4>Functions</h4>
                <pre><code>
                // Function Declaration
                function greet() {
                    console.log('Hello, World!');
                }

                // Function Expression
                const sayHello = function() {
                    console.log('Hello, World!');
                };

                // Arrow Function
                const greetUser = () => {
                    console.log('Hello, User!');
                };
                </code></pre>
                
                <h4>Control Structures</h4>
                <pre><code>
                // If-Else Statement
                let number = 10;
                if (number > 0) {
                    console.log('Positive Number');
                } else {
                    console.log('Negative Number');
                }

                // For Loop
                for (let i = 0; i < 5; i++) {
                    console.log(i);
                }

                // While Loop
                let i = 0;
                while (i < 5) {
                    console.log(i);
                    i++;
                }
                </code></pre>
                
                <h4>DOM Manipulation</h4>
                <p>JavaScript can be used to manipulate the Document Object Model (DOM) to dynamically change the content of a webpage:</p>
                <pre><code>
                // Select an element
                const heading = document.querySelector('h1');

                // Change the text content
                heading.textContent = 'Hello, JavaScript!';

                // Add a new element
                const newParagraph = document.createElement('p');
                newParagraph.textContent = 'This is a new paragraph.';
                document.body.appendChild(newParagraph);
                </code></pre>
                
                <h3>Example of a Simple JavaScript File</h3>
                <pre><code>
                /* script.js */
                document.addEventListener('DOMContentLoaded', () => {
                    const button = document.querySelector('button');
                    button.addEventListener('click', () => {
                        alert('Button clicked!');
                    });
                });
                </code></pre>
                
                <h4>Linking JavaScript to HTML</h4>
                <p>To link a JavaScript file to an HTML file, use the <code>&lt;script&gt;</code> element before the closing <code>&lt;/body&gt;</code> tag:</p>
                <pre><code>
                &lt;!DOCTYPE html&gt;
                &lt;html lang="en"&gt;
                &lt;head&gt;
                    &lt;meta charset="UTF-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    &lt;title&gt;JavaScript Tutorial&lt;/title&gt;
                &lt;/head&gt;
                &lt;body&gt;
                    &lt;h1&gt;JavaScript Example&lt;/h1&gt;
                    &lt;button&gt;Click Me&lt;/button&gt;

                    &lt;script src="script.js"&gt;&lt;/script&gt;
                &lt;/body&gt;
                &lt;/html&gt;
                </code></pre>
            `,
    },
  ];

  return (
    <section className="blog">
      <h2>Blog Posts</h2>
      {blogPosts.map((post, index) => (
        <div key={index} className="post">
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </section>
  );
};

export default Home;
