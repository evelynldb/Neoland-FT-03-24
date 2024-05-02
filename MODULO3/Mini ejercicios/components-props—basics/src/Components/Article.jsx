/* eslint-disable react/prop-types */
import "./Article.css";

import { SubTitle, Title, Image, Paragraph } from ".";

export const Article = ({ title, subTitle, imageUrl, paragraph }) => {
  return (
    <div className="articleContainer">
      <Title className={"articleTitle"} text={title} />
      <SubTitle className={"articleSubTitle"} text={subTitle} />
      <Image
        className={"articleImage"}
        src={imageUrl}
        alt={title}
        width="100"
        height="100"
      />
      <Paragraph className={"articleParagraph"} text={paragraph} />
    </div>
  );
};
