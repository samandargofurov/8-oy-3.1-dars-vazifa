

function Filter() {
  return (
    <>
        <div>
            <select className="select selected-bordered text-md bg-gray-200">
                <option>All</option>
                <option>Checked</option>
                <option>Unchecked</option>
            </select>
        </div>
    </>
  )
}

export default Filter