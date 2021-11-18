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
      <View style={styles.View_10414_182}>
        <View style={styles.View_10414_183} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee42/9150/3a78b23611cb857c65b286715c7288bd"
          }}
          style={styles.ImageBackground_10414_184}
        />
        <View style={styles.View_10414_185}>
          <Text style={styles.Text_10414_185}>Scan at entrance</Text>
        </View>
        <View style={styles.View_10414_186}>
          <Text style={styles.Text_10414_186}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            maecenas dui nunc sed in vestibulum in sem. Varius nulla lacus,
            imperdiet accumsan egestas vivamus. Tellus bibendum velit orci, sit
            vulputate vitae. Faucibus volutpat duis fermentum at volutpat
            malesuada scelerisque.
          </Text>
        </View>
        <View style={styles.View_10414_187}>
          <Text style={styles.Text_10414_187}>Eduardo Mccoy</Text>
        </View>
        <View style={styles.View_10414_188}>
          <Text style={styles.Text_10414_188}>VIP Pass</Text>
        </View>
      </View>
      <View style={styles.View_10414_189}>
        <View style={styles.View_10414_190}>
          <Text style={styles.Text_10414_190}>My ticket</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5473/8522/75a538e652ccd40f7a4021a4379eb31c"
          }}
          style={styles.ImageBackground_10414_191}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("115%") },
  View_10414_182: {
    width: wp("100%"),
    height: hp("107%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10414_183: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 53, 100, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  ImageBackground_10414_184: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("14%"),
    resizeMode: "cover"
  },
  View_10414_185: {
    width: wp("56%"),
    minWidth: wp("56%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("39%"),
    justifyContent: "center"
  },
  Text_10414_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_186: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_10414_186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_187: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("59%"),
    justifyContent: "flex-end"
  },
  Text_10414_187: {
    color: "rgba(175, 175, 175, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_188: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("55%"),
    justifyContent: "flex-end"
  },
  Text_10414_188: {
    color: "rgba(243, 53, 100, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10414_189: {
    width: wp("85%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    backgroundColor: "rgba(249, 251, 255, 0)",
    overflow: "hidden"
  },
  View_10414_190: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_10414_190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10414_191: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
