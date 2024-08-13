import Competencies from "./components/Competencies/Competencies"
import CourseCover from "./components/CourseCover/CourseCover"
import CourseMaterial from "./components/CourseMaterial/CourseMaterial"
import CourseProgram from "./components/CourseProgram/CourseProgram"
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock"
import Header from "./components/Header/Header"
import MenuTabs from "./components/menuTabs/MenuTabs"


function App() {

  return (
    <>
     <Header/>
     <CourseCover/>
     <MenuTabs/>
     <DescriptionBlock/>
     <Competencies/>
     <CourseProgram/>
     <CourseMaterial/>
    </>
  )
}

export default App
