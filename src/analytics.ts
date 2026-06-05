import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-0DBWKGL4FJ");
};

export const trackPageView = () => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
  });
};