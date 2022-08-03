
import { FaSearch} from 'react-icons/fa';
import { useForm } from '../hooks/useForm'

export const SearchList = (onSearch) => {
  const {searchNote, onInputChange }= useForm( {
    searchNote:''
  });
  const onsearchNote = (even)=>{
    even.preventDefault()
    if (searchNote.trim().length <= 1 ) return;

    onSearch(searchNote)
  }
  return (
    <>
      <div className="inputs">
      <i><FaSearch></FaSearch> </i>
        <form onSubmit={onsearchNote}>
         <input name= 'searchNote' type="text" className="form-control "  value={searchNote}  onChange={onInputChange} placeholder="  Search Note..."/>
        </form>

      </div>
    </>
  )
}
