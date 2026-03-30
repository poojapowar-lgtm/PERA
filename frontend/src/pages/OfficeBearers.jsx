import React, { useState } from "react";
import "../assets/styles/OfficeBearers.css";


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
    src: "/assets/Dr. Ravikumar_Chitnis.jpg",
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
    designation: "Atharva University, Mumbai ",
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

const OfficeBearers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for your comment!");
    setFormData({ name: "", email: "", website: "", message: "" });
  };

  return (
    <div className="office-bearers-page">
      <h1 className="title">Office Bearers</h1>
      <div className="bearers-grid">
        {officeBearers.map((bearer, index) => (
          <div className="img-hover-container">
            <img style={{ border: "2.5px solid rgba(31, 38, 82, 0.8)" }} src={bearer.src} alt={bearer.name} />
            <div className="overlay">
              <h4>{bearer.name}</h4>
              <p>{bearer.designation}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Leave a Reply Form */}
      {/* <div className="reply-section">
        <h2>Leave a Reply</h2>
        <p>Your email address will not be published. Required fields are marked *</p>
        <form className="reply-form" onSubmit={handleSubmit}>
          <textarea
            name="message"
            placeholder="Comment *"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
          />
          <div className="remember">
            <label>
              <input type="checkbox" /> Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          <button type="submit">Post Comment</button>
        </form>
      </div> */}
    </div>
  );
};

export default OfficeBearers;
