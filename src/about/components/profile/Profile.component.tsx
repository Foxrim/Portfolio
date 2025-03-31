import data from '../../../data/data.json';
import styles from "./Profile.module.css";

export default function Profile() {
  const user = data.user;

    return(
        <div className={styles.profile}>
            <figure>
                <img src={user.photo} alt={`${user.firstname} ${user.lastname} photo`} />
            </figure>
        </div>
    )
}