import SectionTitle from "../../Shared/SectionTitle";

const AboutUs = () => {
    return (
        <div>
            <SectionTitle header="About Us"></SectionTitle>
            <div className="grid grid-cols-2">
                <div className="mx-20">
                    <img src="https://images.unsplash.com/photo-1623211270083-5743da6c67ec?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div>
                    <p className="text-red-700 text-sm">About Us</p><hr />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus aspernatur totam pariatur consectetur, saepe similique repudiandae possimus quidem modi ipsa recusandae architecto iste, tempora suscipit cupiditate, dolores sapiente! Excepturi ab exercitationem repudiandae saepe optio doloremque, adipisci odio porro repellat perspiciatis similique aliquam nobis necessitatibus nisi corrupti in possimus animi laborum.</p>

                    <p className="text-red-700 text-sm mt-5">Our Work</p><hr />
                    <ol className="list-disc ps-10">
                        <li>Sell best quality Product </li>
                        <li>To give best response to clint</li>
                        <li>Make Our site no 1 </li>
                        <li>Getting best feedback from our clint</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;