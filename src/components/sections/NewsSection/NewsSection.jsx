import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import NewsCard from "./../../NewsCard";
import PropTypes from "prop-types";
//import { Test } from './NewsSection.styles';

const newsList = [
  {
    id: "news1",
    date: "24.02.20",
    title: "Super news",
    text:
      "Quisque vestibulum enim ipsum, sagittis semper magna eleifend ut. Praesent ut arcu metus. Cras aliquam sem a ultricies elementum. Vestibulum vel est nibh. Maecenas turpis massa, fringilla id ante ",
    src:
      "https://previews.123rf.com/images/maxkabakov/maxkabakov1206/maxkabakov120600219/14225140-newspaper-on-white-background-3d-render.jpg",
    url: "url",
  },
  {
    id: "news2",
    date: "21.02.20",
    title: "Super news",
    text:
      "Quisque vestibulum enim ipsum, sagittis semper magna eleifend ut. Praesent ut arcu metus. Cras aliquam sem a ultricies elementum. Vestibulum vel est nibh. Maecenas turpis massa, fringilla id ante ",
    src:
      "https://previews.123rf.com/images/maxkabakov/maxkabakov1206/maxkabakov120600219/14225140-newspaper-on-white-background-3d-render.jpg",
    url: "url",
  },
  {
    id: "news3",
    date: "25.02.20",
    title: "Super news",
    text:
      "Quisque vestibulum enim ipsum, sagittis semper magna eleifend ut. Praesent ut arcu metus. Cras aliquam sem a ultricies elementum. Vestibulum vel est nibh. Maecenas turpis massa, fringilla id ante ",
    src:
      "https://previews.123rf.com/images/maxkabakov/maxkabakov1206/maxkabakov120600219/14225140-newspaper-on-white-background-3d-render.jpg",
    url: "url",
  },
];

const NewsSection = (props) => (
  <section className="section-block news-section">
    <div className="container">
      <div className="title-default">Новини</div>

      <CardDeck>
        {newsList.map((news) => (
          <NewsCard key={news.id} {...news} />
        ))}
      </CardDeck>
    </div>
  </section>
);

NewsSection.propTypes = {
  // bla: PropTypes.string,
};

NewsSection.defaultProps = {
  // bla: 'test',
};

export default NewsSection;
