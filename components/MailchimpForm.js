import Mailchimp from "react-mailchimp-form";
import style from "./MailchimpForm.module.css";

const MailchimpForm = () => {
	return (
		<>
			<h1 className="title">Be the first to know!</h1>
			<div className={style.formContainer}>
				<Mailchimp
					action="https://tecomatwilight.us20.list-manage.com/subscribe/post?u=b4dbb5133c7fee517e2253af7&amp;id=7cb9893fd6"
					fields={[
						{
							name: "EMAIL",
							placeholder: "Email",
							type: "email",
							required: true,
						},
						{
							name: "FNAME",
							placeholder: "First name",
							type: "text",
							required: false,
						},
						{
							name: "LNAME",
							placeholder: "Last name",
							type: "text",
							required: false,
						},
					]}
				/>
			</div>
		</>
	);
};

export default MailchimpForm;
