import PropTypes from 'prop-types';
import { FaAngleRight } from "react-icons/fa6";

const Features = ({ features }) => {
  return (
    <div>
        <p className="flex items-center gap-2 pl-5">
            <FaAngleRight></FaAngleRight>
            {features}
        </p>

    </div>
  )
}

Features.propTypes = {
    features: PropTypes.string
}

export default Features