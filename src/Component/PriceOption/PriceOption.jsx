import PropTypes from  "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {

    const {name, price, currency, features, description , id} = option;

    return (
        <div className="bg-green-500 rounded-xl p-6 text-white flex flex-col  ">
            <h2 className="text-center">
                <span className="text-6xl font-bold">{price}</span>
                <span className="text-2xl">/Month </span>
            </h2>
            <h4 className="text-3xl text-center mt-4 font-bold text-blue-600 ">{name}</h4>
            <div className="mt-4 pl-6 flex-grow">
                 {
                     features.map((feature , idx) => <Feature key={idx} feature={feature}  ></Feature> )
                 }
            </div>
            <button className=" mx-auto mt-10  bg-blue-500 w-4/5  p-5 rounded-xl text-xl font-semibold  hover:bg-red-400 hover:scale-110 duration-300 ">Buy Now</button>
        </div>
    );
};




PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;