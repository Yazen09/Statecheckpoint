import React, { Component } from 'react';


export default class Person extends Component {
  constructor(props) {
    super(props);
    this.person = {
      FullName: 'Abouchendi Yazen',
      Bio: 'FullstackJs Developer',
      Profession: 'Software Engineer',
      img: 'https://img.freepik.com/free-photo/learning-concept-close-up-student-using-laptop-alibrary_1150-16609.jpg',
    };
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="person-container">
        <h2 className="person-name">{this.person.FullName}</h2>
        <p className="person-bio">{this.person.Bio}</p>
        <p className="person-profession">{this.person.Profession}</p>
        <img
          className="person-image"
          src={this.person.img}
          alt={`${this.person.FullName}'s Profile`}
        />
        <p className="person-timer">Time elapsed: {this.state.count}s</p>
      </div>
    );
  }
}
