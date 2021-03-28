import css from 'styled-jsx/css'

export default css.global`
  html {
    font-family: sans-serif;
  }
  .container {
    display: block;
    margin: 30px 50px;
  }

  .flex-grid {
    display: flex;
    justify-content: space-between;
  }

  .col-2 {
    flex: 2;
    margin-right: 50px;
  }

  .col-1 {
    flex: 1;
  }

  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  @media (max-width: 600px) {
    .container {
      margin: 15px;
    }

    .flex-grid {
      display: block;
    }

    .col-1, .col-2 {
      margin: 0;
    }

    .margin-top-20\@md-down {
      margin-top:20px
    }

    .border\@md-down {
      border: 1px solid;
      padding: 10px;
    }
  }


  /* Cards container starts */
  .cards-container {
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;

    position: relative;
  }

  .card {
    flex: 1;
    flex-shrink: 1;
    flex-basis: 350px;
    padding: 15px 0;
  }

  .card__link {
    color: #333;
    text-decoration: none;
  }

  .card-image {
    width: 100%;
    margin-bottom: 20px;
  }

  .card-meta {
    font-family: sans-serif;
    position: relative;
    margin-bottom: 15px;
  }

    .card-meta__date{
      color: #333;
      padding-right: 40px;
      font-weight: 100;
    }

    .card-meta__date::after {
      content: '';
      position: absolute;
      background-color: #333;
      width: 30px;
      height: 1px;
      top: 9px;
      margin-left: 5px;
    }

  .card-title {
    font-size: 1.25em;
    line-height: 1.5;
    margin: 8px 0px;
  }

  .card-description {
    line-height: 2;
    margin-bottom: 20px;
  }

  .card__tag-container {
    font-size: 14px;
    margin-bottom: 15px;
  }

    .card__tags {
      color: #999;
    }

  .card-readmore-link {
    text-decoration: underline;
  }

  .cards-container {
    display: block;
  }

  @media (min-width: 600px) {
    .cards-container {
      display: flex;
    }

    .card {
      padding: 15px;
    }
  }

  /* Cards container ends */

  .line-after {
    position: relative;
  }

  .line-after::after {
    content: '';
    position: absolute;
    background-color: #333;
    width: 30px;
    height: 1px;
    top: 9px;
    margin-left: 5px;
  }

  .text-medium {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
  }

  .margin-bottom-20 {
    margin-bottom: 20px;
  }

  .text-center {
    text-align: center;
  }

  /* Article page starts */

  .article-container {
    margin: 15px 15px 30px;
  }

  @media (min-width: 1000px) {
    .article-container {
      margin: 15px 100px 100px;
    }
  }

  .article__title {
    font-size: 2rem;
    font-weight: 500;
  }

  h2, .article-sub__heading {
    font-weight: 900;
    font-size: 1.1rem
  }

  p, .article__content {
    line-height: 26px;
  }

  /* Article page ends */


  nav {
    text-align: center;
  }
  nav a {
    margin-right: 2px;
    padding: 4px;
  }
  main {
    display: flex;
    flex-direction: column;
  }
`

