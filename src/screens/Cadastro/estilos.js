import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background:{
        flex: 1,
        backgroundColor: "#F5DEA8",
        fontFamily: "Inter-Regular"
    },
    image: {
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
        resizeMode: "contain",
        width: 200,
        height: 200
    },
    titles:{
        color: '#397DC9',
        textAlign: "center",
        fontWeight: "bold"
    },
    input_box: {
        marginTop: '5%',
        marginLeft: '10%',
        paddingRight: 30
    },
    input_field:{
        backgroundColor: '#F5F2E6',
        textAlign: "left"
    },
    input_box_text: {
        color: "#575757",
        marginBottom: 5,
        fontSize: 15
    },
    button:{
        height: 45,
        width: 250,
        marginLeft: '20%',
        marginTop: '5%',
        backgroundColor: "#397DC9"
    }
})