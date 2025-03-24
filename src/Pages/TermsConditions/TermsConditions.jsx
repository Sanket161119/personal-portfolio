/* eslint-disable react/prop-types */
import "./TermsConditions.scss";
import { useEffect, useState } from "react";
import CustomModal from "../../Shared/Components/CustomModal/CustomModal.jsx";
import termsConditionsData from "../../assets/Json/terms-conditions.json";

const TermsConditions = ({ open, onClose }) => {
  const { termsAndConditions } = termsConditionsData;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (open) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [open]);

  const content = (
    <div className="content">
      <p>
        <strong>Last updated: {termsAndConditions.lastUpdated}</strong>
      </p>
      <h3>{termsAndConditions.welcomeMessage}</h3>
      <p>{termsAndConditions.introduction}</p>

      {termsAndConditions.sections.map((section, index) => (
        <div key={index}>
          <h4>{section.title}</h4>
          {section.content.map((text, idx) => (
            <p key={idx}>
              {typeof text === "string" ? (
                text
              ) : (
                <>
                  {text.link ? (
                    <>
                      {text.content && text.content.length > 0
                        ? text.content[0]
                        : null}
                      <a href={text.link.href} style={{ color: "blue" }}>
                        {text.link.text}
                      </a>
                    </>
                  ) : null}
                </>
              )}
            </p>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <CustomModal
      className="terms-conditions"
      open={open}
      onClose={onClose}
      title="Terms and Conditions"
      content={content}
      loading={loading}
    />
  );
};

export default TermsConditions;
