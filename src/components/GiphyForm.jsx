import {useRef} from 'react';

function GiphyForm(props) {

    const formObj = {
        searchRef: useRef()
      };

      const searchSubmit = (event) => {
          event.preventDefault();
          const input = formObj.searchRef.current.value;
          props.onSearchSubmit(input)
      }

      return (
        <form onSubmit={searchSubmit}>
          <label>
            <h2>Search Giphy</h2>
            <input
              placeholder="type your Giphy"
              type="text"
              ref={formObj.searchRef}
            />
          </label>
          <input className='button' type="submit" value="Submit" />
        </form>
      )

}

export default GiphyForm;