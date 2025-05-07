import { Slide } from "spectacle";

export default function BrutalSlide({ children, color }: any) {
  return (
    <Slide className="slide" backgroundColor={color}>
      {children}
    </Slide>
  );
}
