import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Blog() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const blogPosts = [
    {
      heading: 'MICROSOFT 365 COPILOT',
      date: 'May 26, 2023',
      content: `Microsoft 365 Copilot- your copilot for work. Copilot combines the power of large language models (LLMs) with your data in the Microsoft Graph—your calendar, emails, chats, documents, meetings, and more—and the Microsoft 365 apps to turn your words into the most powerful productivity tool on the planet. And it does so within our existing commitments to data security and privacy in the enterprise.

Right now, we spend too much time on the drudgery of work and too little time and energy on the work that ignites our creativity and sparks joy.

Copilot is integrated into Microsoft 365 in two ways. It works alongside you, embedded in the Microsoft 365 apps you use every day—Word, Excel, PowerPoint, Outlook, Teams, and more—to unleash creativity, unlock productivity, and uplevel skills. Today, we’re also announcing an entirely new experience: Business Chat. Business Chat works across the LLM, the Microsoft 365 apps, and your data—your calendar, emails, chats, documents, meetings, and contacts—to do things you’ve never been able to do before. You can give it natural language prompts like “tell my team how we updated the product strategy” and it will generate a status update based on the morning’s meetings, emails, and chat threads.

Recent GitHub data shows that among developers who have used GitHub Copilot, 88 percent say they are more productive, 77 percent say the tool helps them spend less time searching for information, and 74 percent say they can focus their efforts on more satisfying work. `,
      image: 'https://via.placeholder.com/150'
    },
    {
      heading: 'ENTERPRISE CHATGPT',
      date: 'May 26, 2023',
      content: `Enterprise ChatGPT refers to the application of OpenAI's ChatGPT model specifically tailored for enterprise environments. It is designed to provide advanced conversational capabilities, natural language understanding, and personalized interactions to meet the specific needs of businesses and organizations.

`,
      image: 'https://via.placeholder.com/150'
    },
    {
      heading: 'A heading that must span over two lines',
      date: 'May 26, 2023',
      content: 'This is some dummy text for a heading that spans two lines.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-aos="zoom-in" style={{ maxWidth: 600 }}>
            <h6 className="section-title bg-white text-center text-primary px-3">Our Blogs</h6>
            <h1 className="display-6 mb-4">Blog Section</h1>
          </div>

          <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-evenly' }}>
            {blogPosts.map((post, index) => (
              <div className="card" data-aos="zoom-in" key={index}>
                <div className="card-image"></div>
                <div className="heading">
                  {post.heading}
                  <div className="category" onClick={() => openModal(post)}> Read More </div>
                  <div className="author">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Blog Post Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
        <h2>{modalContent.heading}</h2>
        <p>{modalContent.content}</p>
        <img src={modalContent.image} alt={modalContent.heading} />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
}

export default Blog;
