import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_10413_4}>
        <View style={styles.View_10413_5}>
          <Text style={styles.Text_10413_5}>Latino</Text>
        </View>
        <View style={styles.View_10413_6} />
        <View style={styles.View_10413_7}>
          <Text style={styles.Text_10413_7}>BARCELONA</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a27/6422/148a62d040106614890cb88c8f5708c0"
          }}
          style={styles.ImageBackground_10413_8}
        />
        <View style={styles.View_10413_9}>
          <Text style={styles.Text_10413_9}>La Gringa</Text>
        </View>
        <View style={styles.View_10413_10}>
          <Text style={styles.Text_10413_10}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_11}>
          <Text style={styles.Text_10413_11}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/46dc/a1efc0bb71d27dec361583a2c2c16ed9"
          }}
          style={styles.ImageBackground_10413_12}
        />
        <View style={styles.View_10413_13}>
          <Text style={styles.Text_10413_13}>El Pachuco</Text>
        </View>
        <View style={styles.View_10413_14}>
          <Text style={styles.Text_10413_14}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_15}>
          <Text style={styles.Text_10413_15}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8034/2bd4/015feb7904c77780ada70b6885dab9ed"
          }}
          style={styles.ImageBackground_10413_16}
        />
        <View style={styles.View_10413_17}>
          <Text style={styles.Text_10413_17}>Taco Alto Born</Text>
        </View>
        <View style={styles.View_10413_18}>
          <Text style={styles.Text_10413_18}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_19}>
          <Text style={styles.Text_10413_19}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c5/2f12/6e86a17be1709e8c47a12382cd7f5c44"
          }}
          style={styles.ImageBackground_10413_20}
        />
        <View style={styles.View_10413_21}>
          <Text style={styles.Text_10413_21}>El Tamarindo</Text>
        </View>
        <View style={styles.View_10413_22}>
          <Text style={styles.Text_10413_22}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_23}>
          <Text style={styles.Text_10413_23}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4839/54b9/7590ff9afa251649c8781c0b2bff1345"
          }}
          style={styles.ImageBackground_10413_24}
        />
        <View style={styles.View_10413_25}>
          <Text style={styles.Text_10413_25}>La Taqueria</Text>
        </View>
        <View style={styles.View_10413_26}>
          <Text style={styles.Text_10413_26}>Mexican-American</Text>
        </View>
        <View style={styles.View_10413_27}>
          <Text style={styles.Text_10413_27}>€15/person</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b07/af8e/30b8bd1206f844dd30d4c64487c96e8f"
          }}
          style={styles.ImageBackground_10413_28}
        />
        <View style={styles.View_10413_29}>
          <Text style={styles.Text_10413_29}>La Fabrica del Tacos</Text>
        </View>
        <View style={styles.View_10413_30}>
          <Text style={styles.Text_10413_30}>Best nachos in town</Text>
        </View>
        <View style={styles.View_10413_31}>
          <Text style={styles.Text_10413_31}>€15/person</Text>
        </View>
        <View style={styles.View_10413_32} />
        <View style={styles.View_10413_33} />
        <View style={styles.View_10413_34}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60dc/78b0/ba45f4e1d386355aa7729816786f4c79"
            }}
            style={styles.ImageBackground_10413_35}
          />
          <View style={styles.View_10413_36} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 244, 244, 1)" },
  View_2: { height: hp("126%") },
  View_10413_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("126%"),
    minHeight: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10413_5: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("18%"),
    justifyContent: "flex-end"
  },
  Text_10413_5: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_6: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("12%"),
    backgroundColor: "rgba(255, 230, 0, 1)"
  },
  View_10413_7: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("12%"),
    justifyContent: "center"
  },
  Text_10413_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_8: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  View_10413_9: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_10413_9: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_10: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_10413_10: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_11: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_10413_11: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_12: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("25%"),
    resizeMode: "cover"
  },
  View_10413_13: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_10413_13: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_14: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_10413_14: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_15: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_10413_15: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_16: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("58%"),
    resizeMode: "cover"
  },
  View_10413_17: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_10413_17: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_18: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_10413_18: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_19: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_10413_19: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_20: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("58%"),
    resizeMode: "cover"
  },
  View_10413_21: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_10413_21: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_22: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_10413_22: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_23: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("85%"),
    justifyContent: "flex-start"
  },
  Text_10413_23: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_24: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("91%"),
    resizeMode: "cover"
  },
  View_10413_25: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("112%"),
    justifyContent: "flex-start"
  },
  Text_10413_25: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_26: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_10413_26: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_27: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_10413_27: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10413_28: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("91%"),
    resizeMode: "cover"
  },
  View_10413_29: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("112%"),
    justifyContent: "flex-start"
  },
  Text_10413_29: {
    color: "rgba(70, 70, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_30: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("115%"),
    justifyContent: "flex-start"
  },
  Text_10413_30: {
    color: "rgba(84, 84, 84, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_31: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("118%"),
    justifyContent: "flex-start"
  },
  Text_10413_31: {
    color: "rgba(0, 54, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10413_32: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_10413_33: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("25%")
  },
  View_10413_34: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_10413_35: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_10413_36: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
