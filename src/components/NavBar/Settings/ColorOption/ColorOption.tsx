import styles from "./ColorOption.module.css";
import React from "react";
import {IColors} from "../../../../interfaces/IColors";

interface IColorOptionProps {
  colors: IColors,
}

const ColorOption: React.FunctionComponent<IColorOptionProps> = (props) => {
  const {colors} = props;

  const colorArray: string[] = [colors.background, colors.backgroundAlt, colors.text, colors.accent, colors.accentAlt];

  const generateTiles =
    colorArray.map((item, index) => {
      return (
        <div className={styles.color} style={{backgroundColor: item}} key={index}/>
      )
    })

  return (
    <div className={styles.container}>
      {generateTiles}
    </div>
  )

}

export default ColorOption;