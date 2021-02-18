import styles from "./ColorOption.module.css";
import React from "react";
import {IColors} from "../../../../interfaces/IColors";
import {colorPalettes} from "../../../../provider/colorProvider";

interface IColorOptionProps {
  colors: IColors,
  setColors(colorPalette: IColors): void,
  index: number,
}

const ColorOption: React.FunctionComponent<IColorOptionProps> = (props) => {
  const {colors, index, setColors} = props;

  const colorArray: string[] = [colors.text, colors.accent, colors.background, colors.backgroundVariant];

  const colorOptionClickHandler = () => {
    setColors(colorPalettes[index]);
  }

  const generateTiles =
    colorArray.map((item, index) => {
      return (
        <div className={styles.color} style={{backgroundColor: item}} key={index} onClick={colorOptionClickHandler}/>
      )
    })

  return (
    <div className={styles.container}>
      {generateTiles}
    </div>
  )

}

export default ColorOption;