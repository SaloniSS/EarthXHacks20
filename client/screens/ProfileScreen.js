import React from "react";
import {
    Container,
    Header,
    Body,
    Title,
    Button,
    Form,
    Item,
    Input,
    Label,
    Text,
    View,
} from "native-base";
import { ImageBackground } from "react-native";
import CircleSlider from "../components/CircleSlider";

import gradientBkgd from "../assets/mainBkgd.png";

var styles = {
    wrapper: {
        alignContent: "flex-start",
    },
    bkgdImg: {
        resizeMode: "stretch",
        width: "100%",
        height: "100%",
    },
    heading: {
        color: "#fff",
        fontSize: 28,
        fontWeight: "bold",
    },
    username: {
        color: "#000000",
        fontSize: 24,
        fontWeight: "bold",
        padding: 5,
    },
    goal: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        paddingLeft: 5,
        paddingTop: 8,
        paddingBottom: 30,
    },
    circleBoi: {
        paddingBottom: 25,
        paddingLeft: 30,
    },
};

const ProfileScreen = (props) => {
    // don't use content because it is a ScrollView
    return (
        <View style={styles.wrapper}>
            <Header>
                <Title style={styles.heading}>Edit Your Profile</Title>
            </Header>
            <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
                <Text style={styles.username}>Username</Text>
                <Text style={styles.goal}>Set your daily point goal!</Text>
                <Form style={styles.boi}>
                    <Item style={styles.circleBoi}>
                        <CircleSlider
                            startGradient="#B5EAD7"
                            endGradient="#C7CEEA"
                            value={100}
                            onValueChange={(value) => console.log(value)}
                        />
                    </Item>
                    <Item>
                        <Button
                            onPress={() => props.navigation.navigate("Feed")}
                            style={{ alignSelf: "flex-start" }}
                        >
                            <Text>Continue</Text>
                        </Button>
                        <Button
                            onPress={() => props.navigation.navigate("Login")}
                            style={{ alignSelf: "flex-start" }}
                        >
                            <Text>Sign Out</Text>
                        </Button>
                    </Item>
                </Form>
            </ImageBackground>
        </View>
        /*<Container style={styles.boi}>
      <Header>
        <Body>
          <Title>Edit Your Profile</Title>
        </Body>
      </Header>
      <ImageBackground source={gradientBkgd} style={styles.bkgdImg}>
        <Form style={styles.boi}>
          <Item floatingLabel last>
            <Label style={styles.username}>Username</Label>
            <Input/>
          </Item>
          <Label>Set a daily point goal:</Label>
          <Item>
            <CircleSlider
              startGradient="#B5EAD7"
              endGradient="#C7CEEA"
              value={100}
              onValueChange={(value) => console.log(value)}
            />
          </Item>
          <Item>
            <Button
              onPress={() => props.navigation.navigate("Feed")}
              style={{ alignSelf: "flex-start" }}
            >
              <Text>Continue</Text>
            </Button>
            <Button
              onPress={() => props.navigation.navigate("Login")}
              style={{ alignSelf: "flex-start" }}
            >
              <Text>Sign Out</Text>
            </Button>
          </Item>
        </Form>
      </ImageBackground>
  </Container>*/
    );
};

export default ProfileScreen;
