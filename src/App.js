import Accordion from "./components/simpleaccordian/Accordian.js";
import Generator from "./components/randomcolorgenerator/Generator.js";
import Rating from "./components/starrating/Rating.js";
import ImageSlider from "./components/image-slider/ImageSlider.js";
import LoadMore from "./components/load-more-data/LoadMore.js";
import TreeView from "./components/tree-view/TreeView.js";
import QrCode from "./components/qrcodegenerator/QrCode.js";
import LightDark from "./components/light-dark-mode/LightDark.js";
import Scroll from "./components/scroll-indicator/Scroll.js";
import TabTest from "./components/tabs/TabTest.js";
import ModalTest from "./components/custom-modal/ModalTest.js";
import GithubFinder from "./components/githubprofilefinder/GithubFinder.js";
import Search from "./components/search-autocomplete/Search.js";
import TicTac from "./components/tic-tac-toe/TicTac.js";
import FeatureFlagGlobalState from "./components/feature-flag/context/Context.js";
import FeatureFlag from "./components/feature-flag/FeatureFlag.js";
import Indexfetch from "./components/cutom-hooks/Indexfetch.js";
import Outclick from "./components/use-outsideClick/Outclick.js";
import CustomWindow from "./components/custom-window-resize/CustomWindow.js";
import ScrollTopBottom from "./components/ScrollToTopBottom/ScrollTopBottom.js";
import ScrollToSection from "./components/ScrollToTopBottom/ScrollToSection.js";

function App() {
  const stars = 5;
  return (
    <>
      {/*<Accordion />
        <Generator />
        <Rating stars = {stars}/>
        <ImageSlider/>
        <LoadMore />
        <TreeView/>
        <QrCode/>
        <LightDark/> 
        <Scroll/>
        <TabTest/>
        <ModalTest/>
        <GithubFinder/>
        <Search/>
        <TicTac/>
      
      <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState>
      <Indexfetch/>
      <Outclick/>
      <CustomWindow/>
      <ScrollTopBottom/>
      */}
      <ScrollToSection/>
    </>
  );
}

export default App;
