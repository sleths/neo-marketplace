import NotFoundContainer from "../components/Container/NotFoundContainer";

export const pageLinks = [
  { text: "Explore", link: "/" },
  {
    text: "Stats",
    link: "/stats",
  },
  {
    text: "Drops",
    link: "/drops",
  },
];

export const switchRender = (variable, children) => {
  if(variable === undefined) return <NotFoundContainer />
  else return (children)

}