import React from 'react';
import { View, Text, StyleSheet, Button, Image,  SafeAreaView, TextInput } from 'react-native';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';


const HomeScreen = props => {
  return (
    <View style={styles.screen}>
        <View style={styles.headerSection}>
            <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View>
          <MainButton style={styles.MainButton}>Contact Us</MainButton>
        </View>


        </View>
        <View>
          {/* <BodyText style={styles.BodyMainText}></BodyText> */}
          <View>
        <View>
            <View style = { styles.headerText }>
            <Text >Coming Soon</Text>
            </View>


            <Text style = { styles.body }>Bringing Muslims together</Text>
            </View>
        </View>

        </View>
        <View style={styles.rectangle}>
        <Image
          source={require('../assets/images/google-play.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/apple-store.png')}
          style={styles.image}
          resizeMode="cover"
        />

        </View>
        <View >
        <Image
          source={require('../assets/images/landing-image-2.png')}
          style={styles.landingImage}
          resizeMode="cover"
        />
        </View>
        <View>
        <View>
            <View style = { styles.headerText }>
            <Text >Coming Soon</Text>
            </View>


            <Text style = { styles.body }>Get Notified When we Launch</Text>
            </View>
        </View>
        <SafeAreaView>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.dontSpam}>Don’t worry, we won’t spam</Text>
    </SafeAreaView>
    <View >
        <Image
          source={require('../assets/images/landing-image-1.png')}
          style={styles.landingImage}
          resizeMode="cover"
        />
        </View>
        <View style={styles.footer}>
          <View style={styles.icons}>
          <Image
          source={require('../assets/images/facebook.png')}
          style={styles.icon}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/twitter.png')}
          style={styles.icon}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/instagram.png')}
          style={styles.icon}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/tiktok.png')}
          style={styles.icon}
          resizeMode="cover"
        />
        <Image
          source={require('../assets/images/youtube.png')}
          style={styles.icon}
          resizeMode="cover"
        />
          </View>

        </View>
        <View style={styles.footerNote}>
          <hr  style={{
            color: '#0B0B0B',

        }} />

          <Text>Copyright © 2022 Soora. All rights reserved</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(0deg, rgba(59, 89, 152, 0.1), rgba(59, 89, 152, 0.1)), rgba(255, 0, 0, 0.05)',
    filter: 'blur(344.294)',
    width: '100%',
    height: '100%',

  },
 headerSection:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '2%'

  },
  image: {
    width: 74,
    height: 15.82,
    flex: 'none',
    order: 0,
    flexGrow: 0
  },
  MainButton: {
    // marginLeft: '60%'
    width: 10,
    height: 10,
  },
  BodyMainText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: '2%'
  },
  headerText: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 15,
    width: 77,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'flex-end',
    color: '#0B0B0B',

},
body: {
  width: '327',
  height: '88',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 800,
  fontSize: 36,
  lineHeight: 44,
  display: 'flex',
  alignItems: 'flex-end',
  textAlign: 'center',
  textTransform: 'capitalize',
},
rectangle:{
  display: 'flex',
  flexDirection: 'row',
  width: 134.19,
  height: 38.8,
  backgroundColor: 'rgba(217, 217, 217, 0.5)',
  borderRadius: 4.85041,

},
landingImage: {
  width: 350.83,
  height: 359.36,
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
dontSpam: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 15,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
},
icons:{
  display: 'flex',
  flexDirection: 'row',
  width: 350.19,
  height: 38.8,
  justifyContent: 'center',
  alignItems: 'flex-end',
  marginTop: 40,

},
icon: {
  width: 35.83,
  height: 35.36,
  backgroundColor: 'linear-gradient(0deg, rgba(59, 89, 152, 0.1), rgba(59, 89, 152, 0.1)), rgba(255, 0, 0, 0.05)',
  filter: 'blur(344.294)',
  borderWidth: 2,
  borderRadius: 50,
  padding: 22,
  margin: 3
},
footerNote: {
  // borderTopWidth: (1, 'black', 'solid'),
  borderTopWidth: 1,
  width:'100%',
  borderColor: "black",
  marginTop: 10,

}

});

export default HomeScreen;