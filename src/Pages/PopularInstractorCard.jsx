

const PopularInstractorCard = ({instractor}) => {
const {name,email,image} = instractor;
  return (
    <div className="card w-full lg:w-96 md:w-96 bg-base-100 shadow-xl">
  <figure className=" pt-10 h-52">
    <img src= {image}  alt="Shoes" className="rounded-xl h-48 w-60  transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions">
      <button className="btn bg-gradient-to-r from-[#D14D72] to-[#fcc01e] text-white">Favorite</button>
    </div>
  </div>
</div>
  );
};

export default PopularInstractorCard;