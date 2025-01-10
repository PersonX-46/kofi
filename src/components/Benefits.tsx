import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLeaf, faSeedling, faBolt } from "@fortawesome/free-solid-svg-icons";

const ProductBenefits = () => {
  return (
    <section className="bg-gradient-radial from-[#1d130d] to-black text-white py-16 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
          What Makes Our Coffee Special?
        </h2>
        <p className="text-gray-300 text-lg mb-12">
          Discover the magic behind our coffee — a perfect blend of premium ingredients and thoughtful craftsmanship.
        </p>

        {/* Benefits List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Benefit 1 */}
          <div className="bg-[#2e1f18] p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300">
            <FontAwesomeIcon icon={faCoffee} className="text-5xl mb-6 text-[#d4af37]" />
            <h3 className="text-xl font-semibold mb-4">100% Arabica Beans</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Made exclusively from high-quality Arabica beans, our coffee offers a smoother, less bitter taste with delightful aroma notes.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#2e1f18] p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300">
            <FontAwesomeIcon icon={faLeaf} className="text-5xl mb-6 text-[#228b22]" />
            <h3 className="text-xl font-semibold mb-4">Natural Antioxidants</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Packed with natural antioxidants, our coffee helps reduce oxidative stress and promotes overall health.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-[#2e1f18] p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300">
            <FontAwesomeIcon icon={faSeedling} className="text-5xl mb-6 text-[#6b8e23]" />
            <h3 className="text-xl font-semibold mb-4">Infused with Herbal Goodness</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Enriched with hints of cinnamon and cardamom, our blend offers a unique taste and digestive benefits.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-[#2e1f18] p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300">
            <FontAwesomeIcon icon={faBolt} className="text-5xl mb-6 text-[#FFD700]" />
            <h3 className="text-xl font-semibold mb-4">Energy Booster</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              With a perfectly balanced caffeine content, our coffee keeps you energized and focused throughout your day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBenefits;


