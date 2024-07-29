import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 1,
    name: "VILLAGE-STUDY-TRACKER",
    image: ImageOne,
    link: "https://github.com/im-Arihant-jain/vilage-studymanager",
  },
  {
    id: 2,
    name: "ADVANCE EXPENSE MANAGER",
    link: "https://github.com/im-Arihant-jain/tracker",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "ONLINE COMPILER",
    image: ImageThree,
    link: "https://github.com/im-Arihant-jain/decode-editor",
  },
  {
    id: 4,
    name: "CUSTOMISED MEME GENERATOR",
    image: ImageFour,

    link: "https://github.com/im-Arihant-jain/memegen",
  },
  {
    id: 5,
    name: "PORTFOLIO",
    image: ImageFive,
    link: "",
  },
  {
    id: 6,
    name: "NOTES AND TODO-LIST APP",
    image: ImageOne,
    link: "https://github.com/im-Arihant-jain/note_todo",
  },
  {
    id: 7,
    name: "DECODE WEBSITE",
    image: ImageFive,
    link: "https://github.com/im-Arihant-jain/decode_website",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "PROJECTS",
  },
  // {
  //   filterId: 2,
  //   label: "Developement",
  // },
  // {
  //   filterId: 3,
  //   label: "Design",
  // },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link}><button>Visit</button></a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
