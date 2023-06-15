
const PopularClassCard = ({ classes }) => {
  const { name, image, instractor, seats, price, student } = classes;
  return (
    <div className="card lg:w-96 md:w-96 w-full bg-base-100 shadow-xl">
      <figure className=" pt-10 h-60">
        <img src={image} alt="Shoes" className="h-48 w-64 rounded-xl  transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name:{name}</h2>
        <p> Instractor: {instractor}.</p>
        <p>Enroll Student: {student}.</p>
      
          <p>Seats: {seats}.</p>
          <p> Price: {price}.</p>
    
        <div className="card-actions">
          <button className="btn text-white bg-gradient-to-r from-[#D14D72] to-[#fcc01e] ">Select</button>
        </div>
      </div>
    </div>

  );
};

export default PopularClassCard;