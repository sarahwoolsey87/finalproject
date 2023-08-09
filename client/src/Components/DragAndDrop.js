import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

// export default function DragAndDrop({ todos }) {
//   return (
//     <DragDropContext>
//       <Droppable droppableId="characters">
//         {(droppableProvided) => (
//           <ul
//             className="characters"
//             {...droppableProvided.droppableProps}
//             ref={droppableProvided.innerRef}
//           >
//             {todos.map((todo, index) => (
//               <Draggable key={todo._id} draggableId={todo._id} index={index}>
//                 {(draggableProvided) => (
//                   <li
//                     ref={draggableProvided.innerRef}
//                     {...draggableProvided.draggableProps}
//                     {...draggableProvided.dragHandleProps}
//                   >
//                     <p>{todo.text}</p>
//                   </li>
//                 )}
//               </Draggable>
//             ))}
//             {droppableProvided.placeholder}
//           </ul>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// }
