import { useEffect, useState } from "react";
import { Alert, ScrollView, Share, Text } from "react-native";
import { Modal, Pressable } from "react-native";
import { WebView } from "react-native-webview";
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import {
  clearScores,
  formatDate,
  getScores,
  openWebLink,
} from "../js/functions";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function HomeScreenModals() {
  //
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [showScoresModal, setShowScoresModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [scores, setScores] = useState({
    easy: [],
    hard: [],
  });
  //
  useEffect(() => {
    //
    const fetchScores = async () => {
      const scores = await getScores();
      setScores(scores);
    };
    fetchScores();
    //
  }, []);

  //
  const Theme = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showThemeModal}
        onRequestClose={() => {
          setShowThemeModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 20,
                width: windowWidth * 0.9,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../../assets/game-assets/button-themes.png")}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                THEMES
              </Text>
              <Pressable
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => setShowThemeModal(false)}
              >
                {({ pressed }) => (
                  <Image
                    source={require("../../assets/game-assets/button-x-close-1.png")}
                    style={{
                      opacity: pressed ? 0.5 : 1,
                      width: 35,
                      height: 35,
                    }}
                  />
                )}
              </Pressable>
            </View>
            <Text>THEME 1</Text>
            <Text>THEME 2</Text>
            <Text>THEME 3</Text>
            <Text>THEME 4</Text>
            <Text>THEME 5</Text>
            <Text>THEME 6</Text>
          </View>
        </View>
      </Modal>
    );
  };
  //
  const Scores = () => {
    //
    const ScoreCard = ({ title, data }) => {
      return (
        <>
          <Text
            style={{
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
              marginBottom: 10,
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
          <View style={styles.score_table_row_1}>
            <View style={styles.score_table_td_1}>
              <Text style={{ color: "white", fontWeight: "bold" }}>YOU</Text>
            </View>
            <View style={styles.score_table_td_1}>
              <Text style={{ color: "white", fontWeight: "bold" }}>BOT</Text>
            </View>
            <View style={styles.score_table_td_1}>
              <Text style={{ color: "white" }}>DRAWS</Text>
            </View>
            <View style={styles.score_table_td_1}>
              <Text style={{ color: "white" }}>PLAYS</Text>
            </View>
          </View>
          {data?.length > 0 ? (
            <>
              {data?.map((score, key) => {
                return (
                  <View style={styles.score_table_row_1} key={key}>
                    <View
                      style={[
                        styles.score_table_td_1,
                        {
                          backgroundColor:
                            score?.user > score?.bot ? "green" : "red",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.score_table_td_text_2,
                          { color: "white", fontWeight: "bold" },
                        ]}
                      >
                        {score?.user}
                      </Text>
                    </View>
                    <View
                      style={[
                        styles.score_table_td_1,
                        {
                          backgroundColor:
                            score?.user > score?.bot ? "red" : "green",
                        },
                      ]}
                    >
                      <Text
                        style={[
                          styles.score_table_td_text_2,
                          { color: "white", fontWeight: "bold" },
                        ]}
                      >
                        {score?.bot}
                      </Text>
                    </View>
                    <View style={styles.score_table_td_1}>
                      <Text style={styles.score_table_td_text_2}>
                        {score?.draw}
                      </Text>
                    </View>
                    <View style={styles.score_table_td_1}>
                      <Text style={styles.score_table_td_text_2}>
                        {score?.plays}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </>
      );
    };
    //
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showScoresModal}
        onRequestClose={() => {
          setShowScoresModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 20,
                width: windowWidth * 0.9,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../../assets/game-assets/button-scores.png")}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                SCORES
              </Text>
              <Pressable
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => setShowScoresModal(false)}
              >
                {({ pressed }) => (
                  <Image
                    source={require("../../assets/game-assets/button-x-close-1.png")}
                    style={{
                      opacity: pressed ? 0.5 : 1,
                      width: 35,
                      height: 35,
                    }}
                  />
                )}
              </Pressable>
            </View>

            <ScrollView style={{ height: windowHeight * 0.6 }}>
              <ScoreCard data={scores.easy} title={"EASY LEVEL"} />
              <View style={{ marginTop: 35 }} />
              <ScoreCard data={scores.hard} title={"HARD LEVEL"} />
            </ScrollView>

            <Pressable
              style={{
                marginTop: 35,
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}
              onPress={() => {
                Alert.alert(
                  "Clear Scores Data?",
                  "This action is irreversable?",
                  [
                    {
                      text: "No",
                      onPress: () => {
                        return false;
                      },
                      style: "cancel",
                    },
                    {
                      text: "Yes",
                      onPress: () => {
                        const fetchClearScores = async () => {
                          await clearScores();
                          const fetchScores = async () => {
                            const scores = await getScores();
                            setScores(scores);
                          };
                          fetchScores();
                        };
                        fetchClearScores();
                      },
                    },
                  ]
                );
              }}
            >
              {({ pressed }) => (
                <Text
                  style={{
                    color: "red",
                    fontSize: 15,
                    fontWeight: "bold",
                    opacity: pressed ? 0.5 : 1,
                  }}
                >
                  CLEAR ALL SCORES
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    );
  };
  //
  const About = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAboutModal}
        onRequestClose={() => {
          setShowAboutModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewAbout}>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 20,
                width: windowWidth * 0.9,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../../assets/game-assets/button-about.png")}
                  style={{
                    width: 35,
                    height: 35,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                ABOUT
              </Text>
              <Pressable
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                }}
                onPress={() => setShowAboutModal(false)}
              >
                {({ pressed }) => (
                  <Image
                    source={require("../../assets/game-assets/button-x-close-1.png")}
                    style={{
                      opacity: pressed ? 0.5 : 1,
                      width: 35,
                      height: 35,
                    }}
                  />
                )}
              </Pressable>
            </View>
            <ScrollView style={{ height: windowHeight * 0.8 }}>
              <WebView
                style={{
                  borderWidth: 2,
                  borderColor: "red",
                  height: 9500,
                  width: windowWidth,
                }}
                source={{
                  html: '<!DOCTYPE html><html lang="en">  <head>    <meta charset="UTF-8" />    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    <title>Privacy Policy</title>    <style>      body {        font-family: Arial, sans-serif;        margin: 20px;        line-height: 1.6;      }      h1 {        color: #333;      }      h2 {        color: #555;      }      p {        margin-bottom: 15px;      }      a {        color: #007bff;        text-decoration: none;      }      .caption-1 {        border: 1px solid silver;        padding: 10px;      }      .caption-1 > span {        font-size: 22px;        font-family: serif;        font-style: italic;        line-height: 35px;      }    </style>  </head>  <body>    <h1>Privacy Policy</h1>    <span> Last modified: December 21, 2023 </span>    <p>      This privacy policy governs your use of any software application      ("Application") for mobile devices that was created by      <b>MUNYA Design</b>.    </p>    <div class="caption-1">      <span>        What information does the Application obtain and how is it used?      </span>    </div>    <h2>User Provided Information</h2>    <p>      The Application obtains the information you provide when you download and      register a new account in the Application, in order to be able to function      properly. If you purchase the app from Google Play Store, we also have      access to information about your purchase. This information is stored by      Google Play. Please see their privacy policies for further details.    </p>    <p>      When you use the Application, you generally provide login credentials to      access 3rd party services and providers. This information is stored in      encrypted form locally on the device on which the Application is installed      and is never relayed back to <b>MUNYA Design</b>.    </p>    <p>      We may also use the information you provided us to contact you from time      to time to provide you with important information, required notices and      marketing promotions.    </p>    <h2>Automatically Collected Information</h2>    <p>      In addition, the Application may collect certain information      automatically, such as: the type of mobile device you use, your mobile      devices unique device ID, the IP address of your mobile device, your      mobile operating system, the type of mobile Internet browsers you use, and      information about the way you use the Application. See "Automatic Data      Collection and Advertising" section for examples.    </p>    <p>      If errors occur while using the Application, an error log can be sent back      to <b>MUNYA Design</b>. This error log contains non-personal data, such as      device model, operating system version, where in the Application the error      happened. This information is intended to assist further improvement of      the Application.    </p>    <p>      The Application uses third party services that may collect information      about you. Please see their privacy policies for further details    </p>    <ul>      <li>Google Play Services</li>      <li>Google Analytics for Firebase</li>      <li>Google Firebase Crashlytics</li>      <li>Google AdMob</li>    </ul>    <h2>Registration and authentication</h2>    <p>      By registering or authenticating, Users allow this Application to identify      them and give them access to dedicated services.    </p>    <p>      Depending on what is described below, third parties may provide      registration and authentication services. In this case, this Application      will be able to access some Data, stored by these third-party services,      for registration or identification purposes.    </p>    <p>      Some of the services listed below may also collect Personal Data for      targeting and profiling purposes; to find out more, please refer to the      description of each service.    </p>    <ul>      <li>Google OAuth (Google LLC)</li>      <li>        Google OAuth is a registration and authentication service provided by        Google LLC and is connected to the Google network.      </li>      <li>        Personal Data processed: Cookies, email address, first name, last name,        picture and various types of Data as specified in the privacy policy of        the service.      </li>      <li>Place of processing: United States - Google OAuth Privacy Policy.</li>    </ul>    <h2>Access to third-party accounts and data</h2>    <p>      This type of service allows this Application to access Data from your      account on a third-party service and perform actions with it.    </p>    <p>      These services are not activated automatically, but require explicit      authorization by the User.    </p>    <h2>Google Drive (Google LLC)</h2>    <p>      This service allows this Application to connect with the User\'s account on      Google Drive, provided by Google LLC.    </p>    <ul>      <li>        Personal Data processed: Data communicated while using the service.      </li>      <li>        Place of processing: United States - the Google Terms of Service and        Google Drive Additional Terms of Service.      </li>      <li>The way Application accesses, uses, stores, or shares user data:</li>      <li>        All file transfers and communications between your devices and cloud        storage service servers are encrypted, and do not go through Rhythm        Software servers. We do not collect and do not have access to your        files.      </li>      <li>        All cloud files are stored on your local devices and backed up to your        cloud storage service, we do not keep copy of any of your personal        files.      </li>    </ul>    <div class="caption-1">      <span>        Do third parties see and/or have access to information obtained by the        Application?      </span>    </div>    <p>      We will share your information with third parties only in the ways that      are described in this privacy statement. We may disclose User Provided and      Automatically Collected Information:    </p>    <ul>      <li>        as required by law, such as to comply with a subpoena, or similar legal        process;      </li>      <li>        when we believe in good faith that disclosure is necessary to protect        our rights, protect your safety or the safety of others, investigate        fraud, or respond to a government request;      </li>      <li>        with our trusted services providers who work on our behalf, do not have        an independent use of the information we disclose to them, and have        agreed to adhere to the rules set forth in this privacy statement.      </li>      <li>        to third party advertising networks and analytics companies as described        below under the Section entitled Automatic Data Collection and        Advertising.      </li>      <li>        if <b>MUNYA Design</b> is involved in a merger, acquisition, or sale of        all or a portion of its assets, you will be notified via a prominent        notice on our Web site of any change in ownership or uses of this        information, as well as any choices you may have regarding this        information.      </li>    </ul>    <h2>Automatic Data Collection and Advertising</h2>    <p>      We may use tools or third party analytical software to collect and use      certain non-personal data that does not enable us to identify you. The      types of non-personal data we may collect and use include, but are not      limited to: (i) mobile device type and device properties; (ii) mobile      device software platform and firmware; (iii) mobile phone carrier; (iv)      geographical data; and (v) other non-personal data as reasonably required      by us to enhance our services.    </p>    <p>      We reserve the right to use and disclose the collected non-personal data      in an anonymized and obfuscated way for purposes of advertisement by us or      our partners. We do not pass any personally identifiable information to ad      networks or advertisers.    </p>    <p>      We may work with analytics companies to help us understand how the      Application is being used, such as the frequency and duration of usage. We      also work with advertisers and third party advertising networks that need      to know how you interact with advertising provided in the Application.      Advertisers and advertising networks use some of the information collected      by the Application, including the unique identification ID of your mobile      device. To protect the anonymity of this information, we use an encryption      technology to help ensure that these third parties can\'t identify you      personally.    </p>    <h2>Children</h2>    <p>      We do not use the Application to knowingly solicit data from or market to      children under the age of 13. If a parent or guardian becomes aware that      his or her child has provided us with information without their consent,      he or she should contact us at      <a href="mailto:munyathedev@gmail.com">munyathedev@gmail.com</a> We will      delete such information from our files within a reasonable time.    </p>    <h2>Security</h2>    <p>      We are concerned about safeguarding the confidentiality of your      information. We provide physical, electronic, and procedural safeguards to      protect information we process and maintain. For example, we limit access      to this information to authorized employees and contractors who need to      know that information in order to operate, develop or improve our      Application. Please be aware that, although we endeavor to provide      reasonable security for information we process and maintain, no security      system can prevent all potential security breaches.    </p>    <h2>Changes</h2>    <p>      This Privacy Policy may be updated from time to time for any reason. We      will notify you of any changes to our Privacy Policy by posting the new      Privacy Policy at https://rhmsoft.com/privacy.html. You are advised to      consult this Privacy Policy regularly for any changes, as continued use is      deemed approval of all changes.    </p>    <h2>Your Consent</h2>    <p>      By using the Application, you are consenting to our processing of your      information as set forth in this Privacy Policy now and as amended by us.      "Processing," means using or touching information in any way, including,      but not limited to, collecting, storing, deleting, using, combining and      disclosing information in ways needed to ensure the proper functionality      of the Application and as described in this Privacy Policy.    </p>    <h2>Contact us</h2>    <p>      If you have any questions regarding privacy while using the Application,      or have questions about our practices, please contact us via email at      <a href="mailto:munyathedev@gmail.com">munyathedev@gmail.com</a>    </p>  </body></html>',
                }}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <View style={styles.horizontal_container}>
      <Theme />
      <Scores />
      <About />

      {/* <TouchableOpacity
        onPress={() => {
          setShowThemeModal(true);
        }}
        style={styles.modal_open_button}
      >
        <Image
          source={require("../../assets/game-assets/button-themes.png")}
          style={styles.modal_open_button_icon}
        />
        <Text style={styles.modal_open_button_text}>THEMES</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          setShowScoresModal(true);
        }}
        style={styles.modal_open_button}
      >
        <Image
          source={require("../../assets/game-assets/button-scores.png")}
          style={styles.modal_open_button_icon}
        />
        <Text style={styles.modal_open_button_text}>SCORES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setShowAboutModal(true);
        }}
        style={styles.modal_open_button}
      >
        <Image
          source={require("../../assets/game-assets/button-about.png")}
          style={styles.modal_open_button_icon}
        />
        <Text style={styles.modal_open_button_text}>ABOUT</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          const shareApp = async () => {
            try {
              const result = await Share.share({
                message:
                  "Hey.\nCheck out this cool Tic Tac Toe game. The AI bot 🤖 is really good at playing.\n\nhttps://play.google.com/store/apps/details?id=com.munya_m.tictactoeneon",
              });
              if (result.action === Share.sharedAction) {
                if (result.activityType) {
                  // shared with activity type of result.activityType
                } else {
                  // shared
                }
              } else if (result.action === Share.dismissedAction) {
                // dismissed
              }
            } catch (error) {
              Alert.alert(error.message);
            }
          };
          shareApp();
        }}
        style={styles.modal_open_button}
      >
        <Image
          source={require("../../assets/game-assets/button-share.png")}
          style={styles.modal_open_button_icon}
        />
        <Text style={styles.modal_open_button_text}>SHARE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          openWebLink(
            "https://play.google.com/store/apps/details?id=com.munya_m.tictactoeneon&pcampaignid=web_share"
          );
        }}
        style={styles.modal_open_button}
      >
        <Image
          source={require("../../assets/game-assets/button-rate-app.png")}
          style={styles.modal_open_button_icon}
        />
        <Text style={styles.modal_open_button_text}>RATE US</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontal_container: {
    display: "flex",
    marginBottom: 60,
    flexDirection: "row",
    alignItems: "flex-start",
    width: windowWidth * 1,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalView: {
    backgroundColor: "#230436ff",
    borderWidth: 1,
    borderColor: "white",
    width: windowWidth * 0.9,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewAbout: {
    backgroundColor: "#230436ff",
    borderWidth: 1,
    borderColor: "white",
    width: windowWidth,
    alignItems: "center",
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  score_table_row_1: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth * 0.8,
  },
  score_table_td_1: {
    borderWidth: 1,
    borderColor: "silver",
    padding: 5,
    width: (windowWidth * 0.8) / 4,
  },
  score_table_td_text_2: {
    color: "silver",
    fontSize: 12,
  },
  modal_open_button_icon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
  },
  modal_open_button_text: { color: "white", marginTop: 10, fontSize: 10 },
  modal_open_button: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});
