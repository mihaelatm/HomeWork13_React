import styles from "../styles/UserItem.module.css";

function UserItem({ user }) {
  return <li className={styles.user_item}>{user.name}</li>;
}

export default UserItem;
