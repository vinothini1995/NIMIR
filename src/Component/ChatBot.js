import React from 'react'
import ChatBot from 'react-simple-chatbot';

import { ThemeProvider } from 'styled-components';

import { UnorderedList, ListItem, Link, Text, Box ,Heading} from '@chakra-ui/react';


function Chat() {

    const theme = {
        background: '#f5f8fb',
        botAvatar:"https://amanikandan1997.github.io/ReactJs_Portfolio/static/media/perfil.cf3c574335dd6f9dd291.png",
        headerBgColor: '#287FFB',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#287FFB',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
      };
    
    
    const FAQSection = () => (
      <Box>
        <Text fontWeight="bold" mb={4}>Here are some frequently asked questions:</Text>
        <UnorderedList>
          <ListItem>
            <Link onClick={() => handleAnswer('Digital')}>
             Digital Adoption
            </Link>
          </ListItem>
          <ListItem>
            <Link onClick={() => handleAnswer('finalYear')}>
              What are you currently studying?
            </Link>
          </ListItem>
          {/* Add more FAQ questions here if needed */}
        </UnorderedList>
      </Box>
    );
    
    const handleAnswer = (value, previousStep) => {
      switch (value) {
        case 'Digital':
          return {
            id: 'Digital Adoption',
            message: 'Digital Adoption is all about attaining a state where every employee in your organization is capable enough to utilize software, application, or tools to its fullest potential to carry out a variety of digital processes. ',
            trigger: 'faqList',
          };
        case 'finalYear':
          return {
            id: 'finalYearAnswer',
            message: 'I am currently in my final year of studying Bachelor of computer Application(BCA) ',
            trigger: 'faqList',
          };
        // Add more cases for other FAQ questions if needed
        default:
          break;
      }
    };
  return (
    <ThemeProvider theme={theme}>
      
    <ChatBot
    headerTitle="NMIR-Corporation Ai"
      speechSynthesis={{ enable: true, lang: 'en' }}
      recognitionEnable={true}
    steps={[
        {
            id: '1',
            message: '👋Hi Iam Nimir Ai Welcome to Our Page!  What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: 'welcome',
          },
      {
        id: 'welcome',
        message: 'How can I assist you today?',
        trigger: 'options',
      },
     
      {
        id: 'options',
        message: 'Here are some things you can do:',
        trigger: 'optionsList',
      },
      {
        id: 'optionsList',
        options: [
        
          { value: 'faq', label: 'Read FAQs', trigger: 'faq' },
          { value: 'bye', label: 'That\'s it for now. Goodbye!', trigger: 'end' },
        ],
      },
     
      {
        id: 'faq',
        message: 'Here are some frequently asked questions:',
        trigger: 'faqList',
      },
      // Define your FAQs list here
        {
          id: 'faqList',
          options: [
            { value: 'digital', label: 'What is Digital Adoption? How does a DAP impact digital transformation?', trigger: 'Digital Adoption' },
            { value: 'invest', label: 'Which digital technologies should you invest in?', trigger: 'invest' },
            { value: 'howdo', label: 'How do you know whether the digital transformation is working at your organization?', trigger: 'howdo' },
            
            { value: 'back', label: 'Back to main menu', trigger: 'options' },
          ],
        },
        {
          id: 'Digital Adoption',
          message: 'Digital Adoption is all about attaining a state where every employee in your organization is capable enough to utilize software, application, or tools to its fullest potential to carry out a variety of digital processes. ',
          trigger: 'faqList',
        },
        {
          id: 'invest',
          message: 'Choose technologies that can complement your unique digital transformation strategy, Organizations must know where they are headed and understand the requirements that will come up in the future to invest in tools and technology that can adapt according to the roadmap. ',
          trigger: 'faqList',
        },
        {
          id: 'howdo',
          message: 'Targeting your digital transformation plan allows you to accomplish early wins that help you gain momentum. Opportunities might be large or small but seeking them out increases your effectiveness as a change agent.  ',
          trigger: 'faqList',
        },
        
      {
        id: 'end',
        message: `
        Thank you for visiting Nmir Ai chatbot! 
        Feel free to explore more or get in touch with me anytime.
        If you have any inquiries about  work, don't hesitate to ask.
        Goodbye and have a great day!
        `,
        end: true,
      },
          
         
        ]}
        
       
        floating={true}
  />
  </ThemeProvider>
  )
}

export default Chat