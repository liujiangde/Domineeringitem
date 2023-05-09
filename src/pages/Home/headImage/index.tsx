import * as React from 'react'
import { Image } from 'antd'
interface IHeadImageProps {
  imageLink: string
}
const propsAreEqual = (prevProps: IHeadImageProps, nextProps: IHeadImageProps) =>
  prevProps.imageLink === nextProps.imageLink

const HeadImage: React.FC<IHeadImageProps> = React.memo(
  ({ imageLink }: IHeadImageProps) => (
    <Image
      width={20}
      // style={{ display: 'none' }}
      src={imageLink}
    />
  ),
  propsAreEqual,
)

export default HeadImage
