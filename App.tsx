import React from "react";
import { PayButton } from "@candypay/elements-mobile-sdk";
import { StyleSheet, Text, ToastAndroid, View } from "react-native";
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { CandyPay } from "@candypay/checkout-sdk";

export default function App() {
  const candypay = new CandyPay({
    api_keys: {
      public_api_key: "cp_public_3MoKzcFD_8Kj1omMYHxGCgFKyKcg1r7Yk",
      private_api_key: "cp_private_Xf3V26ep_GydrbWYamSgZG5o8YCVbstRA",
    },
    network: "mainnet",
    config: {
      collect_shipping_address: false,
    },
  });

  const intentHandler = async () => {
    const response = await candypay.paymentIntent.create({
      tokens: ["shdw"],
      items: [
        {
          name: "Test Product 1",
          image: "https://candypay.fun/assets/logo.png",
          price: 1,
          quantity: 1,
        },
      ],
    });

    return response;
  };

  const showToast = (msg: string) => {
    ToastAndroid.show(`${msg}`, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <PayButton
        network="mainnet"
        appIdentity={{ name: "My expo app" }}
        intentHandler={intentHandler}
        onSuccess={() => {
          showToast("Success");
        }}
        onError={(error) => {
          showToast(`Error: ${error as unknown as string}`);
        }}
        connectedWallet="Ss7aGjpwHm3Gg4MVNdXrm5C4GXuMvryCZUayjhPkouc"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    paddingTop: "50%",
    paddingBottom: "50%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
  },
});
