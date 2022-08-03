import { ListNotes } from "./components/ListNotes"
import { LazyMotion } from "framer-motion";
const loadFeatures = () =>
  import("./components/famer-motion-features").then((res) => res.default);


function NoteTalkerApp() {

  return (
    // <Note />
    <div className="App">
      <LazyMotion features={loadFeatures}>
        <ListNotes />
      </LazyMotion>
    </div>

  )
}

export default NoteTalkerApp
