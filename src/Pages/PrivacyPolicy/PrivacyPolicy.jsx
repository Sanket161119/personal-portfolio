/* eslint-disable react/prop-types */
import "./PrivacyPolicy.scss";
import { useEffect, useState } from "react";
import CustomModal from "../../Shared/Components/CustomModal/CustomModal";
import privacyPolicyData from "../../assets/Json/privacy_policy.json";

const PrivacyPolicy = ({ open, onClose }) => {
  const { privacyPolicy } = privacyPolicyData;
  const [loading, setLoading] = useState(false);
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
        <strong>Last updated: {privacyPolicy.lastUpdated}</strong>
      </p>
      <h4>{privacyPolicy.title}</h4>
      <p>{privacyPolicy.description}</p>

      {privacyPolicy.sections.map((section, index) => (
        <div key={index}>
          <h4>{section.title}</h4>
          <p>{section.content}</p>
          {section.items && Array.isArray(section.items) && (
            <ul>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  {item.link ? (
                    <>
                      {item.text}
                      <a href={item.link.href} style={{ color: "blue" }}>
                        {item.link.text}
                      </a>
                    </>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
  return (
    <>
      <CustomModal
        loading={loading}
        open={open}
        onClose={onClose}
        content={content}
        title="Privacy and Policy"
      ></CustomModal>
    </>
  );
};

export default PrivacyPolicy;
