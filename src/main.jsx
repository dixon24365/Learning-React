import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppObject from './Card_practice/AppObject'
// import AppFormPractice from './AppFormPractice'
// // import './index.css'
// import AppContact from './AppContact'
// // import AppTravel from './AppTravel'
// // import AppTurtles from './AppTurtles'
// import Joke from '../Jokes/joke'
// import ChefHeader from '../chef_claude/header'
// import Form from '../chef_claude/form'
// // import AppClick from './AppClick'
// // import AppState from './changeState'
// import StateCount from './stateCount'
// // import AppTernary from './AppTernary'
// // import AppArray from './AppArray'
// // import TeamMember from '../Solo_projects/Card_Generator/TeamMember'
// // import Team from '../Solo_projects/Card_Generator/Team'
// import AppMessages from './AppMessages'
// import AppHello from './Hello/AppHello'
import AppSound from './Sound_pads_challenge/AppSound'

createRoot(document.getElementById('root')).render(
  <StrictMode>

   {/* <AppContact />  */}
   {/* <AppTravel/> */}
   {/* <AppTurtles/> */}
   {/* <Joke/> */}
    {/* <ChefHeader/> */}
     {/* <Form/> */}
     {/* <AppState/> */}
   {/* <StateCount/> */}
     {/* <AppTernary/> */}
     {/* <Team/> */}
     {/* <AppArray/> */}
     {/* <AppObject/> */}
     {/* <AppFormPractice/> */}
     {/* <AppMessages/> */}
    {/* <AppHello/> */}
    <AppSound darkMode = {false}/>
  </StrictMode>,
)
