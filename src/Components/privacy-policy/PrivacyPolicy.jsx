/* eslint-disable react/prop-types */
import { Button, Modal } from "antd";
import "./privacy-policy.scss";
import { useEffect, useState } from "react";

const PrivacyPolicy = ({ open, onClose }) => {
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        if(open){
            setLoading(true);
            setTimeout(() =>{
                setLoading(false);
            },2000)
        }
    },[open])

  return (
    <>
      <Modal
      loading={loading}
        open={open}
        onCancel={onClose}
        footer={<Button onClick={onClose}>Cancel</Button>}
        className="privacy-policy"
        title="Privacy and Policy"
      >
        <div className="policy-content">
          <p>
            <strong>Last updated: 06-03-2025</strong>
          </p>
          <h4>Privacy Policy for Sanket Shetty</h4>
          <p>
            This Privacy Policy describes Our policies and procedures on the
            collection, use, and disclosure of Your information when You use our
            website and tells You about Your privacy rights and how the law
            protects You.
          </p>

          <h4>Information We Collect</h4>
          <p>
            When you visit our website, we may collect the following types of
            information:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> While using our site, you may
              provide us with certain personally identifiable information that
              can be used to contact or identify you, such as your name, email
              address, and phone number.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect information on how the
              website is accessed and used. This Usage Data may include
              information such as your computer&apos;s Internet Protocol address
              (e.g., IP address), browser type, browser version, the pages of
              our website that you visit, the time and date of your visit, the
              time spent on those pages, and other diagnostic data.
            </li>
          </ul>

          <h4>How We Use Your Information</h4>
          <p>We use the collected data for various purposes:</p>
          <ul>
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our website</li>
            <li>
              To allow you to participate in interactive features of our website
              when you choose to do so
            </li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our website
            </li>
            <li>To monitor the usage of our website</li>
            <li>To detect, prevent, and address technical issues</li>
          </ul>

          <h4>Disclosure of Your Information</h4>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your
            Personally Identifiable Information unless we provide users with
            advance notice. This does not include website hosting partners and
            other parties who assist us in operating our website, conducting our
            business, or serving our users, so long as those parties agree to
            keep this information confidential.
          </p>

          <h4>Security of Your Information</h4>
          <p>
            The security of your personal information is important to us, but
            remember that no method of transmission over the Internet or method
            of electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your personal information,
            we cannot guarantee its absolute security.
          </p>

          <h4>Your Data Protection Rights</h4>
          <p>
            If you are a resident of the European Economic Area (EEA), you have
            certain data protection rights:
          </p>
          <ul>
            <li>
              The right to access, update or delete the information we have on
              you.
            </li>
            <li>The right to rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>

          <h4>Links to Other Websites</h4>
          <p>
            Our website may contain links to other sites that are not operated
            by us. If you click on a third-party link, you will be directed to
            that third party&apos;s site. We strongly advise you to review the
            Privacy Policy and terms of service of any site you visit.
          </p>

          <h4>Changes to This Privacy Policy</h4>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <h4>Contact Us</h4>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <ul>
            <li>
              By email:{" "}
              <a href="sankshetyy@gmail.com" style={{ color: "blue" }}>
                sankshetyy@gmail.com
              </a>
            </li>
            <li>By visiting this page on our website: </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default PrivacyPolicy;
