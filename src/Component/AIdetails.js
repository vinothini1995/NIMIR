import React from 'react';
import styled from 'styled-components';
import AIImage from '../img/ai.jpg';
import tensorflow from '../img/tensor.png';
import pytorch from '../img/pytorch.png';
import keras from '../img/keras.png';
import MicrosoftAzure from '../img/microsoft.svg';
import Aws from '../img/awss.png';
import Gcp from '../img/google-cloud-3.svg';
import docker from '../img/docker-icon.svg';
import kubernates from '../img/kuber.png';
import ansible from '../img/ansible.png';
import codex from '../img/CODEX.svg';
import jukebox from '../img/jukebox.svg';
import gpt3 from '../img/gpt.svg';
import clarity from '../img/gpt.svg';
import python from '../img/pythonn.png';
import apache from '../img/apache.svg';
import rpgm from '../img/rprogrammm.jpg';
import { faCogs, faComments, faLaptopCode, faSlidersH, faChartLine, faEye, faFileAlt, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import the appropriate FontAwesome icon

const Container = styled.div`
  background: linear-gradient(135deg, #2A629A 0%, #3B7DBF 50%, #4C96E5 100%);
  color: white;
  text-align: center;
  padding: 20px;

  
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

   @media (max-width: 425px) {
    margin:10px/* Justify text alignment for screen widths of 320px or less */
  } 
       @media (max-width: 768px) {
    margin:10px/* Justify text alignment for screen widths of 320px or less */
  } 
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;


`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  @media (max-width: 375px) {
    width:100%; Justify text alignment for screen widths of 320px or less */
  } 
    
`;

const Section1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 20px;
  width: calc(33.33% - 20px); /* Adjust width based on your layout */
  margin: 10px 10px;
  text-align: left;
  transition: transform 0.1s ease-in-out; /* Add smooth transition on transform */
  
@media (max-width: 320px) {
    width:100vw;/* Adjust width for smaller screens */
    
    
  }
  @media (max-width: 768px) {
    width: calc(50% - 20px); /* Adjust width for smaller screens */
  }

  @media (max-width: 576px) {
    width: calc(100% - 20px); /* Adjust width for smallest screens */
  }
    @media (max-width: 1024px) {
    width: calc(100% - 20px); /* Adjust width for smallest screens */
  }

  &:hover {
    transform: translateY(-5px); /* Lift card slightly on hover */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* Add shadow on hover */
  }
`;
const Paragraph = styled.p`
  text-align: left; /* Default text alignment */

  // @media (max-width: 320px) {
  //   text-align: justify; /* Justify text alignment for screen widths of 320px or less */
  // }
    @media (max-width: 375px) {
    text-align: justify; /* Justify text alignment for screen widths of 320px or less */
  } 
      @media (max-width: 425px) {
    text-align: justify; /* Justify text alignment for screen widths of 320px or less */
  } 
      @media (max-width: 768px) {
    text-align: justify; /* Justify text alignment for screen widths of 320px or less */
  } 
`;

const HeadingIcon = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  margin-right: 10px;
  font-size: 24px;
  color: blue;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  border-radius: 10px;

  &:hover {
    background-color: darkred;
  }
`;

const LastSection = styled.div`
  text-align: center;
  padding: 20px;
`;

const Frameworks = styled.div`
  margin: 20px 0;
  font-size: 44px;
  // color: #eb5b00;
`;

const FrameworkImage = styled.div`
  display: inline-block;
  margin: 50px;
  text-align: center;
`;

const SectionHalf = styled.div`
  flex-basis: calc(50% - 20px);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Tools = styled(Frameworks)``;
const Platforms = styled(Frameworks)``;
const AIModel = styled(Frameworks)``;
const Programming = styled(Frameworks)``;

const PlatformImage = styled(FrameworkImage)``;
const ToolImage = styled(FrameworkImage)``;
const AIModelImage = styled(FrameworkImage)``;
const ProgrammingImage = styled(FrameworkImage)``;

const AIdetails = () => {
  return (
    <div>
      <Container>
        <h1>NIMIR AI Software Development Company</h1>
        <p><b>Get Best AI Services And Solutions By Collaborating With NIMIR AI Software Development Company</b></p>
      </Container>
      <h3 style={{textAlign:'center'}}>Procure Insightful & Precise Results With Our AI Software Developers</h3>
      <Section1>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faCogs} style={{ marginRight: '10px' }} />
            <h3>AI Model Integration And Optimization</h3>
          </HeadingIcon>
          <Paragraph>Customized integration of AI models and workflow optimization.</Paragraph> 
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faComments} style={{ marginRight: '10px' }} />
            <h3>AI Conversational Tools</h3>
          </HeadingIcon>
          <Paragraph>Development of customized conversational AI tools with high NLP/NLU accuracy.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px' }} />
            <h3>Custom AI Solutions</h3>
          </HeadingIcon>
          <Paragraph>Development of intent-based voice assistants, fraud detection tools, etc.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faSlidersH} style={{ marginRight: '10px' }} />
            <h3>Fine-Tuning Models</h3>
          </HeadingIcon>
          <Paragraph>Maintenance and fine-tuning services for AI models using data augmentation.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faChartLine} style={{ marginRight: '10px' }} />
            <h3>Predictive Analytics Solution</h3>
          </HeadingIcon>
          <Paragraph>Data-driven predictive analysis for optimal business decisions.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faEye} style={{ marginRight: '10px' }} />
            <h3>Computer Vision</h3>
          </HeadingIcon>
          <Paragraph>Development of visual recognition and categorization using computer vision.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '10px' }} />
            <h3>OCR Services</h3>
          </HeadingIcon>
          <Paragraph>Optical Character Recognition services for document processing.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faChartBar} style={{ marginRight: '10px' }} />
            <h3>Business Intelligence</h3>
          </HeadingIcon>
          <Paragraph>Our expertise on AI software development services includes a wide range from creating customized business intelligence products like dashboards to customized report builders based on Microsoft’s Power BI.</Paragraph>
        </Card>
        <Card>
          <HeadingIcon>
            <FontAwesomeIcon icon={faRobot} style={{ marginRight: '10px' }} />
            <h3>AI Chatbot Development</h3>
          </HeadingIcon>
          <Paragraph>Creation of interactive AI chatbots and virtual assistants.</Paragraph>
        </Card>
      </Section1>
      <ImageContainer>
        <Image src={AIImage} alt="AIIMG" />
      </ImageContainer>

      <Section>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-cogs"></Icon>
            <h3>AI Model Integration And Optimization</h3>
          </HeadingIcon>
          <Paragraph>Our integration and optimization services include customized integration of AI software models and streamlining workflow for improved efficiency.</Paragraph>
        </SectionHalf>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-comments"></Icon>
            <h3>AI Conversational Tools</h3>
          </HeadingIcon>
          <Paragraph>We offer development of customized conversational AI tools that deliver high NLP/NLU accuracy and efficient communication.</Paragraph>
        </SectionHalf>
      </Section>

      <Section>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-laptop-code"></Icon>
            <h3>Custom AI Solutions</h3>
          </HeadingIcon>
          <Paragraph>Our custom AI solutions include the development of intent-based voice assistants, fraud detection tools, and more.</Paragraph>
        </SectionHalf>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-sliders-h"></Icon>
            <h3>Fine-Tuning Models</h3>
          </HeadingIcon>
          <Paragraph>We provide fine-tuning services for AI models to maintain their efficiency and accuracy using data augmentation techniques.</Paragraph>
        </SectionHalf>
      </Section>

      <Section>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-chart-line"></Icon>
            <h3>Predictive Analytics Solution</h3>
          </HeadingIcon>
          <Paragraph>Our predictive analytics solutions offer data-driven insights to help businesses make optimal decisions.</Paragraph>
        </SectionHalf>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-eye"></Icon>
            <h3>Computer Vision</h3>
          </HeadingIcon>
          <Paragraph>We develop computer vision solutions that enable visual recognition and categorization.</Paragraph>
        </SectionHalf>
      </Section>

      <Section>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-file-alt"></Icon>
            <h3>OCR Services</h3>
          </HeadingIcon>
          <Paragraph>Our Optical Character Recognition services help businesses streamline document processing and data extraction.</Paragraph>
        </SectionHalf>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-chart-bar"></Icon>
            <h3>Business Intelligence</h3>
          </HeadingIcon>
          <Paragraph>Our expertise on AI software development services includes a wide range from creating customized business intelligence products like dashboards to customized report builders based on Microsoft’s Power BI.</Paragraph>
        </SectionHalf>
      </Section>

      <Section>
        <SectionHalf>
          <HeadingIcon>
            <Icon className="fas fa-robot"></Icon>
            <h3>AI Chatbot Development</h3>
          </HeadingIcon>
          <Paragraph>We create interactive AI chatbots and virtual assistants that enhance customer engagement and support.</Paragraph>
        </SectionHalf>
      </Section>

      <LastSection>
        <Frameworks>Frameworks</Frameworks>
        <FrameworkImage>
          <img src={tensorflow} alt="tensorflow" style={{ width: '150px' }} />
          <div>TensorFlow</div>
        </FrameworkImage>
        <FrameworkImage>
          <img src={pytorch} alt="pytorch" style={{ width: '150px' }} />
          <div>PyTorch</div>
        </FrameworkImage>
        <FrameworkImage>
          <img src={keras} alt="keras" style={{ width: '150px' }} />
          <div>Keras</div>
        </FrameworkImage>
      </LastSection>

      <LastSection>
        <Platforms>Platforms</Platforms>
        <PlatformImage>
          <img src={MicrosoftAzure} alt="MicrosoftAzure" style={{ width: '100px' }} />
          <div>Microsoft Azure</div>
        </PlatformImage>
        <PlatformImage>
          <img src={Aws} alt="Aws" style={{ width: '100px' }} />
          <div>Amazon Web Services</div>
        </PlatformImage>
        <PlatformImage>
          <img src={Gcp} alt="Gcp" style={{ width: '100px' }} />
          <div>Google Cloud Platform</div>
        </PlatformImage>
      </LastSection>

      <LastSection>
        <Tools>Tools</Tools>
        <ToolImage>
          <img src={docker} alt="docker" style={{ width: '200px' }} />
          <div>Docker</div>
        </ToolImage>
        <ToolImage>
          <img src={kubernates} alt="kubernates" style={{ width: '250px' }} />
          <div>Kubernetes</div>
        </ToolImage>
        <ToolImage>
          <img src={ansible} alt="ansible" style={{ width: '200px' }} />
          <div>Ansible</div>
        </ToolImage>
      </LastSection>

      <LastSection>
        <AIModel>AI Model</AIModel>
        <AIModelImage>
          <img src={codex} alt="codex" style={{ width: '200px' }} />
          <div>Codex</div>
        </AIModelImage>
        <AIModelImage>
          <img src={jukebox} alt="jukebox" style={{ width: '200px' }} />
          <div>Jukebox</div>
        </AIModelImage>
        <AIModelImage>
          <img src={gpt3} alt="gpt3" style={{ width: '100px' }} />
          <div>GPT-3</div>
        </AIModelImage>
        <AIModelImage>
          <img src={clarity} alt="clarity" style={{ width: '100px' }} />
          <div>Clarity</div>
        </AIModelImage>
      </LastSection>

      <LastSection>
        <Programming>Programming Languages</Programming>
        <ProgrammingImage>
          <img src={python} alt="python" style={{ width: '200px' }} />
          <div>Python</div>
        </ProgrammingImage>
        <ProgrammingImage>
          <img src={apache} alt="apache" style={{ width: '250px' }} />
          <div>Apache</div>
        </ProgrammingImage>
        <ProgrammingImage>
          <img src={rpgm} alt="rpgm" style={{ width: '200px' }} />
          <div>R Programming</div>
        </ProgrammingImage>
      </LastSection>

      <LastSection>
        <Button>Learn More</Button>
      </LastSection>
    </div>
  );
};

export default AIdetails;
