import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import YouTube from "react-youtube";
import Iframe from 'react-iframe'

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "jtXKFQiRQqGEEcnQnpWNem",
      token: "w3c5tsgDpUNK9IowpmezaZVYiJwVDaRFldF1R7NRbRLKLcvTVGuogqQYkFoJY6H7q1XNlZOOqdL7uje5lqO0Cw"
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  // preview: true,
})

PLASMIC.registerComponent(YouTube, {
  name: "YouTube",
  props: {
    videoId: "string",
  },
  importPath: "react-youtube",
  isDefaultExport: true,
});

PLASMIC.registerComponent(Iframe, {
  name: "Iframe",
  props: {
    url: "string",
  },
  importPath: "react-iframe",
  isDefaultExport: true,
});

