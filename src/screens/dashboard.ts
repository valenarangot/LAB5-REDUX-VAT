import styles from "./styles.css";

import { DescriptionProps } from "../components/description/description";
import { FigureProps } from "../components/figure/figure";
import { CardProps } from "../components/Card/Card";
import { setAttributes } from "../utils/attributes";
import TripsService from "../services/fetch";
import { loadCss } from "../utils/styles";
import { getTrips } from "../store/actions";
import { addObserver, appState, dispatch } from "../store/index";

class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    const action = await getTrips();
    dispatch(action);
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";
    loadCss(this, styles);

    appState.characters.forEach((character) => {
      const card = this.ownerDocument.createElement("app-card");
      card.setAttribute(name, character.name);
      mainContent.appendChild(card);
    });
  }
}

customElements.define("app-dashboard", Dashboard);
