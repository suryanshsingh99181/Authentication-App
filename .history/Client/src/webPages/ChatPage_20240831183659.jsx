import { useContext } from "react";
import { ChatContext } from "../context/chatContext";
import { AuthContext } from "../context/AuthContext";
import UserChat from "../components/chat/UserChat";
import PotentialChats from "../components/chat/PotentialChats";
import ChatBox from "../components/chat/ChatBox";

const ChatPage = () => {
  const { user } = useContext(AuthContext);
  const { userChats, isUserChatsLoading, updateCurrentChat } =
    useContext(ChatContext);

  return (
    <div className="container mx-auto p-4 flex ">
      <PotentialChats />
      {userChats?.length < 1 ? null : (
        <main className="flex justify-evenly h-80 w-full bg-slate-200 border border-black">
          {isUserChatsLoading && <p>Loading chats...</p>}
          {userChats?.map((chat, index) => {
            return (
              <div key={index} onClick={() => updateCurrentChat(chat)}>
                <UserChat chat={chat} user={user} />
              </div>
            );
          })}
          <ChatBox />
        </main>
      )}
    </div>
  );
};

export default ChatPage;
