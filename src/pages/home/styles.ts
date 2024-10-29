import styled from "styled-components";


export const Container = styled.div`
    .container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #E2e1DE;
}

.back-ground {
  background-color: #00A884;
  height: 20%;
  width: 100%;
  position: absolute;
  top: 0;
}

.chat-container {
  width: 95%;
  max-width: 1800px;
  height: 95%;
  background-color: #FFF;
  position: absolute;
  display: flex;
}

.chat-contacts {
  width: 30%;
  height: 100%;
  border-right: 1px solid #e6e6e6;
}

.chat-item {
  box-sizing: border-box;
  padding: 10px;
  border-top: 1px solid #F0F2F5;
  border-bottom: 1px solid #F0F2F5;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.title-chat-container {
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}

.image-profile {
  width: 60px;
  height: auto;
  border-radius: 50%;
}

.title-message {
  font-size: 18px;
}

.last-message {
  color: #808080;
}

.chat-options {
  width: 100%;
  height: 80px;
  background-color: #F0F2F5;
}

.chat-messages {
  flex: 1;
  background-image: url('./assets/zap-bg.png');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.chat-messages-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  overflow-y: auto;
}

*::-webkit-scrollbar {
  width: 6px;
  height: 20px;
}

*::-webkit-scrollbar-thumb {
  background-color: #8c8c8c;
  border-radius: 20px;
}

.chat-input-area {
  width: 100%;
  height: 70px;
  background-color: #F0F2F5;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.chat-input {
  width: 90%;
  background-color: #fff;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 4px;
  font-size: 16px;
} 

.send-message-icon {
  width: 40px;
  height: auto;
  cursor: pointer;
}

.user-container-message {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 20px;
  margin: 2px 0;
}

.right {
  justify-content: flex-end;
}

.left {
  justify-content: flex-start;
}

.user-my-message {
  background-color: #D9FDD3;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.user-other-message {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.user-name-message {
  color: #00A884;
}

.user-message {
  color: black;
}

.user-my-message.user-message-none {
  display: none;
}
`;