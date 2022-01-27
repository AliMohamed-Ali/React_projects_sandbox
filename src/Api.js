import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [term, setTerm] = useState("javascript");
  const [debounce, setDebounce] = useState(term);
  const [result, setResult] = useState([]);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebounce(term);
    }, 1200);
    return () => {
      clearTimeout(timeOut);
    };
  }, [term]);
  useEffect(() => {
    const search = async () => {
      const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounce
        }
      });
      setResult(respond.data.query.search);
    };
    search();
  }, [debounce]);
  // useEffect(() => {
  //   const search = async () => {
  //     const respond = await axios.get("https://en.wikipedia.org/w/api.php", {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term
  //       }
  //     });
  //     setResult(respond.data.query.search);
  //   };
  //   if(!result.length){
  //     if (term) {
  //       search();
  //     };
  //   }else{
  //      const time = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 1000);
  //     return () => {clearTimeout(time)};
  //   }
  // }, [term,result.length]);
  // console.log(result);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="my-3">
            <label forhtml="search" className="form-label">
              Search Input
            </label>
            <input
              type="text"
              className="form-control"
              id="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
              </tr>
            </thead>
            <tbody>
              {result.map((el, ind) => (
                <tr key={el.pageid}>
                  <th scope="row">{ind + 1}</th>
                  <td>{el.title}</td>
                  <td>
                    <span dangerouslySetInnerHTML={{ __html: el.snippet }} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Api;
