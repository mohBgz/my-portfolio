import React from "react";
import "../App.css";
import html from "../assets/stack-icons/html.png";
import css from "../assets/stack-icons/css.png";
import tailwind from "../assets/stack-icons/tailwind.png";
import ts from "../assets/stack-icons/ts.png";
import react from "../assets/stack-icons/react.png";
import node from "../assets/stack-icons/node.png";
import mongodb from "../assets/stack-icons/mongodb.png";
import docker from "../assets/stack-icons/docker.png";
import git from "../assets/stack-icons/git.png";

import Marquee from "react-fast-marquee";

export const InfiniteScroll = ({className}) => {
  return (
    <Marquee
      className={className}
      speed={50}
      delay={1}
      direction="right"
      gradient={false}
    >
      {[html, css, tailwind, ts, react, node, mongodb, docker, git].map(
        (icon, idx) => (
          <img
            key={idx}
            src={icon}
            alt={`icon-${idx}`}
            className=" w-auto h-8 sm:h-12 md:h-14 lg:h-16 mx-4 "
          />
        )
      )}
    </Marquee>
  );
};
