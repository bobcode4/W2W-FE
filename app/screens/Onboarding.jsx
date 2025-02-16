import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import Button from "../components/Button";

const Onboarding = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < 2) {
      setActiveIndex(activeIndex + 1);
    } else {
      router.replace("/screens/SignUp");
    }
  };

  const slides = [
    {
      image: require("../../assets/images/onboarding_image1.jpeg"),
      title: "Rent",
      description:
        "Personalize your shopping experience by following top brands and getting exclusive items for your occasion.",
    },
    {
      image: require("../../assets/images/onboarding_image2.jpeg"),
      title: "Save",
      description:
        "Not interested in making a purchase right away? Save your selection from different brands for future purchase.",
    },
    {
      image: require("../../assets/images/onboarding_image3.jpeg"),
      title: "Ship",
      description:
        "Track your goods right from when it is shipped till it reaches you all with our app.",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image source={slides[activeIndex].image} style={styles.image} />

      {/* Indicator Dots */}
      <View style={styles.indicatorContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex ? styles.activeIndicator : {},
            ]}
          />
        ))}
      </View>

      {/* Text Content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{slides[activeIndex].title}</Text>
        <Text style={styles.description}>
          {slides[activeIndex].description}
        </Text>

        {/* Next Button */}
        <Button
          title={activeIndex === 2 ? "Create an Account" : "Next"}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "start",
    marginTop: 28,
    marginBottom: 12,
    marginHorizontal: 20,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D3D3D3",
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: "#424242",
    width: 24,
  },
  textContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#F77A7F",
  },
  description: {
    width: "364",
    height: "96",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: "#7F7F7F",
    marginVertical: 10,
  },
});

export default Onboarding;
