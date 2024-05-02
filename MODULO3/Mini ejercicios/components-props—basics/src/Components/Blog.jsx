import { Article } from "./Article";
import "./Blog.css";

/**Este componente Blog es responsable de la representación y renderización del contenido
 * completo del blog, y usa el componente Article para cada entrada individual del blog.
 */

export const Blog = () => {
  // Datos de ejemplo para las entradas del blog
  const blogEntries = [
    //array con datos de ejemplo de las entradas del blog
    {
      title: "Entrada 1",
      subTitle: "Subtítulo de la entrada 1",
      imageUrl: "/public/O.png",
      paragraph: "Contenido de la entrada 1...",
    },
    {
      title: "Entrada 2",
      subTitle: "Subtítulo de la entrada 2",
      imageUrl: "/public/X.png",
      paragraph: "Contenido de la entrada 2...",
    },
    // Agrega más entradas del blog según sea necesario
  ];

  return (
    <div>
      {blogEntries.map((entry, index) => (
        /**Uso el método map para iterar sobre el array blogEntries y renderizar un componente
         * Article para cada entrada del blog.
         * Se pasa cada entrada del blog como props al componente Article.
         */
        <Article
          key={index}
          title={entry.title}
          subTitle={entry.subTitle}
          imageUrl={entry.imageUrl}
          paragraph={entry.paragraph}
        />
        /**Asigno una clave única a cada componente Article usando el índex del array como
         *  clave (key={index}) para ayudar a React a identificar cada componente de manera
         *  única y optimizar la renderización.
         */
      ))}
    </div>
  );
};

export default Blog;
