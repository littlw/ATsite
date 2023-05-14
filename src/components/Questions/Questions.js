import React from "react";
import './Questions.css'

const Questions = () => {
    return (
     <div className="bg-yellow b i ba">
        <form className="ml3 mt3 mr3" id="form">
          <label className="f4 f3-l">Как давно без парня? </label>
        <div className="form-control mt3">
          <input type="radio" name="times" value="5min" required/>
          <label className="f4 f3-l" htmlFor="5min" >5min</label>
          <input type="radio" name="times" value="10sec" required/>
          <label className="f4 f3-l" htmlFor="10sec" >10sec proshlo pizdec ne derzhit</label>
          <input type="radio" name="times" value="1year" required/>
          <label className="f4 f3-l" htmlFor="1year">1year</label>
        </div>
        <div className="mt3">
          <label className="f4 f3-l" htmlFor="openquestion">Карьера или семья?</label>
          <textarea className="f4 f3-l mt3 " id="openquestion" name="openquestion" placeholder="..." required></textarea> 
          <br/>
        </div>
        <div className="tc">
         <input type="submit" value={'submit'} form="form"/>
        </div>
      </form>
  </div>
  );
}

export default Questions;