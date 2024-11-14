import PropTypes from  "prop-types";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className="">
            <p className="mt-3">
                <div className="flex  items-center">
                     <IoIosArrowDroprightCircle className="  text-blue-500 mr-2"></IoIosArrowDroprightCircle> {feature}
                </div>
            </p>
        </div>
    );
};





Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;