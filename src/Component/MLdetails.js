// import React from 'react';
import React, { useState } from 'react';

import ML from '../img/machinelearning2.avif';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBusinessTime, faDraftingCompass, faCloud } from '@fortawesome/free-solid-svg-icons';
import Super from '../img/Super Learn.png';
import unsuper from '../img/Unsupervised.png';
import semisuper from '../img/Semisupervised Learn.png';
import reinforcement from '../img/Reinforcement Learn.png';
import transfer from '../img/transfer.avif';
import ensemble from '../img/Ensamble Learn.png';
import AI from '../img/machinelearning3.jpg';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import ML1 from '../img/MLLast.jpg';
const breakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px'
};

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  @media(min-width:375px){
  width:400px;
   }
    @media(min-width:768px){
    width:100vw;

}
`;




const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width:320px)
   {
    color:white;
    text-align:justify;
    // margin-right:9px;
    padding:20px;
  }
    @media(min-width:375px){
    color:white;
   padding:30px;
   text-align:justify;
    }
   @media(min-width:768px){
   color:white;
   }
  @media(min-width:1024px){
  color:white;
  }
  @media(min-width:1440px){
  color:white;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px;
  font-size: 44px;
   @media (max-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 26px;
    @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Section = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 0 20px; /* Add left and right padding */


  
 
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
  font-size: 24px;
    @media (max-width: ${breakpoints.mobileS}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 22px;
  }
`;

const Heading = styled.h4`
  margin: 0;
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.5;
  text-align:justify;

  @media(max-width:${breakpoints.mobileS}){
  text-align:center;
  
  
  
  }
   @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;

const LastSection = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 20px; /* Add left and right padding */
  background: linear-gradient(135deg, #c0c0c0, #dcdcdc); /* Silver gradient */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.1);
    transform: skewY(-3deg);
    z-index: 1;
  }

  & > * {
    z-index: 2;
  }
`;

const LastSec = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 20px; /* Add left and right padding */
  background: linear-gradient(135deg, #d3d3d3, #e6e6e6); /* Light silver gradient */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.1);
    transform: skewY(-3deg);
    z-index: 1;
  }

  & > * {
    z-index: 2;
  }
`;
const ResponsiveContainer = styled.div`
  .row {
    margin-top: 20px;
  }
  
  @media (max-width: 768px) {
    .row {
      margin-top: 15px;
    }
  }

  @media (max-width: 576px) {
    .row {
      margin-top: 10px;
    }
    
    h1 {
      font-size: 24px;
    }

    h3 {
      font-size: 18px;
    }
  }

  @media (max-width: 375px) {
    .row {
      margin-top: 5px;
    }

    h1 {
      font-size: 20px;
    }

    h3 {
      font-size: 16px;
    }

    .col-md-6 {
      width: 100%;
      padding: 0;
    }

    .container {
      padding: 0 15px;
    }
  }
`;

const SolutionSection = styled.div`
  margin-bottom: 20px;

  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

const SolutionHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const SolutionText = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  text-align:justify;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;



const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  max-width:600px;
  justify-content:spacebetween;

`;

const Section1 = styled.div`
  margin-bottom: 20px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  margin-right: 10px;
   @media (max-width: ${breakpoints.mobileS}) {
    font-size: 20px;
  }
  @media (max-width: ${breakpoints.mobileM}) {
    font-size: 22px;
  }
`;

const Heading1 = styled.h6`
  display: flex;
  align-items: center;
  cursor: pointer;
    @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

`;

const Paragraph1 = styled.p`
  display: ${props => (props.visible ? 'block' : 'none')};
  align-items:justify;
  text-align:justify;
  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
  }
`;
const Image1 = styled.img`
  width: 550px; // Adjust width as needed
  position: absolute;
   // Adjust the distance from the bottom as needed
  right: 20px; // Align to the right side
  margin-top:50px;
  overflow:hidden;
  animation: floatAnimation 3s ease-in-out infinite alternate; /* Example animation */
  
  @keyframes floatAnimation {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-70px); /* Adjust the floating distance as needed */
    }
  }
     @media (max-width: 768px) {
    animation: none;
    position:relative;
  }
