import React from 'react'
import styled from 'styled-components';
import {theme} from '../../../../theme'
import PrimaryButton from '../../../reusable-ui/PrimaryButton'
import {formatPrice} from '../../../../utils/maths'

export default function Product({imageSource, title, price }) {
  //state

  //comportements

  //afficher(render)
  return (
    <ProductStyled className="produit">
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className="text-info">
          <div className="title">{title}</div>
          <div className="description">
            <div className="left-description">{formatPrice(price)}</div>
            <div className="right-description">
              <PrimaryButton className="primary-button" label={"Ajouter"}>Ajouter</PrimaryButton>
            </div>
          </div>
        </div>
    </ProductStyled>
  )
}

//styledcomponents
const ProductStyled = styled.div`
  background: ${theme.colors.white};
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};
      }

      .primary-button {

      }
    }

  }
`;
