import SendbirdApp from "@sendbird/uikit-react/App";
import "@sendbird/uikit-react/dist/index.css";
import withSendbird from "@sendbird/uikit-react/withSendbird";
import sendbirdSelectors from "@sendbird/uikit-react/sendbirdSelectors";
const Chat = (props) => {
    const sdk = sendbirdSelectors.getSdk(props);
    return (<SendbirdApp appId={props.config.APP_ID} userId={props.config.USER_ID} />);
}
const ChatWithSendbird = withSendbird(Chat)
export default ChatWithSendbird;