`;




const MLdetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = index => {
    if (activeIndex === index) {
      setActiveIndex(null); // Clicking again collapses the content
    } else {
      setActiveIndex(index); // Clicking opens the selected content
    }
  };
  return (
    <div>
      <Container>
        <Image src={ML} alt="ML" />
        <TextOverlay>
          <Title>Machine Learning</Title>
          <Paragraph>
            Empowering businesses with Machine Learning: Embrace the future of AI-driven transformation and revolutionize your decision-making processes.
          </Paragraph>
        </TextOverlay>
      </Container>
      <Content>
        <h1>Just A Few Reasons Why Machine Learning?</h1>

        <Section>
          <LastSec>
          <Icon icon={faUsers} />
          <div>
            <Heading>Handpicked Experts</Heading>
            <Text>Our team consists of experts who possess deep understanding and hands-on experience, making us stand out from the crowd of self-proclaimed ML professionals. Our thought leadership shines through with published research papers and groundbreaking contributions to the field, demonstrating our commitment to exploring cutting-edge advancements and problem-solving.</Text>
          </div>
          </LastSec>
        </Section>
        <Section>


        <LastSection>
          <Icon icon={faBusinessTime} />
          <div>
            <Heading>Business Case Mapping</Heading>
            <Text>NIMIR excels in the Machine Learning space with a perfect blend of theoretical and practical knowledge of ML techniques. We take pride in our exceptional ability to set clear expectations and discover the most relevant business cases for ML applications. This skill ensures that we embark on projects with well-defined objectives and achievable outcomes.</Text>
          </div>
          </LastSection>
        </Section>

        <Section>
          <LastSec>
          <Icon icon={faDraftingCompass} />
          <div>
            <Heading>Rapid Prototyping</Heading>
            <Text>Rapid prototyping is another area of our expertise, where we swiftly turn hypotheses into actionable predictions or results. The benefits of our quick prototyping approach extend beyond the initial development phase. It sets a solid foundation for subsequent steps in the ML lifecycle, such as model deployment, monitoring, and continuous improvement. As a result, our clients benefit from faster time-to-value, reduced risk, and the ability to respond swiftly to evolving business demands.</Text>
          </div>
          </LastSec>
        </Section>

        <Section>
        <LastSection>
          <Icon icon={faCloud} />
          <div>
            <Heading>Modern Architecture</Heading>
            <Text>To complement our prowess in Machine Learning, we also possess extensive experience in Cloud and Data Engineering, allowing us to build modern architectures for ML projects. Our team's proficiency in this area enables us to develop scalable and reliable ML solutions that leverage the full potential of Cloud-based resources. This approach ensures that our ML solutions can process vast amounts of data, run complex algorithms, and deliver results in a timely manner, all while optimizing costs and resource utilization.</Text>
          </div>
        </LastSection>
        </Section>
      </Content>
      <ResponsiveContainer>
      <div className='container'>
      <div className='row' >
      <div className='col-md-12'>
        <h1>Machine Learning Solutions</h1>
        <h3>Unlock the power of data with our cutting-edge Machine Learning solutions:</h3>
        </div>
        </div>
 
        <div className='row'>
        <div className='col-md-6'>
        <SolutionSection>
          <SolutionHeading>Supervised Learning</SolutionHeading>
        <SolutionText>Supervised learning, a key aspect of machine learning, enables our software to learn from labeled datasets and make accurate predictions. This approach is particularly useful for fraud detection and customer segmentation. At our company, we leverage supervised learning to enhance the intelligence and efficiency of our software, ensuring innovative and reliable solutions for our clients.</SolutionText>
        <Image src={Super} alt='super' style={{ maxWidth: '100%', height: 'auto' }} />

          </SolutionSection>
          </div>

          <div className='col-md-6'>
        <SolutionSection>
          <SolutionHeading>Unsupervised Learning</SolutionHeading>
          <SolutionText>Unsupervised learning, a key component of machine learning, allows our software to uncover hidden patterns from unlabeled data. This approach is valuable for tasks like customer segmentation and anomaly detection. By leveraging unsupervised learning, we empower businesses to make informed decisions and discover new opportunities, ensuring intelligent, data-driven solutions that drive innovation and growth.</SolutionText>       
          <Image src={unsuper} alt='unsuper' style={{ maxWidth: '100%', height: 'auto' }} />
 </SolutionSection>
 </div>
 
 <div className='col-md-6'>
        <SolutionSection>
        <SolutionHeading>Semi-supervised Learning</SolutionHeading>
<SolutionText>Semi-supervised learning combines supervised and unsupervised learning, leveraging both labeled and unlabeled data for enhanced accuracy and efficiency. By using a small amount of labeled data alongside a larger pool of unlabeled data, our algorithms improve performance while reducing labeling costs. This approach is ideal for image and speech recognition, where labeled data is scarce. At our company, we utilize semi-supervised learning to deliver intelligent, scalable, and cost-effective solutions that drive innovation and achieve superior results.

</SolutionText>          
<Image src={semisuper} alt='unsuper' style={{ maxWidth: '100%', height: 'auto' }} />

        </SolutionSection>
        </div>


        <div className='col-md-6'>
        <SolutionSection>
          <SolutionHeading>Reinforcement Learning</SolutionHeading>
<SolutionText>Reinforcement learning allows our software to learn through trial and error by interacting with its environment and receiving feedback. This approach is powerful for robotics, autonomous systems, and complex decision-making. At our company, we leverage reinforcement learning to develop adaptive solutions that tackle challenging problems and dynamically respond to change, ensuring innovative software tailored to our clients' needs.</SolutionText>         
 <Image src={reinforcement} alt='reinforcement'style={{ maxWidth: '100%', height: 'auto' }} />
        </SolutionSection>
        </div>


        <div className='col-md-6'>
        <SolutionSection>
          <SolutionHeading>Transfer Learning</SolutionHeading>
<SolutionText>Transfer learning allows our software to leverage pre-trained models, applying existing knowledge to new tasks. By reducing training time and enhancing performance with minimal data, this approach benefits applications like image recognition and medical diagnostics. At our company, we harness transfer learning to deliver efficient, accurate, and innovative solutions that accelerate development and exceed client expectations.
  </SolutionText>      
  <Image src={transfer } alt='tarnsfer'style={{ maxWidth: '100%', height: 'auto' }} />
    </SolutionSection>
    </div>

    <div className='col-md-6'>
        <SolutionSection>
          <SolutionHeading>Ensemble Learning</SolutionHeading>
<SolutionText>Ensemble learning combines predictions from multiple models for higher accuracy and robustness. By leveraging diverse algorithms, it mitigates overfitting and improves data generalization. This method excels in predictive analytics, fraud detection, and recommendation systems, providing sophisticated, reliable software solutions. At our company, we use ensemble learning to deliver precise results, enhancing decision-making and driving business success with cutting-edge technology.</SolutionText>
<Image src={ensemble } alt='ensemble' style={{ maxWidth: '100%', height: 'auto' }} />
</SolutionSection>  
</div>      
      </div>
      </div>
      </ResponsiveContainer>


        <div>
          <Image src={AI} alt='ml'></Image>
        </div>
       
       < Content1 className='row'>
          <h1>Our Offerings
          Machine Learning</h1>
        <Section1>
          <Heading1 onClick={() => toggleContent(0)}>
            <ToggleButton>
              {activeIndex === 0 ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </ToggleButton>
            Sentiment Analysis
          </Heading1>
          <Paragraph1 visible={activeIndex === 0}>
          At NIMIR, we recognize that sentiment analysis is a game-changer in understanding customer sentiments and feedback. Our sentiment analysis services offer a comprehensive and intelligent solution, empowering businesses to leverage data-driven insights for enhanced customer experiences and strategic decision-making.

Adding value with Kellton's sentiment analysis services: By leveraging our sentiment analysis services, businesses gain a deeper understanding of customer sentiments from diverse sources like FB, Twitter, Google play store, and app store. The generated insights enable organizations to respond promptly to user messages with potential comments, ensuring higher engagement, improved brand perception, and increased customer satisfaction.

Our sentiment analysis services are built on a robust framework, integrating cutting-edge Machine Learning libraries such as TensorFlow, Natural Language Toolkit (NLTK), and Apache OpenNLP. These powerful tools enable seamless content ingestion, sentiment analysis, and comment generation, while the data is efficiently stored alongside demographics and feedback in a structured database. This empowers executives to leverage aggregate queries and gain actionable information for making well-informed, strategic decisions.

Experience the power of sentiment analysis with Kellton: Our end-to-end solution transforms customer sentiments into valuable insights, enabling businesses to drive impactful strategies and deliver exceptional customer experiences in the fast-paced digital landscape.          </Paragraph1>
        </Section1>
        
        <Section1>
          <Heading1 onClick={() => toggleContent(1)}>
            <ToggleButton>
              {activeIndex === 1 ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </ToggleButton>
            Fraud & Anomaly Detection
          </Heading1>
          <Paragraph1 visible={activeIndex === 1}>
          Leveraging the power of AI and Machine Learning, we scrutinize vast datasets in real-time to identify suspicious activities and deviations from normal patterns. 

Our fraud detection services encompass data analysis, anomaly detection, and predictive modeling using Machine Learning algorithms. By leveraging the power of Machine Learning, we analyze vast amounts of data in real-time to detect irregular patterns and suspicious behavior indicative of potential fraud. 

Our anomaly detection techniques help businesses identify and flag unusual activities, while our predictive models enable early detection of fraudulent transactions, reducing financial losses and protecting businesses from potential risks.
           </Paragraph1>
        </Section1>
        
        <Section1>
          <Heading1 onClick={() => toggleContent(2)}>
            <ToggleButton>
              {activeIndex === 2 ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </ToggleButton>
            Sales Optimization Models
          </Heading1>
          <Paragraph1 visible={activeIndex === 2}>
          Our sales optimization models services encompass customer segmentation, demand forecasting, and sales performance analytics using Machine Learning algorithms.

By leveraging the power of Machine Learning, we analyze customer data to identify distinct segments, enabling businesses to tailor sales strategies for personalized targeting. Our demand forecasting models provide accurate predictions of customer demands, enabling businesses to optimize inventory management and ensure timely product availability.

Through sales performance analytics, we gain valuable insights into sales trends and patterns, empowering businesses to identify growth opportunities, optimize sales processes, and maximize revenue.
           </Paragraph1>
        </Section1>
        
        <Section1>
          <Heading1 onClick={() => toggleContent(3)}>
            <ToggleButton>
              {activeIndex === 3 ? (
                <FontAwesomeIcon icon={faMinus} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </ToggleButton>
            Self Learning Chatbots
          </Heading1>
          <Paragraph1 visible={activeIndex === 3}>
          Our self learning chatbots services encompass natural language processing, sentiment analysis, and reinforcement learning using Machine Learning algorithms.

By leveraging the power of Machine Learning, we enable chatbots to understand and respond to user queries with human-like comprehension and context. Through reinforcement learning, chatbots continuously improve their responses based on user feedback, allowing them to adapt and learn from every interaction.

Seamlessly integrate them into your platforms to automate customer support, streamline interactions, and enhance user experiences.

          </Paragraph1>
        </Section1>
        <Image1 src={ML1} alt='ml2' />
      </Content1>
     

    </div>
  );
}

export default MLdetails;
