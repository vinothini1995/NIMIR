import React from 'react';
import cloud from '../img/cloud.jpg';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloud1 from '../img/cloud1.avif';
import azure from '../img/azure.png';
import aws from '../img/aws.jpg';
import googlecloud from '../img/google-cloud-3.svg';
import cloudlast from '../img/Cloud computing.png';

const Container = styled.div`
  width: 100%;
  
`;

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

   @media(max-width:320px){
   position:relative;
   width:100%;
    height:150px;
}
     @media(min-width:375px){
 position:relative;
   width:100%;
    height:200px;
}
     @media(min-width:768px){
 position:relative;
   width:100%;
    height:400px;
}
    @media(min-width:1440px){
 position:relative;
   width:100%;
    height:600px;
}
  // @media (min-width: 768px) {
  //   height: 400px;
  // }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media(max-width:320px){
  width: 100%;
  height: 100%;
  object-fit: cover;
  }
 
`;

const Textsection = styled.div`
  position: absolute;
  top: 50%;
  margin-left:-250px;
  // left: 10px;
  transform: translate(0, -50%);
  color: white;
  // text-align:left ;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 200px;

  @media (min-width: 768px) {
    // left: 30%;
    // text-align: center;
    // padding: 20px;
  }

  @media(max-width:320px){
  color:white;
  margin-left:10px;
  
  }

  @media(min-width:375px){
  color:white;
  margin-left:30px;
  }
  @media(min-width:768px){
  color:white;
  margin-left:20px;
  }
    @media(min-width:1440px){
  color:white;
  margin-left:30px;
  
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  // @media (min-width: 768px) {
  //   flex-direction: row;
  // }
`;

const TextContent = styled.div`
  flex: -1;
  padding: 20px;
  text-align: justify;
  
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
// @media(min-width:768px){
//  width: 100%;
//   height: auto;
//   max-width: 500px;

// }

`;

const Image1 = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px;
`;

const Section = styled.div`
  padding: 20px;
  text-align: center;
  img {
    margin: 10px;
    width: 100px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 80px;
      margin: 20px;
    }
  }
`;

const Cloud = styled.div`
  padding: 20px;
  text-align: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  width: 100%;
  text-align: left;

  @media (max-width: 320px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

const Clouddetails = () => {
  return (
    <Container>
      <Banner>
        <BannerImage src={cloud} alt='cloud' />
        <Textsection>
          <h1>Cloud Consulting</h1>
          <p>Optimizing your Cloud Strategy for long-term success</p>
        </Textsection>
      </Banner>
      <ContentContainer>
        <TextContent>
          <h3>Our Cloud consultants collaborate on strategic and technological solutions that ensure you’re driving maximum value from the Cloud.</h3>
          <p>If you’re currently held back by legacy IT systems or strategy, turning to Cloud technology could be the solution. A recent McKinsey study suggests that large enterprises are likely to have 60% of their environment in the Cloud by 2025 – and with the scalability, efficiency, agility, and cost savings the Cloud offers, it’s easy to see why.</p>
          <p>Our consultants leverage cross-domain expertise, partnerships with Cloud providers, and agile software delivery processes to accelerate your Cloud journey – whether you’re about to migrate or want to optimize existing processes. Our detailed IT audits and Cloud roadmaps are Cloud-agnostic and infra-agnostic to allow for flexible implementation across On-premise, Hybrid, Multi, or specific Cloud environments.</p>
        </TextContent>
        <ImageContent>
          <Image1 src={cloud1} alt='cloud1' />
        </ImageContent>
      </ContentContainer>

      <Section>
        <div>
            <h2>Platforms we work with</h2>
            <img src={azure} alt="azure" />
            <img src={aws} alt="aws" />
            <img src={googlecloud} alt="Google Cloud" />
        </div>
      </Section>

      <Cloud>
      <div>
        <h2>Cloud Migration & Application Modernization Services</h2>
        <p style={{textAlign:'justify'}}>
          NIMIR is dedicated to helping organizations tap into the capabilities
          of cloud-native architectures and contemporary technologies. By breaking
          down departmental silos and other innovation barriers, we enable your
          business to grow faster, scale effortlessly, and discover new value.
        </p>
      </div>
      <h2>Why Cloud Service?</h2>
      <CardContainer>
        <Card>
          <h6>Leader in Cloud services</h6>
          <p style={{textAlign:'justify'}}>
            Our expertise in end-to-end Cloud Strategy and Development allows us to
            create robust, scalable software solutions to tight timescales.
          </p>
        </Card>
        <Card>
          <h6>Handpicked experts</h6>
          <p style={{textAlign:'justify'}}>
            Our 50+ strong global team of experienced, certified consultants and developers
            is well-versed with the latest tools, technologies, and platforms.
          </p>
        </Card>
        <Card>
          <h6>Customer-centric approach</h6>
          <p style={{textAlign:'justify'}}>
            We design and build solutions that meet your unique business needs to help
            your organization thrive.
          </p>
        </Card>
        <Card>
          <h6>IP Ownership</h6>
          <p style={{textAlign:'justify'}}>
            We ensure strict compliance with industry protocols for complete confidentiality,
            helping safeguard intellectual property.
          </p>
        </Card>
      </CardContainer>
    </Cloud>
    <h1 style={{textAlign: 'center'}}>Cloud Architecture</h1>
    <ResponsiveImage src={cloudlast} alt="cloud architecture" />
    </Container>
  );
}

export default Clouddetails;
