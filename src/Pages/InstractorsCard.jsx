

const InstractorsCard = ({instractor}) => {
const {image,name,email} = instractor;
  return (
  <div className="card lg:w-96 md:w-96 w-full bg-base-100 shadow-xl">
  <figure className="px-10 pt-10  h-60 ">
    <img src= {image} alt="" className=" h-48 w-64 rounded-xl transition-transform duration-1000 ease-in-out hover:scale-125 cursor-zoom-in" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Name: {name}</h2>
    <p>Email: {email}</p>
    <div className="card-actions">
      <button className="btn btn-sm bg-gradient-to-r from-[#D14D72] to-[#fcc01e]  text-white ">Favorite</button>
    </div>
  </div>
</div>
  );
};

export default InstractorsCard;