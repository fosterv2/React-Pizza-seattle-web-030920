import React from "react"

const PizzaForm = ({ topping, size, vegetarian, handleFormChange, handleFormSubmit }) => {
  const handleChange = event => {
    handleFormChange(event)
  }

  const handleSubmit = event => {
    handleFormSubmit(event)
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Pizza Topping"
              name="topping"
              value={topping}
              onChange={handleChange}
            />
        </div>
        <div className="col">
          <select value={size} className="form-control" name="size" onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Vegetarian"
              checked={vegetarian === true}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Not Vegetarian"
              checked={vegetarian === false}
              onChange={handleChange}
            />
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
