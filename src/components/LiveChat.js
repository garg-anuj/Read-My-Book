import "../style/liveChat.css";

const LiveChat = () => {
  return (
    <section className="liveChat">
      <div>Top Chat</div>
      <div>
        <ul>
          <li>
            <div className="msgProfileLogo">A</div>
          </li>
          <li>
            <p>
              the deep space network needs more bandwidth in order to transmit
              High quality footage in real time .
            </p>
          </li>
        </ul>
      </div>

      <div>
        <h1>Name</h1>
        <input placeholder="Enter Message" />
        <button type="submit">Send</button>
      </div>
    </section>
  );
};

export default LiveChat;
