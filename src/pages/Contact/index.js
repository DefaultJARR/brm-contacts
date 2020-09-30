import React from "react";
import "./styles.scss";

// Components
import InputComponent from "../../components/Input";
import BubbleButton from "../../components/BubbleButton";

const Contact = (props) => {
	let { changePage, contact = null } = props;

	return (
		<div className="contact-page">
			<img
				src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-users-vector-icon-png-image_3725294.jpg"
				alt="user"
			/>
			<form className="contact-form" action="">
				<InputComponent
					inputName="contact-name"
					labelText="Nombre de Contacto"
				/>
				<InputComponent
					inputName="contact-phone"
					labelText="Número de Telefóno"
				/>
				<InputComponent
					inputName="contact-birth"
					labelText="Fecha de Nacimiento"
					type="date"
				/>
				<InputComponent
					inputName="contact-address"
					labelText="Dirección"
				/>
				<InputComponent
					inputName="contact-email"
					labelText="Correo Electrónico"
				/>
			</form>
			<BubbleButton
				icon="fas fa-slash"
				func={changePage}
				funcArgs={["list"]}
				styles={{ backgroundColor: "black", fontSize: "64px" }}
			/>
			<BubbleButton
				icon="fas fa-save"
				func={() => console.log("Saved")}
				funcArgs={["list"]}
				styles={{
					backgroundColor: "green",
					marginRight: "64px",
					fontSize: "35px",
				}}
			/>
			{contact && (
				<BubbleButton
					icon="fas fa-trash-alt"
					func={() => console.log("Deleted")}
					funcArgs={["list"]}
					styles={{
						backgroundColor: "red",
						marginRight: "130px",
						fontSize: "35px",
					}}
				/>
			)}
		</div>
	);
};

export default Contact;
