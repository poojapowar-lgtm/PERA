import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/AboutUs.css";
import peraSteps from "../assets/pera_steps.png";

const AboutUs = () => {
  const [selected, setSelected] = useState(null);

  const officeBearers = [
    {
      src: "/assets/Dr.Karad.jpg",
      name: "Dr. Mangesh T. Karad",
      designation: "President, PERA",
    },
    {
      src: "/assets/Mr.Baharat-Agarwal.jpg",
      name: "Mr. Bharat Agarwal",
      designation: "Vice President, PERA",
    },
    {
      src: "/assets/e-b-khedkar.jpg",
      name: "Dr. E B Khedkar",
      designation: "Member Secretary, PERA",
    },
    {
      src: "/assets/Dr.Sandip_Jha.jpg",
      name: "  Dr.Sandip Jha",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Sanjay_Patil.jpeg",
      name: "Dr. Sanjay D. Patil",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Swati_Mujumdar.jpg",
      name: "Dr. Swati Mujumdar",
      designation: "Member, PERA",
    },

    {
      src: "/assets/rahul_karad.jpg",
      name: "Mr. Rahul V. Karad",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Sanjay_Padode.jpg",
      name: " Dr. Sanjay Padode",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Inamdar.jpg",
      name: " Dr. P.A Inamdar",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr. Ravikumar_Chitnis.png",
      name: "Prof. Chitnis",
      designation: "Executive Member",
    },
    {
      src: "/assets/Dr.Sanjeevan-Arsud.jpg",
      name: "Dr. Sanjeevan Arsud",
      designation: "Member, PERA",
    },
    // {
    //   src: "/assets/Dr.Pillai.jpg",
    //   name: " Dr. V. N. Rajasekharan Pillai",
    //   designation: "Member, PERA",
    // },
    {
      src: "/assets/Dr.Ajay_Kapoor.png",
      name: "Dr. Ajay Kapoor",
      designation: "VC Somaiya University, Mumbai",
    },
    // {
    //   src: "/assets/Dr.prabhaat-ranjan.jpg",
    //   name: "Dr. Prabhaat Ranjan",
    //   designation: "Executive Member",
    // },
    {
      src: "/assets/Dr.Manish_Bhalla.jpg",
      name: "Prof.Dr.Manish Bhalla",
      designation: "Vice Chancellor, D. Y. Patil International University",
    },
    {
      src: "/assets/Dr.Udhav_Bhosle.png",
      name: "  Prof. Dr. Udhav Bhosle",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Sayalee_Gankar.jpg",
      name: "Dr. Sayalee Gankar",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr. Vilas_Sapkal.jpg",
      name: "Dr. Vilas Sapkal",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.G-K-Shirude.jpg",
      name: "Dr. G.K. Shirude",
      designation: "Member, PERA",
    },
    //   {
    //   src: "/assets/Dr.Hrridaysh_Deshpande.jpg",
    //   name: "Dr. Hrridaysh Deshpande",
    //   designation: "Member, PERA",
    // },
    {
      src: "/assets/Dr.Rakesh_Jain.png",
      name: "Dr. Rakesh Kumar Jain ",
      designation: "VC, A DYPatil University, Pune ",
    },
    //   {
    //   src: "/assets/Anil-Kashyap.jpg",
    //   name: "Dr. Anil Kashyap",
    //   designation: "Executive Member",
    // },
    {
      src: "/assets/Dr.Vijay_Gupchup.jpg",
      name: "Dr. Vijay Gupchup",
      designation: "President, NICMAR University, Pune",
    },
    {
      src: "/assets/Dr.Girish_Desai.jpg",
      name: "Dr. Girish Desai",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Mr.Tarundeep-Singh.jpg",
      name: "Mr. Tarundeep Singh Anand",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Ravi-Joshi.jpg",
      name: "Dr. Ravi Joshi",
      designation: "Member, PERA",
    },
    {
      src: "/assets/vc-Gopalkrishna-Joshi.jpg",
      name: "Dr. Gopalkrishna Joshi ",
      designation: "Member, PERA",
    },

    {
      src: "/assets/Mr.Amit-Nitinrao-Kolhe.png",
      name: "Mr. Amit Nitinrao Kolhe",
      designation: "Member, PERA",
    },
    // {
    //   src: "/assets/Dr.M-Kharat.png",
    //   name: "Dr. M.U Kharat",
    //   designation: "Member, PERA",
    // },
    {
      src: "/assets/Dr. R.D.Kharadkar.png",
      name: "Dr. R. D. Kharadkar ",
      designation: "VC, GHR IST University ",
    },
    // {
    //   src: "/assets/Dr.Prasad_Khandekar.png",
    //   name: "Dr. Prasad Khandekar",
    //   designation: "Member, PERA",
    // },
    {
      src: "/assets/Dr.Rajesh_Ingale.jpg",
      name: "Dr. Rajesh Ingale ",
      designation: "VC, DES Pune University, Pune ",
    },
    {
      src: "/assets/prof.PAWAR.jpg",
      name: "Prof. Hanumant Pawar",
      designation: "CEO, PERA",
    },
    {
      src: "/assets/Dr.Tarita.png",
      name: "Dr. Tarita Shankar",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Somnath_Patil.png",
      name: "Dr. Somnath Patil",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Shri.Sunil_Rane.png",
      name: "Shri. Sunil Rane",
      designation: "Atharva University, Mumbai",
    },
    {
      src: "/assets/Dr.Rajesh_Pande.jpg",
      name: "Dr. Rajesh S. Pande",
      designation: "VC, Ramdevbaba University, Nagpur",
    },
    {
    },

    {
      src: "/assets/vc-Gopalkrishna-Joshi.jpg",
      name: "Dr. Gopalkrishna Joshi ",
      designation: "Member, PERA",
    },

    {
      src: "/assets/Mr.Amit-Nitinrao-Kolhe.png",
      name: "Mr. Amit Nitinrao Kolhe",
      designation: "Member, PERA",
    },
    // {
    //   src: "/assets/Dr.M-Kharat.png",
    //   name: "Dr. M.U Kharat",
    //   designation: "Member, PERA",
    // },
    {
      src: "/assets/Dr. R.D.Kharadkar.png",
      name: "Dr. R. D. Kharadkar ",
      designation: "VC, GHR IST University ",
    },
    // {
    //   src: "/assets/Dr.Prasad_Khandekar.png",
    //   name: "Dr. Prasad Khandekar",
    //   designation: "Member, PERA",
    // },
    {
      src: "/assets/Dr.Rajesh_Ingale.jpg",
      name: "Dr. Rajesh Ingale ",
      designation: "VC, DES Pune University, Pune ",
    },
    {
      src: "/assets/prof.PAWAR.jpg",
      name: "Prof. Hanumant Pawar",
      designation: "CEO, PERA",
    },
    {
      src: "/assets/Dr.Tarita.png",
      name: "Dr. Tarita Shankar",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Dr.Somnath_Patil.png",
      name: "Dr. Somnath Patil",
      designation: "Member, PERA",
    },
    {
      src: "/assets/Shri.Sunil_Rane.png",
      name: "Shri. Sunil Rane",
      designation: "Atharva University, Mumbai",
    },
    {
      src: "/assets/Dr.Rajesh_Pande.jpg",
      name: "Dr. Rajesh S. Pande",
      designation: "VC, Ramdevbaba University, Nagpur",
    },
    {
      src: "/assets/Dr.Milon_Rana.jpg",
      name: "Dr. Milon Rana",
      designation: "VC, Spicer Advantage University, Pune",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="about-wrapper">
      {/* About Us Top Card */}
      <div className="about-card">
        <div className="about-left">
          <h2 className="title">About PERA</h2>
          <p>
            Preeminent Education and Research Association (PERA) is an esteem
            federation of the state private universities of Maharashtra. The
            federation has been constituted to promote quality education in all
            the domains of professional programmes. </p>

          <a href="/overview" className="read-more-btn">Read More</a>

          <a href="/about" className="read-more-btn">
            Read More
          </a>
      <p>
            Preeminent Education and Research Association (PERA) is an esteem federation of the state private universities of Maharashtra. The federation has been constituted to promote quality education in all the domains of professional programmes.
          </p>
          <a href="/overview" className="read-more-btn">Read More</a>
        </div>
        <div className="about-right">
          <img src={peraSteps} alt="PERA Steps" />
        </div>
      </div>

      {/* Office Bearers Carousel */}
      <div className="office-bearers">
        <h2 className="title">Office Bearers</h2>
        <Slider {...settings}>
          {officeBearers.map((bearer, i) => (
            <div key={i} className="carousel-img-wrapper" onClick={() => setSelected(bearer)}>
              <div className="img-hover-container">
                <img src={bearer.src} alt={bearer.name} />
                <div className="overlay">
                  <h4>{bearer.name}</h4>
                  <p>{bearer.designation}</p>
                </div>
              </div>

            </div>

          ))}
        </Slider>

        {/* See More Button */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="/office-bearers" className="see-more-btn">See More</a>
        </div>

      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.name} />
            <h3>{selected.name}</h3>
            <p>{selected.designation}</p>
            <button onClick={() => setSelected(null)} className="modal-close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
