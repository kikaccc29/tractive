interface Activity {
  title: string;
  text: string;
  img: string;
  icon: string;
}

const activities: Activity[] = [
  {
    title: "Surfing",
    text: "OCEAN BEACH",
    img: "src/assets/imges/activity-1.png",
    icon: "src/assets/icons-filled/icon-surfing-filled.png",
  },
  {
    title: "Hiking",
    text: "TOREY PINES",
    img: "src/assets/imges/activity-2.png",
    icon: "src/assets/icons-filled/icon-hiking-filled.png",
  },
  {
    title: "Weights",
    text: "ENCINITAS",
    img: "src/assets/imges/activity-3.png",
    icon: "src/assets/icons-filled/icon-weights-filled.png",
  },
  {
    title: "Spinning",
    text: "GYM",
    img: "src/assets/imges/activity-4.png",
    icon: "src/assets/icons-filled/icon-spinning-filled.png",
  },
];

export default activities;