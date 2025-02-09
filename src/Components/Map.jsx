import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParrams, setSearchParams] = useSearchParams();
  const lat = searchParrams.get("lat");
  const lng = searchParrams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>
        Position: {lat}, {lng}
      </h1>
    </div>
  );
}

export default Map;
