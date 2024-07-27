import React from 'react';
import axios from 'axios';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleMessage = async (mes) => {
    try {
      // See: setupProxy.js: used to bypass CORS
      let res = await axios.get(`/api/v1/conversation.jsp?appid=G3JE7G-KV8VGPXP5R&i=${encodeURIComponent(mes)}`);

      

      if (res.data.result) {
        const botMessage = createChatBotMessage(res.data.result);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      } else {
        // Fallback response : Wolfram's API is not always stable, incase there is no response, we'll fetch the response from brainshop
        // See: react-chatbot-kit documentation as well
        const fallbackRes = await axios.get(`/br/get?bid=182816&key=2km3nFstbDcXtJcq&uid=1&msg=${encodeURIComponent(mes)}`);
        // debug console.log(fallbackRes)
        const fallbackMessage = createChatBotMessage(fallbackRes.data.cnt);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, fallbackMessage],
        }));
      }
    } catch (error) {
      // Handle any fetch error
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: { handleMessage },
        });
      })}
    </div>
  );
};

export default ActionProvider;
