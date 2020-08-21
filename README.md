# Restaurant Review <!-- omit in TOC -->

## Overview

Restaurant Review is a modern front-end redesign of a crowd-sourced business review  web application, built with React. The InfoPage is a microservice contained in the Restaurant Review application. 

![Overall Page](<README public/Overall App.png>)

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Getting Started](#getting-started)
- [Team Members](#team-members)

## Description

Restaurant Review contains the essential features in a modern business review details page, including:

- [Product Overview](#product-overview)
- [Ratings & Reviews](#ratings-&-reviews)

This application was developed based on strict design requirements in the form of a detailed design mock-up and a requirements document.

<!-- omit in TOC -->

### Product Overview

_Developed by [Takanori Sono](#team-members)_

All the requisite infomration for the specified business is located at the center of the business overview widget. The information displayed include business rating, name, category, number of reviews, and price.  

End-useres have the ability to randomly generate a review for the current business page as a proof of concept, updating the number of reviews and rating of the business.  

<!-- omit in TOC -->

### Ratings & Reviews

_Developed by [George Humphrey and Takanori Sono](#team-members)_

The ratings and reviews widget is located below the product overview. For a given business, all reviews are displayed with information about the reviewer, comment, and score of the business. 

The Product Overview service and Ratings and Review service communicate the number of reviews and overall score of the business.

## Getting Started

This project can be run locally by following these steps.

### Installation <!-- omit in TOC -->

1. Download or clone this git repository onto your local machine
2. Within the root directory, run `npm install` in your terminal

### Build <!-- omit in TOC -->

In the same directory, run `npm build` to build the requisite files

### Start the Server <!-- omit in TOC -->

Within the root directory, run `npm start` and then navigate to our [webpage](http://localhost:3000)

## Team Members

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><br/><a href="https://github.com/taktaktaka"><img src="https://live.staticflickr.com/8104/8525230481_ff0e205732_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>Takanori Sono</b></sub></a></td>
    <td align="center"><br/><a href=""><img src="https://live.staticflickr.com/5220/5462177379_3da3eb5fe1_b.jpg" width="130px;" height="100px;" alt=""/><br /><sub><b>George Humphrey</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
