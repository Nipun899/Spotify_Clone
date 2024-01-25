const DateOfBirth = ({ className }) => {
  return (
    <div className="mt-10">
      <div className="dobLabel mb-3 font-bold">
        <label htmlFor="dateOfBirth" >Enter your Date of Birth</label>
      </div>
      <div className=" dobParent flex  w-full gap-2">
        <div className="  w-1/3 font-semibold">
          <div className="mb-1">
            <label htmlFor="YYYY" className="ml-1 ">YYYY</label>
          </div>

          <div>
            <input type="text" className="w-full text-gray-400 border-gray-400 rounded border p-1 font-semibold" placeholder="YYYY" />
          </div>
        </div>
        <div className="  w-1/3 font-semibold">
          <div className="mb-1">
            <label htmlFor="MM" className="ml-1 ">Month</label>
          </div>
<select name="MM"  className="w-full text-gray-400 border-gray-400 rounded border p-1 font-semibold" >

  <option selected disabled className="text-gray-400">Month</option>
  <option className="text-black" value="January">January</option>
  <option className="text-black" value="February">February</option>
  <option className="text-black" value="March">March</option>
  <option className="text-black" value="April">April</option>
  <option className="text-black" value="May">May</option>
  <option className="text-black" value="June">June</option>
  <option className="text-black" value="July">July</option>
  <option className="text-black" value="August">August</option>
  <option className="text-black" value="September">September</option>
  <option className="text-black" value="October">October</option>
  <option className="text-black" value="November">November</option>
  <option className="text-black" value="December">December</option>
</select>
          <div>
            
          </div>
        </div>
        <div className="  w-1/3 font-semibold">
          <div className="mb-1">
            <label htmlFor="DD" className="ml-1 ">Date</label>
          </div>

          <div>
            <input type="number" min="1" max="31" className="w-full text-gray-400 border-gray-400 rounded border p-1 font-semibold" placeholder="DD" />
          </div>
        </div>

       
      </div>
    </div>
  );
};
export default DateOfBirth;
