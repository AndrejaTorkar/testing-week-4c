/*
Improvements: 
* color palette is implemented (see resources.txt)
* three buttons (primary and secondary) for restart game, next turn and game result are added 
* buttons are responsive according to the element's width size
* button text, naughts and crosses (N&Cs) are responsive according to the element's width size
* background has gradients from purple to coral and back
* buttons and N&Cs fields have shadows
* all elements and text are responsive
*/

// If the app seems broken when you run it, add a random comment in this code and save it a few times.
// This might solve the problem. If the app looks broken in the Simulator, please use Snack.

// Resources: 
// https://reactnative.dev/docs/dimensions
// https://docs.expo.dev/versions/latest/sdk/linear-gradient/
// https://colors.dopely.top/inside-colors/purple-color-palette-inspirations-with-names-hex-codes/
// https://stackoverflow.com/questions/57433489/creating-a-box-shadow-offset-without-additional-elements-or-double-box-shadows

// From template start
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
// From template end

// Resources: https://docs.expo.dev/versions/latest/sdk/linear-gradient/
import { LinearGradient } from 'expo-linear-gradient';

// aTorkar started writing code
let fieldSize = Dimensions.get('window').width;
let buttonSize = Dimensions.get('window').width

// aTorkar finished writing code
export default function App() {
  return (
    // aTorkar started writing code
    <View style={styles.containerMain}>
      <View style={styles.containerEmpty}>
      </View>

      <LinearGradient
        // Gradient for containerButtons
        colors={["#916ECA", "#f2698B"]} // Adjust colors as needed
        style={styles.containerButtons}>
        <View style={styles.buttonStyle}>
          <Text style={styles.buttonText}>RESTART GAME</Text>
        </View>
        <View style={[styles.buttonStyle, styles.secondaryButton]}>
          <Text style={styles.buttonText}>IT'S O'S TURN</Text>
        </View>
      </LinearGradient>

      <View style={styles.primaryButtonContainer}>
        <View style={[styles.buttonStyle, styles.primaryButton]}>
          <Text style={styles.buttonText}>PLAYER O WON!</Text>
        </View>
      </View>

      <LinearGradient
        colors={["#f2698B", "#916ECA"]}
        style={styles.containerGrid}>

        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.fieldText}>O</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>O</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>X</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.fieldText}>X</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>O</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>O</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.field}>
            <Text style={styles.fieldText}>X</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>X</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.fieldText}>O</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.containerEmpty}>
      </View>
      <StatusBar style="auto" />
    </View>
    // aTorkar finished writing code
  );
}


const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    direction: 'column',
    backgroundColor: 'white'
  },
  // aTorkar started writing code
  // Resources: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
  containerEmpty: {
    flex: 1,
    backgroundColor: "#916ECA",
  },

  containerButtons: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  buttonStyle: {
    width: buttonSize * 0.43,
    aspectRatio: 2,
    backgroundColor: "#fd9e7e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    // shaddow for iOS
    shadowOffset: {
      width: 5, 
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.9,
    // shaddow for Android
    elevation: 10,
  },

  secondaryButton: {
    backgroundColor: "#edba5e",
  },

  buttonText: {
    fontSize: fieldSize * 0.05,
    fontWeight: "bold",
    textAlign: "center"
  },

  primaryButtonContainer: {
    flex: 0.7,
    flexDirection: "row",
    backgroundColor: "#f2698B",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: "5%"
  },

  primaryButton: {
    width: buttonSize * 0.6,
    aspectRatio: 4,
    backgroundColor: "#ae38ff",
  },

  containerGrid: {
    flex: 4,
    alignItems: "center",
    paddingTop: "20%"
  },

  row: {
    flexDirection: "row",
  },

  field: {
    backgroundColor: "#edba5e",
    width: fieldSize * 0.25,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    margin: "1%",
    // shaddow for iOS
    shadowOffset: {
      width: 5, 
      height: 5,
    },
    shadowColor: "black",
    shadowOpacity: 0.9,
    // shaddow for Android
    elevation: 10,
  },

  fieldText: {
    fontSize: fieldSize * 0.15,
    fontWeight: "bold"
  },
  // aTorkar finished writing code
});