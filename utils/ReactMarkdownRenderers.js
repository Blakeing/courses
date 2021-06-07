/*
 * The react-markdown package is used to render the blog post excerpt markdown field.
 * https://www.npmjs.com/package/react-markdown
 *
 * This function is used to render markdown fields consistently across
 * the application, applying appropriate typography styles and markup.
 *
 */

export default function ReactMarkdownRenderers(markdown) {
  return {
    heading: ({ children }) => <h3>{children}</h3>,
    strong: ({ children }) => <span>{children}</span>,
    paragraph: ({ children }) => <p>{children}</p>,
    link: ({ children, href }) => (
      <a href={href} target="_blank" rel="nofollow noreferrer">
        {children}
      </a>
    ),
  };
}
