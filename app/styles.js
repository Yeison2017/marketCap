import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: "#141414",
		alignItems: "center",
		flex: 1,
	},

	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%",
	},

	searchInput: {
		color: "#ffffff",
		borderBottomColor: "#4657ce",
		borderBottomWidth: 1,
		width: "40%",
		textAlign: "center",
		marginBottom: 10,
	},

	title: {
		color: "#ffffff",
		marginTop: 10,
		fontSize: 20,
	},

	list: {
		width: "90%",
	}

});