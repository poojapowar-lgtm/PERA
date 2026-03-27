import React from "react";
import img from "../assets/Overview_page_img.jpg";
import '../assets/styles/Overview.css'

const Overview = () => {
  return (
    <div className="overview-container">
      <img src={img} alt="Overview" className="responsive-image" />
      <div className="objectives-card">
        <h2>Objectives of PERA</h2>
        <p>
          Self-financed Universities in Maharashtra have formed an association and
          registered a company under Section 8 of the Companies Act 2013 in the
          name and style of <strong>“PREEMINENT EDUCATION AND RESEARCH ASSOCIATION” (PERA)</strong>, Pune
          for following objects:
        </p>
        <h3 className="heading">Objectives :-</h3>
        <ul>
          <li>To encourage, promote and facilitate higher education, research and other extra-curricular & co-curricular activities to help overall conducive uplifting and progress of higher education.</li>
          <li>To inspire and indorse research & innovation for the advancement and dissemination of knowledge.</li>
          <li>To represent self-financed universities of the Maharashtra State at all India level for addressing & resolving their various regulatory issues with State Government of Maharashtra, University Grant Commission (UGC), MHRD and various Councils and Government authorities pertaining to issues on academics, human resource, reservation, accreditations, pay commission, guidelines & approvals of town planning for building FSI, layouts of the educational institutions etc.</li>
          <li>To undertake extra mural studies, extension programs and filed outreach activities to contribute to the development of higher education in society, such as Faculty Development Programs, seminars, conferences etc.</li>
          <li>To approach industry for collaborative projects in education. To work as catalyst between industry and academia for the promotion and academic excellence to meet industry required education. To support self-financed universities / institutions to get accredited through various agencies such as NAAC, NBA, NIRF, UGC, MHRD, ISO, ILO, QS world rankings and ratings etc. at national and international level.</li>
          <li>To hold examinations and award results & other academic distinctions or titles as may be required as per existing procedures established by law; to institute and award chairs, scholarships, free ships, fellowships, prizes and medals etc.</li>
          <li>To represent in the Supreme Courts of India, High Courts or any other legal forum to resolve the various issues of the self-financed universities and institutions and to make pleadings before court of laws on behalf of all self-financed universities at all levels.</li>
          <li>To conduct Common Entrance Tests (CETs) for various professional under graduate and post graduate degree programs for all self-financed universities at all India level, as permitted to do so in various State legislatures of self-financed universities or as per the guidelines of UGC or any other appropriate statutory authorities.</li>
          <li>As per the provisions of self-financed University enactments and UGC regulations, conducting of CET and its valid score is mandatory as prerequisite for enrollments to all professional UG and PG degree programs. Moreover, conducting CET by single private university has been banned. However, a Private Universities Association / Federation are permitted to do so, which will immensely help all member universities to source large number of candidates from all over India, aspiring to enroll for all UG and PG degree programs.</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
