import React, { useState } from "react";
import "./styles.css";

const allLevels = {
  Beginner: [
    {
      Title: "Skandagiri Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/489/967/af08887b633c61b007aff6865c0e607b/x1000gt/sunrise-trek-bmc-058.jpeg?1614612928",
      Elevation: "1450 metres",
      Description:
        "The night trek will take you through the green and rocky terrain of Skandagiri, as you climb up you’ll witness the picturesque misty mountain tops. You will be able to witness the beauty of the sunrise above the clouds when you reach the top and create some lasting memories.",
      Rating: "5 / 5"
    },
    {
      Title: "MakaliDurga Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/349/194/9db1b203605278a32f140721307c8421/x1200gt/Sunrise_uttari_betta_Trek6.jpeg?1569391742",
      Elevation: "1350 metres",
      Description:
        "Makalidurga provides an excellent terrain for trekking and a vantage point to view the vista below. The lake near River Hillock and a trains meandering just below make for a splendid view from the top of the hill.",
      Rating: "4 / 5"
    },
    {
      Title: "Savandurga Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/496/582/0fc62f8a4295b258c11d5dcf0b41d23e/original/savandurga-day-trek-bmc-02.jpg?1616500917",
      Elevation: "1200 metres",
      Description:
        "With beautiful natural surroundings and a cover of lush greenery and comparatively gentler slopes, Savandurga hills are best suited for those who have started trekking newly.",
      Rating: "4 / 5"
    }
  ],
  Moderate: [
    {
      Title: "Gokarna Beach Trek",
      Image:
        "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/yai2mhqwwc4wty72y3ttsa8pfqd4_GettyImages-860520176_352629352_606814961-920x615.jpg",
      Elevation: "14 kms(distance)",
      Description:
        "Gokarna beach trek is a dream destination for travelers with miles of golden sand beaches, jagged cliffs, outstanding view of sunset, undiscovered coves and quaint temples. The long sandy stretches of Om Beach and Kudle Beach are a delight for every beach lover. ",
      Rating: "4 / 5"
    },
    {
      Title: "Dudhsagar Waterfalls Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/430/160/1e380da80afe273fd03da4ab1fdaddb0/x1000gt/dudhsagarr_trek_goa_bmcadventures_04.jpg?1593875006",
      Elevation: "6 kms(distance)",
      Description:
        "The Four tiered waterfall located on the Mandovi River in the Indian state of Goa on Goa's border with Karnataka. The waterfall is located in the Bhagwan Mahavir Wild Life Sanctuary at Collem in South Goa in the western ghats. is one of the world's most exquisite falls. ",
      Rating: "5 / 5"
    },
    {
      Title: " Bandajae Arbi Falls Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/521/327/05e684204c602fc7d9b1dc77ce7f85bf/x1000gt/Bandaje_Falls_trek_bmc_09.jpg?1628669132",
      Elevation: "5000 ft",
      Description:
        "Ballalrayanadurga is a concealed fort on top of a dense forest in the Western Ghats which stands with shattered walls as a distant reminder of its past when it was built in 12th century by Hoysala Empire. Situated at the height of 5000 feet, the whole valley glitters with natural colors during sunsets and makes an ideal place for trekking and camping with mesmerizing views around.",
      Rating: "4 / 5"
    }
  ],
  Difficult: [
    {
      Title: "Kumaraparvatha Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/430/179/ce859f999274e87d36322869f8d71840/original/kumara_parvatha_trek_bmcadventures_01.jpg?1593760575",
      Elevation: "5600 ft",
      Description:
        "Are you ready to challenge your physical and mental limits ! Kumara Parvatha is not just a trek it's one of those journeys in life that one must embark upon to truly to be one with nature and themselves. Located in Kodagu/Coorg district at an elevation of 5600ft its second highest peak in the state, after Tadiyandamol. ",
      Rating: "4 / 5"
    },
    {
      Title: "Kodachadri Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/319/004/656fcfae403a9eedc0b96a11b77127c6/x400gt/Kodachadri_trek_bmcadventures3.jpg?1562316137",
      Elevation: "1,343 metres",
      Description:
        "The beauty of Kodachadri trek located in the middle of Mookambika National Park has existed since time immemorial. The hill get it name from a flowering plant and is also called “Jasmine of the hills”. It is a scenic peak with dense forest cover all around it.",
      Rating: "5 / 5"
    },
    {
      Title: "Kudremukh Trek",
      Image:
        "https://vl-prod-static.b-cdn.net/system/images/000/430/047/ab27a0440324d1eefbdcdac8c23a2164/x300gt/kudremukh_trek_bmcadventures_03.jpg?1600588022",
      Elevation: "6,207 ft",
      Description:
        "Enjoy trekking to the 3rd highest peak of Karnataka- Kudremukh Trek with an altitude of 6,207 feet.Catch the picturesque glimpses of the Horse’s face range of the Peak and Shola forest.Traverse through grasslands, forest and many small streams while you trek on the rugged trails",
      Rating: "5 / 5"
    }
  ]
};

const levelNames = Object.keys(allLevels);

export default function App() {
  const [levelList, setLevelList] = useState(allLevels.Difficult);

  function levelClickHandler(level) {
    const places = allLevels[level];
    setLevelList(places);
  }

  function getPlacesPost(places) {
    const Title = places.Title;
    const imageUrl = places.Image;
    const elevation = places.Elevation;
    const desc = places.Description;
    const rating = places.Rating;
    const htmlOfList = (
      <li className="list-places">
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{Title}</h3>
          <img className="content-image" alt="poster" src={imageUrl} />
          <p>Elevation : {elevation}</p>
          <p>{desc}</p>
          <p>Rating : {rating}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <div className="header">
        <img
          className="content-head"
          alt="poster "
          src="https://travelntrek.in/wp-content/uploads/2019/02/Travel-N-Trek-Logo.png"
        />
        {/* <h1>Trek Trials of Karnataka</h1> */}
        <h4>Check-out best trek trials in Karnataka for beginners.</h4>
      </div>
      <h4>Select your level to get started. </h4>
      {levelNames.map(function (level) {
        return (
          <button
            Key={level}
            className="btn"
            onClick={() => levelClickHandler(level)}
          >
            {level}
          </button>
        );
      })}
      <div>
        <ul className="fn-list">
          {levelList.map((places) => {
            return getPlacesPost(places);
          })}
        </ul>
      </div>
      <footer className="foot">
        <h2>Karnataka Tourism</h2>
        <h5>One State, Many worlds</h5>
      </footer>
    </div>
  );
}
