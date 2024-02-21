import AboutUs from '../../Components/AboutUs/AboutUs';
import Banner from '../../Components/Banner/Banner';
import Medicineproducts from '../../Components/MedicineProducts/Medicineproducts';
import SeedProduct from '../../Components/MedicineProducts/SeedProduct/SeedProduct';
import Reviews from '../../Components/Reviews/Reviews';

const Home = () => {


    return (
        <div>
            <Banner />
            <Medicineproducts />
            <SeedProduct/>
            <AboutUs />
            
            <Reviews />
        </div>
    );
};

export default Home;