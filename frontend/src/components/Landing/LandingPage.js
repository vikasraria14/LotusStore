import Slideshow from "./SlideShow";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import CategoryBox from "./CategoryBox";
import { useHistory, Link } from "react-router-dom";

const LandingPage = () => {
    const category={
        category:"Boquet"
    }
    const history=useHistory()
    const checkLoggedIn=()=>{
      const username = window.localStorage.getItem("username")
      if(username)
      {

      }
      else
      {
          history.push('/login')
      }
  }
  checkLoggedIn()
  return (
    <div>
      <Header />
      <Slideshow />
      <div className="categories">
        <Link className="categoryBox category1" to={{ pathname: '/', state: { category:"Boquet" } } }>
          <CategoryBox name={"Boquet"} />
        </Link>
        <Link className="categoryBox category2" to={{ pathname: '/', state: { category:"Decor" } }}>
          <CategoryBox name={"Decors"}/>
        </Link>
        <Link className="categoryBox category3" to={{ pathname: '/', state: { category:"LaptopSkin" } }}>
          <CategoryBox  name={"Laptop Skins"}/>
        </Link>
      </div>
      <div className="categories ">
        <Link className="categoryBox category4" to={{ pathname: '/', state: { category:"mug" } }}>
          <CategoryBox  name={"Mugs"}/>
        </Link>
        <Link className="categoryBox category5" to={{ pathname: '/', state: { category:"Painting" } }}>
          <CategoryBox  name={"Paintings"}/>
        </Link>
        <Link className="categoryBox category6" to={{ pathname: '/', state: { category:"Shirt" } }}>
          <CategoryBox  name={"Shirts"}/>
        </Link>
      </div>

      <Footer />
    </div>
  );
};
export default LandingPage;
