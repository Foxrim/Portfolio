import styles from "./social.module.css";

import github from "../../../assets/Github.png";
import linkedin from "../../../assets/Linkedin.png";
import mail from "../../../assets/Mail.png";

export default function Social() {
  return (
    <nav className={styles.social}>
      <button>
        <figure>
          <img src={github} alt="Logo github" />
        </figure>
      </button>
      <button>
        <figure>
          <img src={linkedin} alt="Logo Linkedin" />
        </figure>
      </button>
      <button>
        <figure>
          <img src={mail} alt="Logo mail" />
        </figure>
      </button>
    </nav>
  );
}
