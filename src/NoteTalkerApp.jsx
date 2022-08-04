import { ListNotes } from "./components/ListNotes"
import { LazyMotion } from "framer-motion";
import { NoteProvider } from "./components/context/NoteProvider";
const loadFeatures = () =>
  import("./components/famer-motion-features").then((res) => res.default);


function NoteTalkerApp() {

  return (
    // <Note />


    <NoteProvider>

      <div className="App">
        <LazyMotion features={loadFeatures}>
          <ListNotes />
        </LazyMotion>
      </div>

    </NoteProvider>
  )
}

export default NoteTalkerApp
