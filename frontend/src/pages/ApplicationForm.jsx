import React from 'react';

const ApplicationForm = () => {
  return (
    <div>
      <h2 className='title'>Online Application Form</h2>

      <iframe
        src="https://forms.easebuzz.in/signup/PERA/PERA/?inst_name=PERA&form_name=PERA&jsonData=1"
        title="Application Form"
        width="100%"
        height="800px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default ApplicationForm;