import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledExpandIcon = styled(FontAwesomeIcon)`
  color: #2e2e2e;
  margin-left: 5px;
  opacity: 0.3;
  transition: all 0.3s ease-out;

  &:hover {
    opacity: 0.5;
  }
`;

const ExpandIcon = ({
  className,
  isOpen,
  onClick,
}: {
  className?: string;
  isOpen: boolean;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}) => {
  return (
    <StyledExpandIcon
      className={className}
      icon={isOpen ? faCircleChevronUp : faCircleChevronDown}
      onClick={onClick}
    />
  );
};

export default ExpandIcon;
