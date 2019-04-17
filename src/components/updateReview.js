// import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { updateSmurf } from '../actions/index'

// class UpdateSmurf extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             age: '',
//             height: '',
//             name: ''
//         }
//     }
//     componentDidMount() {
//         const {smurfs, match} = this.props
//         const smurf = smurfs.find(smurf => smurf.id === Number(match.params.id))
//         this.setState(smurf)
//     }

//     inputHandler = e => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     submitHandler = e => {
//         e.preventDefault()
//         this.props.updateSmurf(this.state)
//         alert("Your smurf has updated");
//     }

//     render() {
//         return (

//             <form  onSubmit={this.submitHandler}>
//                 <input style={input} type="text" name='name' value={this.state.name} onChange={this.inputHandler} placeholder='Smurf Name' />
//                 <input style={input}type="number" name='age' value={this.state.age} onChange={this.inputHandler} placeholder='Smurf Age' />
//                 <input style={input}type="text" name='height' value={this.state.height} onChange={this.inputHandler} placeholder='Smurf Height' />
//                 <button style={button}type='submit'>Submit</button>
//             </form>

//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         smurfs: state.smurfs
//     }
// }

// export default connect(mapStateToProps,

//     { updateSmurf: updateSmurf }

//     )(UpdateSmurf)
