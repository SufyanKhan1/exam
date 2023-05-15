import styled from "styled-components";

export const Wrapper = styled.div`.landing-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
  }
  
  header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: #555;
  }
  
  section {
    margin-bottom: 40px;
  }
  
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  ol {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  ul {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  li {
    font-size: 18px;
    line-height: 1.5;
  }
  
  strong {
    font-weight: bold;
  }
  
  ul li:before {
    content: "\2022";
    margin-right: 10px;
  }
  
  .customer-review {
    font-style: italic;
    margin-bottom: 10px;
  }
  
  .customer-name {
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  @media (max-width: 600px) {
    h1 {
      font-size: 24px;
    }
  
    p {
      font-size: 16px;
    }
  
    h2 {
      font-size: 20px;
    }
  
    li {
      font-size: 16px;
    }
  }`;
