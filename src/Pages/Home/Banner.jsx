import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
 
    return (
        <div>
            <div className="carousel w-full h-96">



  <div id="slide1" className="carousel-item relative w-full hero" style={{backgroundImage: `url('https://images.unsplash.com/photo-1581606588715-a4735b758c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFydCUyMHNjaG9vbCUyMGNoaWxkcmVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')`}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div data-aos="flip-up"data-aos-duration="2000" className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><i>Drawing Garden</i></h1>
      <p className="mb-5">experience for the artist in you</p>
     
    </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 






  <div id="slide2" className="carousel-item relative w-full hero" style={{backgroundImage: `url('https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')`}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><i>Drawing Garden</i></h1>
      <p className="mb-5">experience for the artist in you</p>
    </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>




  <div id="slide3" className="carousel-item relative w-full hero" style={{backgroundImage: `url('https://images.unsplash.com/photo-1539795845756-4fadad2905ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0JTIwc2Nob29sJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')`}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold bg-gradient-to-r from-[#D14D72] to-[#fcc01e] inline-block text-transparent bg-clip-text"><i>Drawing Garden</i></h1>
      <p className="mb-5">experience for the artist in you</p>
    </div>
  </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
 
 
</div>
        </div>
    );
};

export default Banner;