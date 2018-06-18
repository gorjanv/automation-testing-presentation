import React, { Component } from 'react';
import MenuBar from '../MenuBar';
import {
  ConstructorWrapper,
  Group,
  H1,
  Loader,
  ImageWrapper,
} from './helper-components';


class Constructor extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, isDone: false };

    this.make = this.make.bind(this);
  }

  make() {
    this.setState(() => ({ isLoading: true }));

    setTimeout(() =>
      this.setState(() => ({ isLoading: false, isDone: true })),
      4000
    );
  }

  render() {
    const { onSignOut } = this.props;
    const { isLoading, isDone } = this.state;

    if (isDone) {
      return (
        <div>
          <MenuBar onSignOut={onSignOut} />
          <ImageWrapper>
            <img id="image" src="/static/brodje.jpg" />
          </ImageWrapper>
        </div>
      );
    }

    return (
      <div>
        <MenuBar onSignOut={onSignOut} />
        <ConstructorWrapper>
          <H1 id="welcome">
            Make your own <em>broodje</em>!
          </H1>
    
          <Group>
            <legend>Choose bread</legend>
            <div>
              <input type="radio" name="bread" id="brown-bread" />
              <label htmlFor="brown-bread">Brown</label>
            </div>
            <div>
              <input type="radio" name="bread" id="white-bread" />
              <label htmlFor="white-bread">White</label>
            </div>
          </Group>

          <Group>
            <legend>Choose ingredients</legend>
            <div>
              <input type="checkbox" name="hummus" id="hummus" />
              <label htmlFor="hummus">Hummus</label>
            </div>
            <div>
              <input type="checkbox" name="ham" id="ham" />
              <label htmlFor="ham">Ham</label>
            </div>
            <div>
              <input type="checkbox" name="cheese" id="cheese" />
              <label htmlFor="cheese">Cheese</label>
            </div>
            <div>
              <input type="checkbox" name="salami" id="salami" />
              <label htmlFor="salami">Salami</label>
            </div>
          </Group>
          <div>
            <input type="button" id="make" value="Make it!" onClick={() => this.make()}/>
          </div>
        </ConstructorWrapper>
        {isLoading && (<Loader />)}
      </div>
    );
  }
};

export default Constructor;