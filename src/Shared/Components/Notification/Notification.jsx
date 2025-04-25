import { notification } from "antd";

const Notification = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (type, message, description) => {
        api[type]({
            message,
            description,
            placement: 'topRight',
        });
    };
    return { openNotification, contextHolder}
}
export default Notification;