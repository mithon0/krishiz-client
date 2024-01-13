
type tHeader ={
    header:string
}
const SectionTitle = ({header}:tHeader) => {
    return (
        <div>
            <h1 className="uppercase text-4xl font-thin text-center mt-10 py-3">{header}</h1><hr className="w-1/2 mx-auto border-2 border-red-600 mb-10" />
        </div>
    );
};

export default SectionTitle;