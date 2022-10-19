import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBug,
  faComment,
  faExclamation,
  faExclamationTriangle,
  faHistory,
  faMinusCircle,
  faQuestion,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

enum STATUS_REINJECTION {
  TARGET_CAMPAIGN_NEAR = 1,
  DEADLINE_IS_PASSED = 2,
  ANOMALY = 3,
  COMMENT = 4,
  NEGATIVE_QUANTITY = 5,
  PURCHASE_TYPE_ERROR = 6,
  OPENING_DATE_CHANGED = 7,
  SUPPLIER_ERROR = 8
}

const Icon = ({ id, name }: { id: number; name: string }) => {
  switch (id) {
    case STATUS_REINJECTION.TARGET_CAMPAIGN_NEAR:
      return <FontAwesomeIcon fixedWidth color="orange" icon={faExclamation} />;
    case STATUS_REINJECTION.DEADLINE_IS_PASSED:
      return <FontAwesomeIcon fixedWidth color="black" icon={faBan} />;
    case STATUS_REINJECTION.ANOMALY:
      return <FontAwesomeIcon fixedWidth color="red" icon={faTimes} />;
    case STATUS_REINJECTION.COMMENT:
      return <FontAwesomeIcon fixedWidth color="pink" icon={faComment} />;
    case STATUS_REINJECTION.NEGATIVE_QUANTITY:
      return <FontAwesomeIcon fixedWidth color="red" icon={faMinusCircle} />;
    case STATUS_REINJECTION.PURCHASE_TYPE_ERROR:
      return <FontAwesomeIcon fixedWidth color="red" icon={faBug} />;
    case STATUS_REINJECTION.OPENING_DATE_CHANGED:
      return <FontAwesomeIcon fixedWidth color="cornflowerblue" icon={faHistory} />;
    case STATUS_REINJECTION.SUPPLIER_ERROR:
      return <FontAwesomeIcon fixedWidth color="red" icon={faExclamationTriangle} />;
    default:
      return <FontAwesomeIcon fixedWidth color="black" icon={faQuestion} />;
  }
};

export default Icon;
