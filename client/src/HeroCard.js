import React from 'react'

const HeroCard = () => {
  <div>
    <form>
          <div>
            <label>Name</label>
            <input type='text' onChange={this.onNameChange} />
          </div>
          <div>
            <label>Super Power</label>
            <input type='text' onChange={this.onSuperPowerChange} />
          </div>
          <div>
            <label>Image</label>
            <input type='text' onChange={this.onImgChange} />
          </div>
          <div>
            <label>Universe</label>
            <input type='text' onChange={this.onUniverseChange}/>
          </div>
          <div>
            <label>Nemesis</label>
            <input type='text' onChange={this.onNemesisChange}/>
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
  </div>
}

export default HeroCard