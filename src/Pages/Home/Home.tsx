import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import Medicineproducts from '../../Components/MedicineProducts/Medicineproducts';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {


    return (
        <div>
            <Banner />
            <Medicineproducts />
            <AboutUs />
            
            <Reviews />
        </div>
    );
};

export default Home;