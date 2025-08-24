const items = [
  {
    background: "assets/",
    icon: "assets/MKWd_Mario_Bros_Circuit_Icon.png",
    text: "Mario Bros. Circuit",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Crown_City_Icon.png",
    text: "Crown City",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Whistlestop_Summit_Icon.png",
    text: "Whistlestop Summit",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_DK_Spaceport_Icon.png",
    text: "DK Spaceport",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Desert_Hills_Icon.png",
    text: "Desert Hills",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Shy_Guy_Bazaar_Icon.png",
    text: "Shy Guy Bazaar",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Wario_Stadium_Icon.png",
    text: "Wario Stadium",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Airship_Fortress_Icon.png",
    text: "Airship Fortress",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_DK_Pass_Icon.png",
    text: "DK Pass",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Starview_Peak_Icon.png",
    text: "Starview Peak",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Sky-High_Sundae_Icon.png",
    text: "Sky-High Sundae",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Wario_Shipyard_Icon.png",
    text: "Wario Shipyard",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Koopa_Troopa_Beach_Icon.png",
    text: "Koopa Troopa Beach",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Faraway_Oasis_Icon.png",
    text: "Faraway Oasis",
  },
  {
    background: "assets/",
    icon: "assets/MKWd_Peach_Stadium_Icon.png",
    text: "Peach Stadium",
  },
  {
    background: "assets/",
    icon: "assets/Peach-Beach-MarioKartWorld.jpg",
    text: "Peach Beach",
  },
  {
    background: "assets/",
    icon: "assets/Salty_Salty_Speedway_Mario_Kart_World.jpg",
    text: "Salty Salty Speedway",
  },
  {
    background: "assets/",
    icon: "assets/Dino_Dino_Jungle_Mario_Kart_World.png",
    text: "Dino Dino Jungle",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Question_Ruins_icon.png",
    text: "Great ? Block Ruins",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Cheep_Cheep_Falls_icon.png",
    text: "Cheep Cheep Falls",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Dandelion_Depths_icon.png",
    text: "Dandelion Depths",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Boo_Cinema_icon.png",
    text: "Boo Cinema",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Dry_Bones_Burnout_icon.png",
    text: "Dry Bones Burnout",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Moo_Moo_Meadows_icon.png",
    text: "Moo Moo Meadows",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Choco_Mountain_icon.png",
    text: "Choco Mountain",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Toads_Factory_icon.png",
    text: "Toad's Factory",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Bowsers_Castle_icon.png",
    text: "Bowser's Castle",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Acorn_Heights_Icon.png",
    text: "Acorn Heights",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Mario_Circuit_icon.png",
    text: "Mario Circuit",
  },
  {
    background: "assets/",
    icon: "assets/MKWorld_Rainbow_Road_icon.png",
    text: "Rainbow Road",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const index = urlParams.get("index");
const selected = items[index];

document.querySelector("#preview-img").src = selected.icon;
document.querySelector("#name-text").textContent = selected.text;

function getRandomItem() {
  const randomIndex = Math.floor(Math.random() * 30);
  const selected = items[randomIndex];

  document.querySelector("#preview-img").src = selected.icon;
  document.querySelector("#name-text").textContent = selected.text;
}