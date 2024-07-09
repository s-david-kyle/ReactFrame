import { Email } from "../models/Email";

type Props = {
  email: Email | null;
};

const EmailView = ({ email }: Props) => {
  return (
    <>
      <div>
        <div>Subject: {email?.subject}</div>
        <div>Body: {email?.body}</div>
      </div>
    </>
  );
};

export default EmailView;
