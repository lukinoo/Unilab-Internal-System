import { useState } from "react"
import { FourthHeader } from "../../components/Headers/FourthHeader"
import { SProjectPageMainDiv } from "./ProjectPage.styled"
import { ProjectSlider } from "../../components/ProjectSlider"

const TestData = [
  {
    id: 1,
    src: "https://s3-alpha-sig.figma.com/img/eb02/a5e4/b2909e6a5dc39f47a4ba1841937dc804?Expires=1693785600&Signature=NeG5sDxB4Iya~ZvlmisjgqYzcAr~JlQ43P9IiP1YofSo5wWTP9N2aoc7nKTohQDv22abOwbO8u8d4ESQjOsv9Kp9QiZeCnwaHvj5EYUJEcDrX20zls9c9XawrEE634akopWvG8hy3nhprPFo5uBLhuXQPY~bR94aD4hSGzgzqkFdxMVepc4PMkSrCXJ5UO6a2JJS~Zz~0r3bEhk~yyDnb98mu-4zphmmhzCJ4sftWnoKJJONbhDJSYWyYLa0M6r3Yz2I2ZF4moX6Qv9ma93afwCO7Q3iKC87Z00vmQXQ3Ioxgx7oyGwgD68l6paM~2OLalrW6jnCTnGDMS5BbjKTyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 2,
    src: "https://s3-alpha-sig.figma.com/img/eb02/a5e4/b2909e6a5dc39f47a4ba1841937dc804?Expires=1693785600&Signature=NeG5sDxB4Iya~ZvlmisjgqYzcAr~JlQ43P9IiP1YofSo5wWTP9N2aoc7nKTohQDv22abOwbO8u8d4ESQjOsv9Kp9QiZeCnwaHvj5EYUJEcDrX20zls9c9XawrEE634akopWvG8hy3nhprPFo5uBLhuXQPY~bR94aD4hSGzgzqkFdxMVepc4PMkSrCXJ5UO6a2JJS~Zz~0r3bEhk~yyDnb98mu-4zphmmhzCJ4sftWnoKJJONbhDJSYWyYLa0M6r3Yz2I2ZF4moX6Qv9ma93afwCO7Q3iKC87Z00vmQXQ3Ioxgx7oyGwgD68l6paM~2OLalrW6jnCTnGDMS5BbjKTyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
  {
    id: 3,
    src: "https://s3-alpha-sig.figma.com/img/eb02/a5e4/b2909e6a5dc39f47a4ba1841937dc804?Expires=1693785600&Signature=NeG5sDxB4Iya~ZvlmisjgqYzcAr~JlQ43P9IiP1YofSo5wWTP9N2aoc7nKTohQDv22abOwbO8u8d4ESQjOsv9Kp9QiZeCnwaHvj5EYUJEcDrX20zls9c9XawrEE634akopWvG8hy3nhprPFo5uBLhuXQPY~bR94aD4hSGzgzqkFdxMVepc4PMkSrCXJ5UO6a2JJS~Zz~0r3bEhk~yyDnb98mu-4zphmmhzCJ4sftWnoKJJONbhDJSYWyYLa0M6r3Yz2I2ZF4moX6Qv9ma93afwCO7Q3iKC87Z00vmQXQ3Ioxgx7oyGwgD68l6paM~2OLalrW6jnCTnGDMS5BbjKTyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export const ProjectPage = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderChange = (i) => {
    setSliderIndex(i);
  };

  return (
    <SProjectPageMainDiv>
      <FourthHeader />
      <h2>საფინალო პროექტი</h2>
      <ProjectSlider onChange={handleSliderChange} data={TestData} imgHeight={'37.5rem'}/>
      {/* Large Slider */}
      {/* Project info */}
      {/* img slider */}
      {/* My role */}
      {/* Project link */}
      {/* Used tools */}
    </SProjectPageMainDiv>
  )
}