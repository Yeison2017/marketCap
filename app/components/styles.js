import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	containerItem: {
		backgroundColor: "#121212",
		paddingTop: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	text: {
		color: "#ffffff",
	},

	textPrice: {
		color: "#ffffff",
		textAlign: "right",
	},

	textSymbol: {
		color: "#434343",
		textTransform: "uppercase",
	},

	image: {
		width: 30,
		height: 30,
	},

	containerNames: {
		marginLeft: 10,
	},

	coinName: {
		flexDirection: "row",
	},

	pricePercentage: {
		textAlign: "right",
	},

	priceUp: {
		color: "#00b5b9",
	},

	priceDown: {
		color: "#fc4422",
	}

});