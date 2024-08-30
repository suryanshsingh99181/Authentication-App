import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import avatar from "../../assets/avatar.svg";
import { useContext } from "react";
import { ChatContext } from "../../context/chatContext";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipientUser(chat, user);
  const { onlineUsers } = useContext(ChatContext);

  const isOnline = onlineUsers?.some(
    (user) => user?.userId === recipientUser?._id
  );

  return (
    <div className="flex " role="button">
      <div className="flex ml-0">
        <div className="">
          <img src={avatar} className="h-11" />
        </div>
        <div className="text-content">
          <div className="name text-lg">{recipientUser?.name}</div>
          <div className="text-xs">Text Message</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="date text-sm">30-July</div>
        <div className="this-user-notification text-sm ml-6">2</div>
      </div>
      {{ isOnline } && <span className="text-green-500 ml-2"> O</span>}
    </div>
  );
};

export default UserChat;
