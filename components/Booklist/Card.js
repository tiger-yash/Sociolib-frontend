import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const Card = (props) => {
  console.log(props);
  const str = `/book/${props.id}`;
  const route = `http://localhost:3000/book/${props.id}`;
  const image = `https://sociolib-api.herokuapp.com${props.cover_image}`;
  return (
    <>
      <article className="overflow-hidden rounded-lg shadow-lg">
        <a href={route}>
          <img alt="Placeholder" className="block h-auto w-full" src={image} />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href={route}>
              {props.name}
            </a>
          </h1>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img
              alt="Placeholder"
              className="block rounded-full"
              src="https://picsum.photos/32/32/?write"
            />
            <p className="ml-2 text-sm">{props.author}</p>
          </a>
        </footer>
      </article>
    </>
  );
};

export default Card;
