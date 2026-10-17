import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({ option }) => {

    const{name, price, features} = option;

  return (
    <div className="bg-blue-600 rounded-2xl p-5 text-black flex flex-col">
        <h2>
            <span className="text-5xl">{price}</span>
            <span className="text-xl">/mon</span>
        </h2>
        <h4 className="text-3xl font-bold py-5">{name}</h4>
        <div className="flex-grow p-5">
            {
                features.map( (features, index) => <Features features={features} key={index}></Features>)
            }
        </div>
        <button className="bg-blue-400 text-xl font-bold w-full rounded-lg hover:bg-blue-100 py-2">Order Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;