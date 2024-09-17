import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

function Filter({ setFilter }) {
  return (
    <>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        className={styles.input_filter}
      />
    </>
  );
}

const mapDispatchToProps = {
  setFilter,
};

export default connect(null, mapDispatchToProps)(Filter);
