import React from 'react';
import { View, Text, StyleSheet, Button, Image,  SafeAreaView, TextInput,TouchableOpacity, } from 'react-native';
import MainButton from '../components/MainButton';



const HomeScreen = props => {
  return (
    <View style={styles.screen}>
        <View style={styles.headerSection}>
            <Image
          source={require('../assets/images/logo.png')}
          style={styles.imageLogo}
          resizeMode="cover"
        />
        <View>
          <MainButton style={styles.MainButton}>Contact</MainButton>
        </View>
        </View>
        <View>
          <View>
        <View style={styles.TextContainer}>
            <View style = { styles.headerText }>
              <View style={styles.line}></View>
            <Text style={styles.smallText}>Coming Soon</Text>
            </View>
            <Text style = { styles.body }>Bringing Muslims together</Text>
            </View>
        </View>
        </View>
        <View style={styles.rectangle}>
          <TouchableOpacity>
              <Image
              source={require('../assets/images/google-play.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <TouchableOpacity>
              <Image
              source={require('../assets/images/apple-store.png')}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>

        </View>
        <View style={styles.landingSection}>
        <Image
          source={require('../assets/images/landing-image-2.png')}
          style={styles.landingImage}
          resizeMode="cover"
        />
        </View>
        <View>
        <View style={styles.notifyContainer}>
            <View style = { styles.headerText }>
              <View style={styles.line}></View>
            <Text style={styles.smallText}>Coming Soon</Text>
            </View>
            <Text style = { styles.NotifyBody }>Get Notified When we Launch</Text>
            </View>
        </View>
        <SafeAreaView style={styles.container1}>
        <View style={styles.firstBox}>
        <View style={styles.row}>
          <TextInput
            placeholderTextColor="gray"
            style={styles.input} />
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1}>Notify Me</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.dontSpam}>Don’t worry, we won’t spam</Text>
    </SafeAreaView>
    <View >
        <Image
          source={require('../assets/images/landing-image-1.png')}
          style={styles.landingImage}
          resizeMode="cover"
        />
        </View>
        <TouchableOpacity style={styles.footer}>
          <View style={styles.icons}>
        <TouchableOpacity style={styles.social}>
            <Image
            source={require('../assets/images/facebook.png')}
            style={styles.icon}
            resizeMode="cover"
          />
        </TouchableOpacity>
         <TouchableOpacity style={styles.social}>
          <Image
            source={require('../assets/images/twitter.png')}
            style={styles.icon}
            resizeMode="cover"
          />
         </TouchableOpacity>
         <TouchableOpacity style={styles.social}>
          <Image
            source={require('../assets/images/instagram.png')}
            style={styles.icon}
            resizeMode="cover"
          />
         </TouchableOpacity>
       <TouchableOpacity style={styles.social}>
        <Image
            source={require('../assets/images/tiktok.png')}
            style={styles.icon}
            resizeMode="cover"
          />
       </TouchableOpacity>

        <TouchableOpacity style={styles.social}>
          <Image
            source={require('../assets/images/youtube.png')}
            style={styles.icon}
            resizeMode="cover"
          />
        </TouchableOpacity>

          </View>
        </TouchableOpacity>
        <View style={styles.footerNote}>
          <Text style={styles.text}>Copyright © 2022 Soora. All rights reserved</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    height: '100%',
    padding: '1%'

  },
  imageLogo: {
    width: 74,
    height: 15.82,
    flex: 'none',
    order: 0,
    flexGrow: 0,

  },
  image: {
    width: 160.83,
    height: 50.82,
    flex: 'none',
    order: 0,
    flexGrow: 0,
    marginRight: 10
  },
  MainButton: {
    width: 10,
    height: 10,
  },
  landingSection: {
    marginTop: 30
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 15,
    width: 120,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 15,
    color: '#0B0B0B',
    marginTop: 5,
    marginBottom: 10,
},
smallText:{
  clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
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
NotifyBody: {

    width: '200',
    height: '88',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: 30,
    lineHeight: 44,
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'center',
    textTransform: 'capitalize',
},
TextContainer: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,

},
line: {
  borderTopWidth: 1,
  width:'15%',
  borderColor: "#0B0B0B",
  marginBottom: 8,
  marginRight: 10
},
notifyContainer: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,

},
rectangle:{
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '80%',
  height: 38.8,
  backgroundColor: 'rgba(217, 217, 217, 0.5)',
  borderRadius: 4.85041,
  marginTop: 15

},
landingImage: {
  width: 350.83,
  height: 411.36,
  marginTop: 30
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
  width: 24.83,
  height: 24.36,
  backgroundColor: 'linear-gradient(0deg, rgba(59, 89, 152, 0.1), rgba(59, 89, 152, 0.1)), rgba(255, 0, 0, 0.05)',
  filter: 'blur(344.294)',
  padding: 15,
  margin: 3
},
footerNote: {
  borderTopWidth: 1,
  width:'100%',
  borderColor: "#0B0B0B",
  marginTop: 10,
  alignItems: 'flex-end',
  justifyContent: 'center',

},
footer: {
  marginTop: 40
},
social: {
  padding: 3,
  borderWidth: 1,
  borderRadius: 50,
  margin: 5
},
text: {
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 15,
  lineHeight: 15,
  display: 'flex',
  width: 330,
  height: 30,
  marginTop: 15,
  marginBottom: 6,

},
container1: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 8,
  padding: 8,
},
buttonText1:{
  textDecorationLine:"none",
  clear: 'both',
  display: 'inline-block',
  width: '57',
  height: '15',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: 12,
  lineHeight: 15,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  color: 'white',
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 13,
  lineHeight: 15,
  padding: 6,
},
input: {
  flex: 2,
  borderRadius:50,
},
button1: {
  flex: 0.5,
  alignItems: 'center',
  backgroundColor: '#000000',
  filter: 'blur(344.294)',
  borderRadius: 100,
  padding: (6),
  marginRight: 5,
  width: 150

},
firstBox: {
  paddingBottom: 2,
  top:-2,
  borderRadius:5
},
row: {
  flexDirection: 'row',
  width: '90%',
  backgroundColor: 'white',
  padding:3,
  borderRadius: 100,
  borderWidth: 1,
  marginLeft: 15,
  backgroundColor: 'linear-gradient(0deg, rgba(59, 89, 152, 0.1), rgba(59, 89, 152, 0.1)), rgba(255, 0, 0, 0.05)',
},

});

export default HomeScreen;