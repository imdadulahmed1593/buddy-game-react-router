const fakeData = [
  { img: "https://randomuser.me/api/portraits/men/59.jpg" },
  { img: "https://randomuser.me/api/portraits/men/41.jpg" },
  { img: "https://randomuser.me/api/portraits/men/90.jpg" },
  { img: "https://randomuser.me/api/portraits/men/15.jpg" },
  { img: "https://randomuser.me/api/portraits/men/57.jpg" },
  { img: "https://randomuser.me/api/portraits/men/66.jpg" },
  { img: "https://randomuser.me/api/portraits/men/74.jpg" },
  { img: "https://randomuser.me/api/portraits/men/35.jpg" },
  { img: "https://randomuser.me/api/portraits/men/37.jpg" },
  { img: "https://randomuser.me/api/portraits/men/27.jpg" },
  { img: "https://randomuser.me/api/portraits/men/6.jpg" },
  { img: "https://randomuser.me/api/portraits/women/30.jpg" },
  { img: "https://randomuser.me/api/portraits/women/63.jpg" },
  { img: "https://randomuser.me/api/portraits/women/22.jpg" },
  { img: "https://randomuser.me/api/portraits/women/56.jpg" },
  { img: "https://randomuser.me/api/portraits/women/20.jpg" },
  { img: "https://randomuser.me/api/portraits/women/57.jpg" },
  { img: "https://randomuser.me/api/portraits/women/47.jpg" },
  { img: "https://randomuser.me/api/portraits/women/58.jpg" },
  { img: "https://randomuser.me/api/portraits/women/82.jpg" },
  { img: "https://randomuser.me/api/portraits/women/52.jpg" },
  { img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { img: "https://randomuser.me/api/portraits/women/18.jpg" },
  { img: "https://randomuser.me/api/portraits/women/77.jpg" },
  { img: "https://randomuser.me/api/portraits/women/84.jpg" },
];

const shuffle = (a) => {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};

shuffle(fakeData);

export default fakeData;
