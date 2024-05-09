import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    content?: string
    box?: string
    arrow1?: string
    arrow2?: string
}
//"absolute hidden group-hover:inline-block bg-neutral-100 text-darkBlue text-xs p-2 whitespace-normal rounded left-1/2 w-full -translate-x-1/2 top-[calc(100%+5px)]"
//absolute hidden group-hover:inline-block text-white text-xs p-2 whitespace-normal rounded left-1/2 w-full -translate-x-1/2 top-[calc(100%+5px)] bg-gradient-to-r from-cyan-500 to-blue-500
//"absolute hidden group-hover:inline-block ml-[calc(50%-30px)] -mb-[1px] overflow-hidden"
//"h-10 w-10 origin-bottom-left rotate-45 transform bg-gradient-to-r from-cyan-500 to-blue-500"
export const Tooltip: FC<Props> = ({ content, children, box, arrow1, arrow2 }) => (
  <div id="tooltip" className="relative cursor-pointer group">
    <div className="mx-2 my-1">{children}</div>
    <div className={arrow1}>
      <div className={arrow2}></div>
    </div>
    <span
      className={box}
    >
      {content}
    </span>
  </div>
);

// Tooltip.propTypes = {
//   children: PropTypes.node.isRequired,
// };