// import { useEffect, useState } from "react";

// const TypewritterText = (text) => {
//     const [displayText, setDisplayText] = useState('');
//     console.log('TEXT: ', text); 
//     useEffect(() => {
//         let i = 0; 
//         const typeChar = () => {
//             if (i < text.length) {
//                 setDisplayText(prevText => prevText + text.charAt(i));
//                 setTimeout(500); 
//             };
//             i++; 
//         };

//         typeChar(); 

//     }, text);

//     return (
//         <>
//         <ul>
//             {displayText.map((c, i) => {
//                 <li class='char' key={i}> {c} </li>
//             })};
//         </ul>
//         </>
//     ); 

// };

// export default TypewritterText; 