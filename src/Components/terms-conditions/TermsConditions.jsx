import { Button, Modal } from 'antd';
import './terms-conditions.css';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const TermsConditions = ({ open, onClose }) => {
    const [loading, setLoading] = useState()
    useEffect(() =>{
        if(open){
            setLoading(true)
            setTimeout(() => {
                setLoading(false);
              }, 2000); // for loading modal at first time
        }
    },[open])
    return (
        <>
            <Modal
                loading={loading}
                open={open}
                onCancel={onClose}
                footer={
                    <Button onClick={onClose}>
                        Cancel
                    </Button>
                }
                className="modalStyle"
                title="Terms and Conditions"
            >
                <div className="termsContent">
                    <p><strong>Last updated: 04-03-2025</strong></p>

                    <h3>Welcome to my personal portfolio website.</h3>
                    <p>By accessing or using this site, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>

                    <h4>1. Acceptance of Terms</h4>
                    <p>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use this site.</p>

                    <h4>2. Intellectual Property</h4>
                    <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Sanket Shetty or its content creators and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without express written permission.</p>

                    <h4>3. Use of the Site</h4>
                    <p>You agree to use this website for lawful purposes only. You must not use this site in any way that violates any applicable local, national, or international law or regulation.</p>

                    <h4>4. User Contributions</h4>
                    <p>If you submit or post content on this website, you grant Sanket Shetty a non-exclusive, royalty-free, perpetual, and fully sublicensable right to use, reproduce, modify, publish, and distribute such content. You are responsible for the content you submit and agree that it does not violate any third-party rights.</p>

                    <h4>5. Links to Other Websites</h4>
                    <p>This website may contain links to third-party websites that are not owned or controlled by Sanket Shetty. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Sanket Shetty shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods, or services available on or through any such websites.</p>

                    <h4>6. Disclaimer of Warranties</h4>
                    <p>The information provided on this website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the website or the information contained on it. Any reliance you place on such information is strictly at your own risk.</p>

                    <h4>7. Limitation of Liability</h4>
                    <p>In no event shall Sanket Shetty be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of this website. This includes, but is not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.</p>

                    <h4>8. Changes to Terms</h4>
                    <p>Sanket Shetty reserves the right to modify these Terms and Conditions at any time. Any changes will be effective immediately upon posting the updated terms on this website. Your continued use of the site after any changes constitutes acceptance of the new Terms and Conditions.</p>

                    <h4>9. Governing Law</h4>
                    <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of India.</p>

                    <h4>10. Contact Information</h4>
                    <p>If you have any questions about these Terms and Conditions, please contact me at <a href="sankshetty@gmail.com" style={{color:'blue'}}>sankshetty@gmail.com</a></p>
                </div>
            </Modal>
        </>
    );
}

export default TermsConditions;
