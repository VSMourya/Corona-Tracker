import React from 'react';
import { Cards, PickCountry, Charts } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
// import { styled } from '@material-ui/core/styles';
import image1 from './images/virus.png';
import { Typography } from '@material-ui/core';

// import image2 from './images/thankyou.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
    globalCases : ''
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data, globalCases : data.confirmed });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  }

  render() {
    const { data, country , globalCases } = this.state;
    console.log(globalCases);
    console.log(data);
    return (
      
      <div className={styles.container}>
        <a href='https://pngtree.com/so/covid19'  target="_blank" rel="noopener noreferrer" ><img className={styles.image} src={image1} alt="COVID-19" /></a>
        <PickCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country = {country} globalCases={globalCases}/>
        <Typography className = {styles.typo} gutterBottom><h3> { country ? country : "Worldwide" } COVID Stats </h3></Typography>
        <Charts data={data} country={country} /> 
      </div>

    );
  }
}

export default App;

